import React from 'react';

export class AppProfile extends React.Component {
  render (){
    return (
        <div className="content_wrapper clearfix">
            <div className="sections_group">
              <div className="entry-content tk-background-ImgFit" style="background-image:url(https://gorgiasasia.blob.core.windows.net/images/webcover-1109?timestamp=403)">
                {/*login*/}
                <div className="section dark" id="featured" style={{height: 100+"vh", backgroundImage:"url(https://www.wallpaperup.com/uploads/wallpapers/2015/09/22/808178/00e8bff9f8589282d95264db8916df89.jpg)", backgroundRepeat:"no-repeat", backgroundPosition:"center top", backgroundSize:"cover"}}>
                    <div className="section_wrapper clearfix">
                      <div className="items_group clearfix" style={{height: 100+"vh"}}>
                         <div id="tk-modal-form" style={{color: "#de0083"}}>
                           <div className="animate " data-anim-type="fadeIn">
                            <div id="tk-overlay-form">
                               <form>

                                 <img class="tk-AppAvatarImg" src="https://gorgiasasia.blob.core.windows.net/images/profile-1109.jpg?timestamp=489" width="50" height="50" class="login-gorgias-logo"/>

                                 <h3 style={{textAlign:'center', color: "#ff0088", marginBottom:20+"px"}}>Twinko</h3>
                                 <label class="login-label tkFont1 tkFont-Form" style={{textAlign:"center", width:245+"px"}}>To Get my Micro-App, click on the "Access to Private" and follow instruction</label>
                                 <div class="column one" style={{margin:0}}>
                                     <input type="submit" value="Access to Private App" id="submit" class="tkFont-Bold" onClick="return check_values();"/>
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
