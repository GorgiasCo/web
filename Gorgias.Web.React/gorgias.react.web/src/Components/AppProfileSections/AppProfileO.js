import React from 'react';

export default class AppProfile extends React.Component {

    constructor() {
        super();
        this.state = {editing: true}
    }

    _handleClick() {
        this.setState({
            editing: !this.state.editing
        });
    }

    renderNormal() {
        return (
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                    <div className="entry-content tk-background-ImgFit"
                         style={{backgroundImage: "url(https://gorgiasasia.blob.core.windows.net/images/webcover-1109?timestamp=403)"}}>
                        {/*login*/}
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
                                        <div className="animate " data-anim-type="fadeIn">
                                            <div id="tk-overlay-form">
                                                <form>

                                                    <img className="tk-AppAvatarImg"
                                                         src="https://gorgiasasia.blob.core.windows.net/images/profile-1109.jpg?timestamp=489"
                                                         width="50" height="50"/>

                                                    <h3 style={{
                                                        textAlign: 'center',
                                                        color: "#ff0088",
                                                        marginBottom: 20 + "px"
                                                    }}>Twwinko</h3>
                                                    <label className="login-label tkFont1 tkFont-Form"
                                                           style={{textAlign: "center", width: 245 + "px"}}>To Get my
                                                        Micro-App, click on the "Access to Private" and follow
                                                        instruction</label>
                                                    <div className="column one" style={{margin: 0}}>
                                                        <input onClick={this._handleClick.bind(this)} type="submit"
                                                               value="Access to Private App" id="submit"
                                                               className="tkFont-Bold"/>
                                                    </div>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderInstructions() {
        return (
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                    <div className="entry-content tk-background-ImgFit"
                         style={{backgroundImage: "url(https://gorgiasasia.blob.core.windows.net/images/webcover-1109?timestamp=403)"}}>
                        {/*login*/}
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
                                        <div className="animate " data-anim-type="fadeIn">
                                            <div id="tk-overlay-form">
                                                <form>

                                                    <img className="tk-AppAvatarImg"
                                                         src="https://gorgiasasia.blob.core.windows.net/images/profile-1109.jpg?timestamp=489"
                                                         width="50" height="50"/>
                                                    <label className="login-label tkFont1 tkFont-Form"
                                                           style={{textAlign: "center", width: 245 + "px"}}>
                                                        Android, To add this app, open the browser option menu and tap
                                                        on Add to homescreen.
                                                        <br/>The menu can be accessed by pressing the menu hardware
                                                        button if your device has one, or by tapping the top right menu
                                                        icon</label>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.state.editing) {
            return this.renderNormal();
        }
        else {
            return this.renderInstructions();
        }
    }
}
