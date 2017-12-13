import React from 'react';

export default class AppProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLanding: true,
            isLoading: true,
            profileData: {},
        }
    }

    componentWillMount() {
        console.log(this.props.profileURL, 'willMount ;)', window.innerHeight ,window.navigator, window.matchMedia('(display-mode: standalone)').matches);

        if(window.navigator.standalone != undefined){

        }

        if(window.navigator.standalone || window.innerHeight < 61 || window.matchMedia('(display-mode: standalone)').matches){
            window.location = "https://itunes.apple.com/us/app/gorgias/id1193285323";
        } else {

        }


        this.prepareProfile(this.props.profileURL);
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
                if(window.matchMedia('(display-mode: standalone)').matches){
                    submitTitle = "Standalone";
                } else {
                    submitTitle = "Next";
                }
                this.setState({
                    profileData: response.Result,
                    isLoading: false,
                    isLanding: true,
                    submitTitle: submitTitle,
                });
            });
    }


    _handleClick() {
        this.setState({
            isLanding: !this.state.isLanding
        });
    }

    renderNormal() {
        const {isLoading, profileData, isLanding, submitTitle} = this.state;
        return (
            !isLoading ?
                <div className="content_wrapper clearfix">
                    <div className="sections_group">
                        <div className="entry-content tk-background-ImgFit"
                             style={{
                                 backgroundImage: `url(https://gorgiasasia.blob.core.windows.net/images/webcover-${profileData.ProfileID})`,
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
                                                         src={`https://gorgiasasia.blob.core.windows.net/images/profile-${profileData.ProfileID}.jpg`}
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
                <p>Android, To add this app, open the browser option menu
                    <img
                        src="tkImages/android-home-gorgias.png"
                        width="20"/>
                    and tap on Add to homescreen.
                </p>
                <p>
                    The menu can be accessed by pressing the menu hardware button
                    if your device has one, or by tapping the top right menu
                    icon <img
                    src="tkImages/android-home-gorgias.png"
                    width="20"/>
                </p>
            </label>
        );
    }

    render() {
        return this.renderNormal();
    }
}
