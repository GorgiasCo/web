import React from 'react';


export default class WhoIsGorgias extends React.Component {
    render() {
        return (
            <div id="OurGorgias" className="section mcb-section tkSection-paddingTop-only bg-color-1">
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one-second column_column" style={{
                                float: "none",
                                marginLeft: "auto",
                                marginRight: "auto",
                                textAlign: "center",
                                marginTop: 30 + "px",
                                marginBottom: 30 + "px"
                            }}>
                                <div className="column_attr clearfix">
                                    <h2 className="tkFont1" style={{color: "black"}}>{this.props.title}</h2>
                                    <hr className="no_line" style={{margin: 0 + " auto " + 30 + "px"}}/>
                                    <p style={{color: "#999c9e"}}>
                                        {this.props.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
