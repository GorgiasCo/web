/**
 * Created by odenza on 22/02/2018.
 */
/**
 * Created by odenza on 19/02/2018.
 */
/**
 * Created by odenza on 12/02/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Stores/story/action";
import * as profileAction from "../../Stores/profile/action";
import * as authenticationAction from "../../Stores/authentication/action";
import {connect} from "react-redux";
import "react-select/dist/react-select.css";
import List from "../../PageElements/List/List";
import axios from "axios";
import httpRequest from "../../Global/HTTP/httpRequest";
import {toast, ToastContainer} from "react-toastify";
import FollowerRow from "./List/FollowerRow";
import EndlessList from "../../PageElements/EndlessList";

class FollowerListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            followers: [],
            page: 1,
            pageSize: 15,
            requestTypeID: 3,
            hasMore: true,
        };
    }

    componentDidMount() {
        //this.props.getProfileAccounts(1016);
        //this.props.getProfileAccountSetting(1011);

    }

    componentWillMount() {
        this.prepareDateFromAPI(1);
    }

    prepareDateFromAPI = (Page,requestTypeID) => {
        // this.setState({
        //     isLoading: true,
        //     followers: [],
        // });
        // if(this.state.hasMore){
        //     return;
        // }
        let RequestTypeID = requestTypeID !== undefined ? requestTypeID : this.state.requestTypeID;
        console.log(this.props.profileAccountSetting.payload.ProfileID, RequestTypeID, this.state.pageSize, Page, 'before http call');
        httpRequest.getAsyncProfileFollowers(this.props.profileAccountSetting.payload.ProfileID, RequestTypeID, this.state.pageSize, Page).then(
            response => {
                let newResult = [...this.state.followers, ...response.data.Result.Items]
                console.log(response, 'Content Managers', Page >= response.data.Result.TotalPages, this.state.followers, newResult, Page);
                this.setState({
                    isLoading: false,
                    followers: newResult,
                    hasMore: response.data.Result.hasMore,
                    totalPage: response.data.Result.TotalPages,
                    requestTypeID: RequestTypeID,
                });
                console.log(this.state,'state la');
            }
        )
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(this.props !== nextProps){
    //         return true;
    //     }
    //     return false;
    // }
    //
    // componentWillUpdate(nextProps, nextState){
    //     if(this.state.filterData !== undefined){
    //         if(this.state.filterData.MicroAppProfileID !== nextProps.profileAccountSetting.payload.ProfileID){
    //             console.log('updated componentWillUpdate ! ;) ');
    //             //this.loadItemsRedux(1011);
    //         }
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps,'componentWillReceiveProps');
        // if(this.props.filterData !== undefined){
        //     if(this.props.filterData.MicroAppProfileID !== nextProps.profileAccountSetting.payload.ProfileID){
        //         console.log('updated ! ;) ', nextProps.profileAccountSetting.payload.ProfileID, this.props.filterData.MicroAppProfileID, this.props.filterData);
        //         this.loadItemsRedux(123);
        //         // if(this.props.profileAccountSetting.isLoading){
        //         //
        //         // }
        //     }
        // }
    }

    prepareFollowerRow = (item) => {
        return <FollowerRow key={item.ProfileID} data={item}/>
    }

    onPress = (item) => {
        this.setState({
            isLoading: true,
            followers: [],
            requestTypeID: item.RequestTypeID,
            // hasMore: true,
            f: this.prepareDateFromAPI(1,item.RequestTypeID),
        });
        console.log(item, 'onPress');
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;
        // console.log(this.state.contactData, this.props.AddressID, 'in action story success ;) NIMA render');
        // const {isEmptyList, isLoading, addresses, addressTypes} = this.state;

        return (
            !this.state.isLoading ?
                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                    <ToastContainer closeButton={false}/>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix">
                                        {/*<List*/}
                                            {/*isLoading={this.state.isLoading}*/}
                                            {/*items={this.state.followers}*/}
                                            {/*prepareListRow={this.prepareFollowerRow}*/}
                                        {/*/>*/}
                                        <EndlessList
                                            isLoading={this.state.isLoading}
                                            loadItems={this.prepareDateFromAPI}
                                            itemsExtra={[{RequestTypeID: 3, RequestTypeName: "StayOn"},{RequestTypeID: 4, RequestTypeName: "Subscribe"}]}
                                            prepareListRow={this.prepareFollowerRow}
                                            onPress={this.onPress}
                                            keyID="RequestTypeID"
                                            keyName="RequestTypeName"
                                            useWindow={true}
                                            hasMore={this.state.hasMore}
                                            items={this.state.followers}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : loader
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps storylist');
    return {
        stories: state.storyManager.stories.payload,
        filterData: state.storyManager.stories.filterData,
        storiesHasMore: state.storyManager.stories.hasMore,
        profileAccountSetting: state.profile.profileAccountSetting,
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    // console.log(dispatch, 'new', dispatch);
    return {
        // You can now say this.props.createBook
        getProfileAccountSetting: profileID => dispatch(profileAction.getProfileAccountSetting(profileID)),
        getProfileAccounts: userID => dispatch(profileAction.getProfileAccounts(userID)),
        logout: () => dispatch(authenticationAction.logout()),
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(FollowerListComponent);