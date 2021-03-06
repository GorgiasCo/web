import React from 'react';


export default class TextTilesPanels extends React.Component {
    render() {
        return (
            <div className="section mcb-section" style={{
                paddingTop: 0 + "px",
                paddingBottom: 0 + "px",
                backgroundColor: "gray",
                backgroundImage: "none",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom"
            }}>
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix" style={{margin: 50 + "px auto"}}>
                        <div className="mcb-wrap-inner">

                            <div className="column mcb-column one-third column_column " style={{margin: 2+"% "+ 1+"%"}}>
                                <div className="animate " data-anim-type="fadeInLeft">
                                    <div className="column_attr clearfix align_center tkPanels"
                                         style={{height: 250 + "px"}}>
                                        <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                        <h4>some texts</h4>
                                        <br/>
                                        <p>
                                            Donec euismod nibh, sollicitudin quis, dictum arcu. Etiam nibh porta et,
                                            felis. Maecenas ac ligula ut arcu. In sodales eros. Integer id risus. Mauris
                                            sit amet, aliquam at,.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="column mcb-column one-third column_column " style={{margin: 2+"% "+ 1+"%"}}>
                                <div className="animate " data-anim-type="fadeInUpLarge">
                                    <div className="column_attr clearfix align_center tkPanels"
                                         style={{height: 250 + "px"}}>
                                        <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                        <h4>Wow Gorgias</h4><br/>
                                        <p>
                                            Donec euismod nibh, sollicitudin quis, dictum arcu. Etiam nibh porta et,
                                            felis. Maecenas ac ligula ut arcu. In sodales eros. Integer id risus. Mauris
                                            sit amet, aliquam at, suscipit dolor. In molestie a, mattis id, condimentum
                                            odio a wisi.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="column mcb-column one-third column_column" style={{margin: 2+"% "+ 1+"%"}}>
                                <div className="column_attr clearfix align_center tkPanels"
                                     style={{height: 250 + "px"}}>
                                    <div className="animate " data-anim-type="fadeInRight">
                                        <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                        <h4>Contact Us</h4>
                                        <br/>
                                        <p>
                                            Donec euismod nibh, sollicitudin quis,nteger id risus. Mauris sit amet,
                                            aliquam at, suscipit dolor. In molestie a, mattis id, condimentum odio a
                                            wisi.
                                        </p>
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
