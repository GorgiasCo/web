/**
 * Created by odenza on 22/02/2018.
 */
/**
 * Created by yasser on 1/24/2018.
 */
/***
 Use this component inside your ReactJS Application.
 A scrollable list with different item type
 */
import React, {Component} from "react";

class List extends React.Component {
    constructor(args) {
        super(args);
    }

    render() {
        const {isLoading, items, header, prepareListRow, isEmptyList, emptyComponent} = this.props;
        // console.log(header,'header');
        return (
            !isLoading ?
                <div className="section mcb-section full-width tkSection-paddingBottom-only">
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix">
                            <div className="mcb-wrap-inner">
                                {header}
                                {!isEmptyList ?
                                <div className="column mcb-column one column_slider ">
                                    {items.map((item) => {
                                        return prepareListRow(item);
                                    })}
                                </div> : emptyComponent }
                            </div>
                        </div>
                    </div>
                </div>
                : <h3>Loading</h3>
        );
    }
}
export default List;