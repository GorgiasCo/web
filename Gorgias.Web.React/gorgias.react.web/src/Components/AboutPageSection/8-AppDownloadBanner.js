import React from 'react';


export default class AppDownloadBanner extends React.Component {
    render() {
        return (
            <div className="section mcb-section" id="download" style={{
                paddingTop: 50 + "px",
                paddingBottom: 50 + "px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundColor: "#333"
            }}>
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column" style={{marginTop: 30 + "px"}}>
                                <div className="column_attr align_center">
                                    <h2 className="tkFont1">Join in the fun & be Gorgias!</h2>
                                    <h4 className="tkFont1" style={{color: "#ff0088"}}>Get our Gorgias app!</h4>
                                    <hr className="no_line" style={{margin: 0 + " auto " + 25 + "px"}}/>
                                    <p style={{color: "#ccc"}}>Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p style={{color: "#ccc"}}>Sed ut perspiciatis unde omni risus tincidunt
                                        tristique</p>
                                </div>
                            </div>
                            <div className="column mcb-column one-fourth column_placeholder">
                                <div className="placeholder">
                                    &nbsp;
                                </div>
                            </div>
                            <div className="column mcb-column one-fourth column_image ">
                                <div className="image_frame image_item scale-with-grid aligncenter no_border">
                                    <div className="image_wrapper" style={{padding: 15 + "px"}}>
                                        <a href="#" title="Download on Appstore">
                                            <div className="mask" style={{display: "none"}}></div>
                                            <img className="scale-with-grid" src="tkImages/appstore-icon.png" alt=""
                                                 width="100" height="85"/>
                                        </a>
                                        <div className="image_links" style={{display: "none"}}>
                                            <a href="#" className="link"><i className="icon-link"></i></a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="column mcb-column one-fourth column_image ">
                                <div className="image_frame image_item scale-with-grid aligncenter no_border">
                                    <div className="image_wrapper" style={{padding: 15 + "px"}}>
                                        <a href="#" title="Download on Playstore">
                                            <div className="mask" style={{display: "none"}}></div>
                                            <img className="scale-with-grid" src="tkImages/playstore-icon-white.png"
                                                 alt="" width="100" height="85"/>
                                        </a>
                                        <div className="image_links" style={{display: "none"}}>
                                            <a href="#" className="link"><i className="icon-link"></i></a></div>
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
