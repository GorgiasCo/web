import React from 'react';


export default class WhatIsGorgias extends React.Component {
    render() {
        return (
            <div id="Stories" className="section mcb-section tkSection-paddingTop-only">
                <div className="section_wrapper mcb-section-inner" style={{marginTop: this.props.marginTop}}>
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one-second column_column"
                                 style={{float: "none", textAlign: "center", margin: 30 + "px" + " auto"}}>
                                <div className="column_attr clearfix">
                                    <h2 className="tkFont1">{this.props.title}</h2>
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
