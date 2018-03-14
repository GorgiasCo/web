import React from "react";
import {BrowserView, isAndroid, isIOS, isMobile} from "react-device-detect";
import OwlCarousel from "react-owl-carousel";

export default class AppProfileInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLanding: true,
            isLoading: false,
            profileData: {},
            profileStories: null,
        }
    }

    deepLinkRedirect = (url) => {
        //console.log('hi0' + new Date);
        window.location = url;
    }

    componentWillMount() {

    }

    componentDidMount() {
        //console.log('app profile', this.props, this.props.match.params.id);
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

    renderStory = (item) => {
        return <li className="tklist">
            <img width="287" height="339" className="tk fit2"
                 src={item.AlbumCover}
                 alt="portfolio_1"/>
        </li>
    }

    //profileID
    renderMiniProfile() {
        const {isLoading} = this.state;
        return (
            !isLoading ?
                <div className="column mcb-column one-second column_column"
                     style={{float: "none", textAlign: "center", margin: "25px auto 0 auto",}}>
                    <div >
                        <img className="tk-AppAvatarImg" style={{left: "0"}}
                             src={this.props.data.ProfileImage}
                             width="50" height="50"/>
                        <h2 style={{color: "#ff0088"}}>
                            {this.props.data.ProfileFullname}
                        </h2>
                        <h4 className="tkFont1" style={{color: "darkgrey", fontWeight: "bold"}}>
                            {this.props.data.ProfileFullnameEnglish}
                        </h4>
                        <p style={{minWidth:200}}>
                            {this.props.data.ProfileShortDescription}
                        </p>
                        <table className="Profile-Info-Table-banner">
                            <tr>
                                <td>{this.props.data.TotalViews}</td>
                                <td>{this.props.data.TotalConnections}</td>
                                <td>{this.props.data.TotalEngagements}</td>
                            </tr>
                            <tr className="heading">
                                <td>Views</td>
                                <td>StayOn</td>
                                <td>React</td>
                            </tr>
                        </table>
                    </div>

                    {/* <hr style={{margin: 0 + " auto " + 30 + "px"}}/>*/}
                    <OwlCarousel
                        className="owl-theme"
                        autoWidth={false}
                        loop={false}
                        margin={10}
                        nav={false}
                        dots={true}
                        autoplay={false}
                        autoplayTimeout={1000}
                        autoplayHoverPause={true}
                        responsiveClass={false}
                        responsive={{
                            0: {
                                items: 2,
                                nav: false,
                                margin: 10,
                                center: true,

                            },
                            400: {
                                items: 2,
                                nav: false,
                                margin: 10,
                                center: true,

                            },
                            600: {
                                items: 3,
                                nav: false,
                                margin: 15,
                            },

                            1000: {
                                items: 3,
                                nav: false,
                                loop: false,
                                margin: 15,

                            },

                            1200: {
                                items: 3,
                                nav: false,
                                loop: false,
                                margin: 15,
                                center: false,

                            },

                            1366: {
                                items: 2,
                                nav: false,
                                loop: false,
                                margin: 5,
                            },

                            1920: {
                                items: 2,
                                nav: false,
                                loop: false,
                                margin: 5,
                                center: false,
                            },

                            2560: {
                                items: 2,
                                nav: false,
                                loop: false,
                                margin: 5,
                            }
                        }}
                    >
                        {this.props.profileStories ? this.props.profileStories.map(item => this.renderStory(item)) : null}
                    </OwlCarousel>
                    <br/>
                    <hr/>
                    <div className="column mcb-column one-second column_column"
                         style={{float: "none", textAlign: "center", margin: "0px auto"}}>
                        <p style={{marginTop: "20px"}}>
                            Scan the code!
                        </p>
                        <img className="tk-AppAvatarImg qrCode" style={{left: 0}}
                             src="https://cdnqrcgde.s3-eu-west-1.amazonaws.com/wp-content/uploads/2013/11/jpeg.jpg"
                             width="150" height="150"/>
                        <input type="submit" id="submit" value="GET APP" className="tkFont-Bold"
                               style={{width: "100%"}}/>
                    </div>
                </div> : null
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
                        The mmenu can be accessed by pressing the menu hardware button
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
        return this.renderMiniProfile();
    }
}
