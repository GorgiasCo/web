import React from 'react';


export default class OurStory extends React.Component {
    render() {
        return (
            <div className="section" style={{paddingTop: 50 + "px", paddingBottom: 0 + "px", background: "whitesmoke"}}>
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one-one column_column ">
                                <div className="column_attr clearfix align_center"
                                     style={{padding: 0 + " " + 10 + "%" + 0 + " " + 10 + "%"}}>
                                    <h4>Our story</h4>
                                    <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                        <div className="image_wrapper"><img className="scale-with-grid"
                                                                            src="images/home_surveyor_sep2.png"
                                                                            alt="home_surveyor_sep2" width="24"
                                                                            height="2"/>
                                        </div>
                                    </div>
                                    <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                    <p style={{color: "#999c9e"}}>
                                        It all started in the summer of 2013 with a simple, bold idea: make a better
                                        app.<br />
                                    </p>
                                    <p style={{color: "#999c9e"}}>But, not just a better app – a better way of doing
                                        things. A new kind of social tech company that works hand in hand with users to
                                        do something amazing, something meaningful.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
