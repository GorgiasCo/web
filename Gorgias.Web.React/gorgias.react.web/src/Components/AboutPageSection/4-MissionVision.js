import React from 'react';


export default class MissionVision extends React.Component {
    render() {
        return (
            <div className="section mcb-section" style={{
                paddingTop: 50 + "px",
                paddingBottom: 50 + "px",
                backgroundColor: "whitesmoke",
                backgroundImage: "none",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom"
            }}>
                <div className="section_wrapper mcb-section-inner">

                    <div className="wrap mcb-wrap one  valign-top clearfix" style={{margin: 0 + "px auto"}}>
                        <div className="mcb-wrap-inner">

                            <div className="column mcb-column one-third column_column ">
                                <div className="animate " data-anim-type="fadeInUpLarge">
                                    <div className="column_attr clearfix align_center tkPanels"
                                         style={{height: 250 + "px"}}>
                                        <h4>Our Mission</h4>
                                        <div
                                            className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                            <div className="image_wrapper"><img className="scale-with-grid"
                                                                                src="images/home_surveyor_sep2.png"
                                                                                alt="home_surveyor_sep2" width="24"
                                                                                height="2"/>
                                            </div>
                                        </div>
                                        <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                        <p>
                                            To bring up and make Gorgias® an establish brand, a well known business, a
                                            biggest mobile app platform with the most advance technology of advertising.
                                            GORGIAS®, BrandSO and BA platform will expand to others countries in Asia.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className="column mcb-column one-third column_column ">
                                <div className="animate " data-anim-type="fadeInUp">
                                    <div className="column_attr clearfix align_center tkPanels"
                                         style={{height: 250 + "px"}}>
                                        <h4>Our Vision</h4>
                                        <div
                                            className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                            <div className="image_wrapper"><img className="scale-with-grid"
                                                                                src="images/home_surveyor_sep2.png"
                                                                                alt="home_surveyor_sep2" width="24"
                                                                                height="2"/>
                                            </div>
                                        </div>
                                        <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                        <p>
                                            To become the biggest celebrities, proffessional and brands platform in Asia
                                            and even around the globe.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="column mcb-column one-third column_column ">
                                <div className="column_attr clearfix align_center"
                                     style={{padding: 0 + " " + 10 + "% " + 0 + " " + 10 + "%"}}>
                                    <div className="animate " data-anim-type="fadeInRightLarge">
                                        <div className="tklist content_slider_li_1">

                                            <div class="tkPanels" style={{padding: "0"}}>
                                                <img width="287" height="339" className="tk fit3"
                                                     src="https://gorgiasasia.blob.core.windows.net/images/profile-2382.jpg?timestamp=403"
                                                     alt=""/>
                                                <div className="desc" style={{height: "auto"}}>
                                                    <p className="tkFont1" style={{
                                                        color: "black",
                                                        fontWeight: "bold",
                                                        fontSize: "x-large"
                                                    }}>Chris Wong</p>
                                                    <p style={{color: "gray"}}>Founder</p>
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
        );
    }
}
