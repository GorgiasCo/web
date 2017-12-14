import React from 'react';
import MetaTags from 'react-meta-tags';
import uuid from 'uuid/v1';
import {BrowserView, isIOS, isAndroid, isMobile} from 'react-device-detect'

let profileID = null;
let profileTitle = null;

export default class AppProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLanding: true,
            isLoading: true,
            profileData: {},
        }
        //console.log('hi avval' + new Date);
    }

    deepLinkRedirect = (url) => {
        //console.log('hi0' + new Date);
        window.location = url;
    }

    componentWillMount() {

    }

    componentDidMount() {
        if (window.navigator.standalone || window.innerHeight < 61 || window.matchMedia('(display-mode: standalone)').matches) {
            if (this.props.profileID !== undefined) {
                // profileID = this.props.profileID;
                // profileTitle = this.props.profileURL;
                this.setState({
                    profileID: this.props.profileID,
                    profileTitle: this.props.profileURL,
                    isLoading: false,
                    isLanding: true,
                }, () =>
                    {
                        if (window.navigator.standalone || window.innerHeight < 61 || window.matchMedia('(display-mode: standalone)').matches) {
                            if (isMobile) {
                                let url = null;
                                if (isAndroid) {
                                    url = "https://play.google.com/store/apps/details?id=com.gorgias.app";
                                    window.location = 'gorgias://app?profileid=' + this.props.profileID;
                                } else {
                                    url = "https://itunes.apple.com/us/app/gorgias/id1193285323";
                                    window.location = "gorgias://profileid=" + this.props.profileID;
                                }
                                setTimeout(this.deepLinkRedirect.bind(this, url), 2000);
                            };
                        }
                    }
                );
                console.log('iam done ;)');
            } else {
                this.prepareProfile(this.props.profileURL);
            }
        } else {
            this.prepareProfile(this.props.profileURL);
        }
    }

    componentDidUpdate(prevProps, prevState) {

        console.log('componentDidUpdate');
    }

    prepareProfile = (profileURL) => {
        var urlProfile = "http://gorgiasapp-v3.azurewebsites.net/api/Web/Profile/Low/App/" + profileURL;
        let submitTitle = "Standalone";
        fetch(urlProfile)
            .then(function (response) {
                return response.json();
            })
            .then(response => {
                    console.log(response);
                    if (window.navigator.standalone || window.innerHeight < 61 || window.matchMedia('(display-mode: standalone)').matches) {
                        if (isMobile) {
                            submitTitle = "Loading App...";
                        } else {
                            submitTitle = "Next";
                        }
                    }

                    // profileID = response.Result.ProfileID;
                    // profileTitle = response.Result.ProfileFullname;

                    this.setState({
                        profileData: response.Result,
                        isLoading: false,
                        isLanding: true,
                        submitTitle: submitTitle,
                        profileID: response.Result.ProfileID,
                        profileTitle: response.Result.ProfileFullname,
                    });


                    return response.Result;
                }
            )
            .then(response => {
                    console.log(profileID, response, '2nd then ;)', this.props.profileURL, 'willMount ;)', window.innerHeight, window.navigator, window.matchMedia('(display-mode: standalone)').matches);
                    console.log(isMobile, isAndroid, isIOS);
                    if (window.navigator.standalone || window.innerHeight < 61 || window.matchMedia('(display-mode: standalone)').matches) {
                        if (isMobile) {
                            let url = null;
                            if (isAndroid) {
                                url = "https://play.google.com/store/apps/details?id=com.gorgias.app";
                                window.location = 'gorgias://app?profileid=' + response.ProfileID;
                            } else {
                                url = "https://itunes.apple.com/us/app/gorgias/id1193285323";
                                window.location = "gorgias://profileid=" + response.ProfileID;
                            }
                            setTimeout(this.deepLinkRedirect.bind(this, url), 2000);
                        }
                    }
                }
            );
    }

    _handleClick() {
        if (!window.navigator.standalone || window.innerHeight > 61 || !window.matchMedia('(display-mode: standalone)').matches) {
            this.setState({
                isLanding: !this.state.isLanding
            });
        }
    }

    //profileID
    renderLoginForm() {
        const {isLoading, profileData, isLanding, submitTitle} = this.state;
        return (
            !isLoading ?
                <div className="content_wrapper clearfix">
                    <MetaTags>
                        <title>{this.state.profileTitle}</title>
                        <meta name="apple-mobile-web-app-title" content={this.state.profileTitle}/>
                        <link rel="apple-touch-icon-precomposed" sizes="72x72"
                              href={`https://gorgiasasia.blob.core.windows.net/icons/72-profile-${this.state.profileID}.png?timestamp=${uuid()}`}/>
                        <link rel="apple-touch-icon-precomposed" sizes="114x114"
                              href={`https://gorgiasasia.blob.core.windows.net/icons/114-profile-${this.state.profileID}.png?timestamp=${uuid()}`}/>
                        <link rel="apple-touch-icon-precomposed" sizes="144x144"
                              href={`https://gorgiasasia.blob.core.windows.net/icons/144-profile-${this.state.profileID}.png?timestamp=${uuid()}`}/>
                    </MetaTags>
                    <div className="sections_group">
                        <div className="entry-content tk-background-ImgFit"
                             style={{
                                 backgroundImage: `url(https://gorgiasasia.blob.core.windows.net/images/webcover-${this.state.profileID}?timestamp=${uuid()})`,
                                 position: "sticky"
                             }}>
                            <div className="section dark" id="featured" style={{
                                height: 100 + "vh",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center top",
                                backgroundSize: "cover"
                            }}>
                                <div className="section_wrapper clearfix">
                                    <div className="items_group clearfix" style={{height: 100 + "vh"}}>
                                        <div id="tk-modal-form" style={{color: "#de0083"}}>
                                            <div className="" data-anim-type="fadeIn">
                                                <div id="tk-overlay-form">
                                                    <img className="tk-AppAvatarImg"
                                                         src={`https://gorgiasasia.blob.core.windows.net/images/profile-${this.state.profileID}.jpg?timestamp=${uuid()}`}
                                                         width="33%"/>
                                                    <h3 style={{
                                                        textAlign: 'center',
                                                        color: "#ff0088",
                                                        marginBottom: 20 + "px"
                                                    }}>{this.state.profileTitle}</h3>
                                                    {isLanding ?
                                                        <label className="login-label tkFont1 tkFont-Form"
                                                               style={{textAlign: "center", width: 245 + "px"}}>
                                                            <span>To Get my Micro-App, click on the "Access to Private" and follow instruction</span>
                                                        </label> :
                                                        this.renderInstructions()
                                                    }
                                                    <div className="column one" style={{margin: 0}}>
                                                        <input onClick={() => this._handleClick()} type="submit"
                                                               value={isLanding ? submitTitle : "Done"} id="submit"
                                                               className="tkFont-Bold"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
        );
    }

    renderNormal() {
        const {isLoading, profileData, isLanding, submitTitle} = this.state;
        return (
            !isLoading ?
                <div className="content_wrapper clearfix">
                    <MetaTags>
                        <title>{profileData.ProfileFullname}</title>
                        <meta name="apple-mobile-web-app-title" content={profileData.ProfileFullname}/>
                        <link rel="apple-touch-icon-precomposed" sizes="72x72"
                              href={`https://gorgiasasia.blob.core.windows.net/icons/72-profile-${profileData.ProfileID}.png?timestamp=${uuid()}`}/>
                        <link rel="apple-touch-icon-precomposed" sizes="114x114"
                              href={`https://gorgiasasia.blob.core.windows.net/icons/114-profile-${profileData.ProfileID}.png?timestamp=${uuid()}`}/>
                        <link rel="apple-touch-icon-precomposed" sizes="144x144"
                              href={`https://gorgiasasia.blob.core.windows.net/icons/144-profile-${profileData.ProfileID}.png?timestamp=${uuid()}`}/>
                    </MetaTags>
                    <div className="sections_group">
                        <div className="entry-content tk-background-ImgFit"
                             style={{
                                 backgroundImage: `url(https://gorgiasasia.blob.core.windows.net/images/webcover-${profileData.ProfileID}?timestamp=${uuid()})`,
                                 position: "sticky"
                             }}>
                            <div className="section dark" id="featured" style={{
                                height: 100 + "vh",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center top",
                                backgroundSize: "cover"
                            }}>
                                <div className="section_wrapper clearfix">
                                    <div className="items_group clearfix" style={{height: 100 + "vh"}}>
                                        <div id="tk-modal-form" style={{color: "#de0083"}}>
                                            <div className="" data-anim-type="fadeIn">
                                                <div id="tk-overlay-form">
                                                    <img className="tk-AppAvatarImg"
                                                         src={`https://gorgiasasia.blob.core.windows.net/images/profile-${profileData.ProfileID}.jpg?timestamp=${uuid()}`}
                                                         width="33%"/>
                                                    <h3 style={{
                                                        textAlign: 'center',
                                                        color: "#ff0088",
                                                        marginBottom: 20 + "px"
                                                    }}>{profileData.ProfileFullname}</h3>
                                                    {isLanding ?
                                                        <label className="login-label tkFont1 tkFont-Form"
                                                               style={{textAlign: "center", width: 245 + "px"}}>
                                                            <span>To Get my Micro-App, click on the "Access to Private" and follow instruction</span>
                                                        </label> :
                                                        this.renderInstructions()
                                                    }
                                                    <div className="column one" style={{margin: 0}}>
                                                        <input onClick={() => this._handleClick()} type="submit"
                                                               value={isLanding ? submitTitle : "Done"} id="submit"
                                                               className="tkFont-Bold"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : null
        );
    }

    renderInstructions() {
        return (
            <label className="login-label tkFont1 tkFont-Form"
                   style={{textAlign: "center", width: 245 + "px"}}>
                {isAndroid ?
                    <p>Android, To add this app, open the browser option menu
                        <img
                            src="tkImages/android-home-gorgias.png"
                            width="20"/>
                        and tap on Add to homescreen.
                    </p> :
                    <p>
                        The menu can be accessed by pressing the menu hardware button
                        if your device has one, or by tapping the top right menu
                        icon <img
                        src="tkImages/android-home-gorgias.png"
                        width="20"/>
                    </p>
                }
            </label>
        );
    }

    render() {
        console.log(this.state.profileID, 'Render ;)');
        return this.renderLoginForm();
    }
}
