import React from 'react';


export default class Teams extends React.Component {
    render() {
        return (
            <div className="section"
                 style={{paddingTop: 70 + "px", paddingBottom: 60 + "px", backgroundColor: "#ededed"}}>
                <div className="section_wrapper clearfix">
                    <div className="items_group clearfix">

                        <div className="column one column_column">
                            <div className="column_attr align_center">
                                <h2 className="hrmargin_0">Our Team</h2>
                            </div>
                        </div>

                        <div className="column one-third column_article_box">
                            <div className="article_box">

                                <div className="animate" data-anim-type="zoomIn">
                                    <a href="content/book/events.html">
                                        <div className="photo_wrapper"><img className="scale-with-grid"
                                                                            src="content/book/images/home_book_events1.jpg"
                                                                            alt="Aenean ferme ntum elit eget"/>
                                        </div>
                                        <div className="desc_wrapper">
                                            <p>
                                                Aliqu tincid mauris
                                            </p>
                                            <h4>Aenean ferme ntum elit eget</h4><i
                                            className="icon-right-open themecolor"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="column one-third column_article_box">
                            <div className="article_box">

                                <div className="animate" data-anim-type="zoomIn">
                                    <a href="content/book/events.html">
                                        <div className="photo_wrapper"><img className="scale-with-grid"
                                                                            src="content/book/images/home_book_events2.jpg"
                                                                            alt="Nulla imperdiet sit amet"/>
                                        </div>
                                        <div className="desc_wrapper">
                                            <p>
                                                Lorem ipsum primi
                                            </p>
                                            <h4>Nulla imperdiet sit </h4><i className="icon-right-open themecolor"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="column one-third column_article_box">
                            <div className="article_box">

                                <div className="animate" data-anim-type="zoomIn">
                                    <a href="content/book/events.html">
                                        <div className="photo_wrapper"><img className="scale-with-grid"
                                                                            src="content/book/images/home_book_events3.jpg"
                                                                            alt="Vitae adipiscing turpis aen"/>
                                        </div>
                                        <div className="desc_wrapper">
                                            <p>
                                                Nec malesuada fames
                                            </p>
                                            <h4>Vitae adipiscing </h4><i className="icon-right-open themecolor"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
