import React from 'react';

export default class LoginForm1 extends React.Component {
  render (){
    return (
        <div className="content_wrapper clearfix">
            <div className="sections_group">
              <div className="entry-content">
                {/*login*/}
                <div className="section dark" id="featured" style={{height: 100+"vh", backgroundImage:"url(https://www.wallpaperup.com/uploads/wallpapers/2015/09/22/808178/00e8bff9f8589282d95264db8916df89.jpg)", backgroundRepeat:"no-repeat", backgroundPosition:"center top", backgroundSize:"cover"}}>
                    <div className="section_wrapper clearfix">
                      <div className="items_group clearfix" style={{height: 100+"vh"}}>
                         <div id="tk-modal-form" style={{color: "#de0083"}}>
                           <div className="animate " data-anim-type="fadeIn">
                            <div id="tk-overlay-form">
                               <form>

                                    <label className="login-label tkFont1 tkFont-Form">Great! Now Key in your new password</label>

                                    <input type="email" style={{textAlign: "left", paddingLeft: "0px"}} placeholder="New password" onfocus="this.placeholder=''" onblur="this.placeholder='New password'" required=""/>


                                    <input type="password" style={{textAlign:"left", paddingLeft: "0px"}} ng-model="loginData.password" placeholder="Confirm new password" onfocus="this.placeholder=''" onblur="this.placeholder='Confirm new password'" required=""/>

                                    <div style={{display:"flex"}}>
                                      <div className="column one" style={{margin:"0 1% 0px"}}>
                                          <input type="submit" value="Confirm" id="submit" onClick="return check_values();"/>

                                      </div>
                                      <div className="column one" style={{margin:" 0 1% 0px"}}>
                                          <input type="submit" value="Cancel" id="submit" onClick="return check_values();"/>
                                      </div>
                                    </div>

                                    <div className="login-action error-message ng-binding">
                                        <span className="tkFontSmall" style={{color:"#ff0088"}}>The passwords did not match! Please try again.</span>
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
}
