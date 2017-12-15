import React from 'react';


export default class AppDownload extends React.Component {
  render (){
    return (
            <div className="section mcb-section tkSection-padding" id="download" >
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column" style={{marginTop:30+"px"}}>
                                <div className="column_attr align_center">
                                    <h2 className="tkFont1">Gorgias StoryLand app</h2>
                                    <hr className="no_line" style={{margin: 0+" auto "+25+"px"}}/>
                                    <p style={{color:"#ccc"}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p style={{color:"#ccc"}}>Sed ut perspiciatis unde omni risus tincidunt tristique</p>
                                </div>
                            </div>
                            <div className="column mcb-column one-fourth column_placeholder">
                                <div className="placeholder">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="column mcb-column one-fourth column_image ">
                                <div className="image_frame image_item scale-with-grid aligncenter no_border">
                                    <div className="image_wrapper" style={{padding: 15+"px"}}>
                                        <a href="https://itunes.apple.com/us/app/gorgias/id1193285323" target="_blank" title="Download on Appstore">
                                            <div className="mask" style={{display:"none"}}></div><img className="scale-with-grid" src="tkImages/appstore-icon.png" alt="" width="100" height="85" />
                                        </a>
                                        <div className="image_links" style={{display:"none"}}>
                                            <a href="https://itunes.apple.com/us/app/gorgias/id1193285323" target="_blank" className="link"><i className="icon-link"></i></a> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column mcb-column one-fourth column_image ">
                                <div className="image_frame image_item scale-with-grid aligncenter no_border">
                                    <div className="image_wrapper" style={{padding:15+"px"}}>
                                        <a href="https://play.google.com/store/apps/details?id=com.gorgias.app" target="_blank" title="Download on Playstore">
                                            <div className="mask" style={{display:"none"}}></div><img className="scale-with-grid" src="tkImages/playstore-icon-white.png" alt="" width="100" height="85" />
                                        </a>
                                        <div className="image_links" style={{display:"none"}}>
                                            <a href="https://play.google.com/store/apps/details?id=com.gorgias.app" target="_blank" className="link"><i className="icon-link"></i></a> </div>
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
