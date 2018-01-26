/**
 * Created by yasser on 1/26/2018.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

export default function (ComposedComponent) {
    class EndlessLoadingProvider extends Component {

        constructor(props) {
            super(props);
            this.state = {
                hasMore: true,
            };
            console.log(this.context, 'this.context login');
        }

        componentWillMount() {

        }

        componentWillUpdate(nextProps) {

        }

        loadItems = (page) => {
            this.props.filteringData.Page = page;
            this.props.getData(this.props.filteringData);
        }

        render() {
            const loader = <div className="loader">Loading ...</div>;

            var items = [];
            this.props.data.map((track, i) => {
                items.push(
                    <ComposedComponent key={i} data={track}/>
                );
            });

            console.log(this.context, 'Endless Rendering', ComposedComponent);
            // return <ComposedComponent {...this.props} {...newProps} />
            return (
                <div style={{height:"700px",overflow:"auto"}}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadItems.bind(this)}
                        hasMore={this.state.hasMore}
                        threshold={20}
                        useWindow={this.props.useWindow}
                        loader={loader}>
                        <div className="tracks">
                            {items}
                        </div>
                    </InfiniteScroll>
                </div>
            );
        }
    }

    // function mapStateToProps(state) {
    //     console.log(state.authentication.authentication, 'authentication')
    //     return {authentication: state.authentication.authentication}
    // }
    //
    // return connect(mapStateToProps)(EndlessLoadingProvider);
    return EndlessLoadingProvider;
}