import React from 'react';


export default class AboutHeadingCover extends React.Component {
    render() {
        return (
            <div className="section mcb-section bg-color-2">
                <div className="tk-background-ImgFit"
                     style={{backgroundImage: "url(http://www.fisherstudios.co.uk/wp-content/uploads/2017/02/studio_05.jpg)"}}>
                    <div style={{background: "rgba(205, 205, 205, 0.35)"}}>
                        <div className="section_wrapper mcb-section-inner">
                            <div className="wrap mcb-wrap one  valign-top clearfix"
                                 style={{marginTop: 20 + "%", marginBottom: 15 + "%"}}>
                                <div className="mcb-wrap-inner">
                                    <div className="column mcb-column one-second column_column" style={{
                                        float: "none",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        textAlign: "center"
                                    }}>
                                        <div className="column_attr clearfix">
                                            {/*<h2 class="tkFont1">About us</h2>
                                             <hr class="no_line" style="margin:0 auto 30px">
                                             <p style="color: #999c9e;">
                                             Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem. Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh.
                                             </p> */}
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
