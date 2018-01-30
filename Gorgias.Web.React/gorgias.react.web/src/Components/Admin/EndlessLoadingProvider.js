/**
 * Created by yasser on 1/26/2018.
 */
import React, {Component} from "react";
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
            //this.loadItems(1);
        }

        componentWillUpdate(nextProps) {

        }

        componentWillUnmount() {
            console.log('componentWillUnmount');
        }

        loadItems = (page) => {
            console.log(page, 'inside endless ;)', this.props.filterData);
            // this.props.filteringData.Page = page;
            if(this.props.filterData !== undefined){
                let filteringData = this.props.filterData;
                filteringData.Page = page;
                this.props.getData(filteringData);
            }
        }

        render() {
            const loader = <div className="loader">Loading ...</div>;

            var items = [];
            this.props.data.map((track, i) => {
                items.push(
                    <ComposedComponent key={i} data={track}/>
                );
            });

            console.log(this.context, 'Endless Rendering', ComposedComponent, this.props.hasMore);
            // return <ComposedComponent {...this.props} {...newProps} />
            return (
                <div style={{height: "700px", overflow: "auto"}}>
                    <InfiniteScroll
                        pageStart={2}
                        initialLoad={false}
                        loadMore={this.loadItems.bind(this)}
                        hasMore={this.props.hasMore}
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