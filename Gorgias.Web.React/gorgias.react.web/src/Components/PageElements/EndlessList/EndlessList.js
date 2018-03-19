/**
 * Created by yasser on 2/23/2018.
 */
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
import Coursol from "../Coursol";
import InfiniteScroll from "react-infinite-scroller";

class EndlessList extends React.Component {
    constructor(args) {
        super(args);
    }

    loadItems = (page) => {
        console.log('loadmore, endless', page);
        this.props.loadItems(page);
    }


    render() {
        console.log('infinity render ;)');
        const loader = <div className="loaderEndless">Loading ...</div>;

        const {isLoading, items, itemsExtra, keyID, keyName, onPress, prepareListRow, useWindow, hasMore} = this.props;

        var preparedItems = [];
        items.map((item, i) => {
            preparedItems.push(
                prepareListRow(item)
            );
        });

        return (
            !isLoading ?
                <div className="section mcb-section full-width tkSection-paddingBottom-only">
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix">
                            <div className="mcb-wrap-inner">
                                <Coursol
                                    items={itemsExtra}
                                    keyID={keyID}
                                    keyName={keyName}
                                    onPress={onPress}
                                />
                                {/*<div className="column mcb-column one column_slider ">*/}
                                    {/*<div style={{height: "700px", overflow: "auto"}}>*/}
                                        <InfiniteScroll
                                            pageStart={1}
                                            initialLoad={true}
                                            loadMore={this.loadItems.bind(this)}
                                            hasMore={hasMore}
                                            threshold={20}
                                            useWindow={useWindow}
                                            loader={loader}>
                                            <div className="tracks">
                                                {preparedItems}
                                            </div>
                                        </InfiniteScroll>
                                    {/*</div>*/}
                                {/*</div>*/}
                                {/*<div className="column mcb-column one column_slider ">*/}
                                    {/*{items.map((item) => {*/}
                                        {/*return prepareListRow(item);*/}
                                    {/*})}*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                : <h3>Loading</h3>
        );
    }
}
export default EndlessList;