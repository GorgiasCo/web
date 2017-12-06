import React from 'react';


export default class AboutUs extends React.Component {
    render() {
        return (
            <div className="section mcb-section" style={{
                paddingTop: 50 + "px",
                paddingBottom: 50 + "px",
                backgroundColor: "#292929",
                backgroundImage: "none",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom"
            }}>
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one-second column_column"
                                 style={{float: "none", textAlign: "center", margin: 30 + "px auto"}}>
                                <div className="column_attr clearfix">
                                    <div className="animate " data-anim-type="fadeInUp">

                                        <h2 className="tkFont1">About Us</h2>
                                        <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                        <p style={{color: "#999c9e"}}>GORGIAS® , is a new social media advertising and
                                            technology platform in Malaysia that gathers <strong>Celebrities,
                                                Professionals, Communities and Brands</strong> from different industries
                                            with more than 10,000 fans and followers.
                                            With this gathering, we will have more than a <strong>million
                                                audience</strong> and we can deliver advertiser’s messages to them.</p>
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
