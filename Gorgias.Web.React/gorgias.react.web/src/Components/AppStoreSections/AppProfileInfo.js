import React from 'react';
import MetaTags from 'react-meta-tags';
import uuid from 'uuid/v1';
import {BrowserView, isIOS, isAndroid, isMobile} from 'react-device-detect'

let profileID = null;
let profileTitle = null;

export default class AppProfileInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLanding: true,
            isLoading: false,
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

    }

    componentDidUpdate(prevProps, prevState) {

        console.log('componentDidUpdate');
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
        const {isLoading} = this.state;
        return (
            !isLoading ?
                <div className="content_wrapper clearfix">

                    <div className="sections_group">
                        <div className="entry-content tk-background-ImgFit"
                             style={{
                                 backgroundImage: `url(https://gorgiasasia.blob.core.windows.net/images/webcover-1010)`,
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
                                                         src={`https://gorgiasasia.blob.core.windows.net/images/profile-1010.jpg`}
                                                         width="33%"/>
                                                    <h3 style={{
                                                        textAlign: 'center',
                                                        color: "#ff0088",
                                                        marginBottom: 20 + "px"
                                                    }}>{this.state.profileTitle}</h3>
                                                    {isLoading ?
                                                        <label className="login-label tkFont1 tkFont-Form"
                                                               style={{textAlign: "center", width: 245 + "px"}}>
                                                            <span>To Get my Micro-App, click on the "Access to Private" and follow instruction</span>
                                                        </label> :
                                                        this.renderInstructions()
                                                    }
                                                    <div className="column one" style={{margin: 0}}>
                                                        <input onClick={() => this._handleClick()} type="submit"
                                                               value={"Done"} id="submit"
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
