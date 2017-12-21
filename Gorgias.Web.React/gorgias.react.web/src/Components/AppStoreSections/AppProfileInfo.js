import React from 'react';
import MetaTags from 'react-meta-tags';
import uuid from 'uuid/v1';
import {BrowserView, isIOS, isAndroid, isMobile} from 'react-device-detect'
import OwlCarousel from 'react-owl-carousel';

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
                  <div id="AppProfileInfo" className="section mcb-section tkSection-padding bg-color-2">
                      <div className="section_wrapper mcb-section-inner">
                          <div className="wrap mcb-wrap one  valign-top clearfix">
                              <div className="mcb-wrap-inner">
                                      <div className="column mcb-column one-second column_column" style={{
                                          float: "none",
                                          marginTop: 0 + "px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          textAlign: "center"
                                      }}>
                                      <div className="column_attr clearfix">
                                          <h2 className="tkFont1" style={{color: "white"}}>App Profile Info</h2>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="wrap mcb-wrap one  valign-top clearfix" style={{margin: 0 + "px auto"}}>
                              <div className="mcb-wrap-inner">

                                  <div className="column mcb-column one column_column"
                                       style={{margin: 1 + "%" + 1 + "%"}}>
                                      <div className="column_attr tkPanels">



                                           <div className="column mcb-column one-second column_column" style={{float: "none", textAlign: "center",margin:"25px auto 0 auto"}}>

                                             <img className="tk-AppAvatarImg" style={{left:"0"}}
                                                  src="https://gorgiasasia.blob.core.windows.net/images/profile-4125.jpg?timestamp=2e1e6114-e604-11e7-a557-4fc1842ba146"
                                                  width="50" height="50"/>

                                             <h2 style={{color: "#ff0088"}}>Twinko</h2>

                                             <h4 className="tkFont1" style={{color:"darkgrey", fontWeight:"bold"}}>Miki c Sze</h4>

                                             <p>
                                                An aspiring singer turned model. Contact me at ... I wish to be a unicorn one day :D
                                             </p>
                                           </div>

                                        <hr style={{margin: 0 + " auto " + 30 + "px"}}/>

                                          <OwlCarousel
                                              className="owl-theme"
                                              autoWidth={false}
                                              loop={false}
                                              margin={10}
                                              nav={false}
                                              dots={false}
                                              autoplay={false}
                                              autoplayTimeout={1000}
                                              autoplayHoverPause={true}
                                              responsiveClass= {false}
                                              responsive= {{
                                                0: {
                                                  items: 2,
                                                  nav: false,
                                                  margin:10,
                                                  center:true,

                                                },
                                                400: {
                                                  items: 2,
                                                  nav: false,
                                                  margin:10,
                                                  center:true,

                                                },
                                                600: {
                                                  items: 3,
                                                  nav: false,
                                                  margin: 15,
                                                },

                                                1000: {
                                                  items: 4,
                                                  nav: false,
                                                  loop: false,
                                                  margin: 15,

                                                },

                                                1200: {
                                                  items: 3,
                                                  nav: false,
                                                  loop: false,
                                                  margin: 15,
                                                  center:false,

                                                },

                                                1366:{
                                                  items: 4,
                                                  nav: false,
                                                  loop: false,
                                                  margin: 15,
                                                },

                                                1920:{
                                                  items: 4,
                                                  nav: false,
                                                  loop: false,
                                                  margin: 15,
                                                },

                                                2560:{
                                                  items: 3,
                                                  nav: false,
                                                  loop: false,
                                                  margin: 15,
                                                }
                                              }}
                                          >
                                            <li className="tklist">
                                              <img width="287" height="339" className="tk fit2" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1"/>
                                            </li>
                                            <li className="tklist">
                                              <img width="287" height="339" className="tk fit2" src="https://gorgiasasia.blob.core.windows.net/images/profile-4125.jpg" alt="portfolio_1"/>
                                            </li>
                                            <li className="tklist">
                                              <img width="287" height="339" className="tk fit2" src="https://gorgiasasia.blob.core.windows.net/images/profile-1133.jpg" alt="portfolio_1"/>
                                            </li>
                                            <li className="tklist">
                                              <img width="287" height="339" className="tk fit2" src="https://gorgiasasia.blob.core.windows.net/images/profile-4125.jpg" alt="portfolio_1"/>
                                            </li>
                                            <li className="tklist">
                                              <img width="287" height="339" className="tk fit2" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1"/>
                                            </li>
                                            <li className="tklist">
                                              <img width="287" height="339" className="tk fit2" src="https://gorgiasasia.blob.core.windows.net/images/profile-1133.jpg" alt="portfolio_1"/>
                                            </li>

                                        </OwlCarousel>


                                        <div className="column mcb-column one-second column_column" style={{float: "none", textAlign: "center",margin:"0px auto"}}>

                                          <p style={{marginTop:"20px"}}>
                                            Scan the code!
                                          </p>

                                          <img className="tk-AppAvatarImg qrCode" style={{left:0}}
                                                 src="http://cdnqrcgde.s3-eu-west-1.amazonaws.com/wp-content/uploads/2013/11/jpeg.jpg"
                                                 width="150" height="150"/>

                                          <input type="submit" id="submit" value="GET APP" className="tkFont-Bold" style={{width:"100%"}}/>

                                        </div>

                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>: null

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
        console.log(this.state.profileID, 'Render ;)');
        return this.renderLoginForm();
    }
}
