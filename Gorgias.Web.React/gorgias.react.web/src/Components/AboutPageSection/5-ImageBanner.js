import React from 'react';


export default class ImageBanner extends React.Component {
    render() {
        return (
            <div className="section mcb-section full-width no-margin-h no-margin-v equal-height-wrap" style={{
                paddingTop: 0 + "px",
                paddingBottom: 20 + "px",
                height: 200 + "px",
                backgroundColor: "whitesmoke"
            }}>
                <div className="section_wrapper mcb-section-inner">

                    <div className="wrap mcb-wrap one-second  valign-middle clearfix">
                        <div className="animate " data-anim-type="fadeInUp">
                            <div className="parentImg">
                                <div className="childImg"
                                     style={{backgroundImage: "url(https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?w=940&h=650&auto=compress&cs=tinysrgb)"}}></div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap mcb-wrap one-second  valign-middle clearfix">
                        <div className="animate " data-anim-type="fadeInUp">
                            <div className="parentImg">
                                <div className="childImg"
                                     style={{backgroundImage: "url(https://images.pexels.com/photos/165907/pexels-photo-165907.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)"}}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
