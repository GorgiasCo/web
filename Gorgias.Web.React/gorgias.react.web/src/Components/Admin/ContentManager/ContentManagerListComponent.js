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
import ContentManagerRow from "./List/ContentManagerRow";

let API_KEY = "AIzaSyAjU94_y64Gh4mCZgDi4Ccdadaw8YRxqek";
const GOOGLE_API = "https://maps.google.com/maps/api/geocode/json";

class ContentManagerListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            addressTypes: [],
            addresses: [],
        };
    }

    componentDidMount() {
        //this.props.getProfileAccounts(1016);
        //this.props.getProfileAccountSetting(1011);

    }

    componentWillMount() {
        this.prepareDateFromAPI(0);
    }

    prepareDateFromAPI = (addressTypeID) => {
        this.setState({
            isLoading: true,
            addresses: [],
            addressTypes: []
        });
        httpRequest.getAsyncAddresses(1011, addressTypeID).then(
            response => {
                this.setState({
                    isLoading: false,
                    addresses: response.data.Result.Addresses,
                    addressTypes: response.data.Result.AddressTypes
                });
                console.log(response, 'Contacts Address');
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

    prepareContentManagerRow = (item) => {
        return <ContentManagerRow key={item.ProfileID} data={item}/>
    }

    onPress = (item) => {
        console.log(item, 'onPress');
        this.prepareDateFromAPI(item.AddressTypeID);
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;
        // console.log(this.state.contactData, this.props.AddressID, 'in action story success ;) NIMA render');

        return (
            !this.state.isLoading ?
                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                    <ToastContainer closeButton={false}/>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix">
                                        <List
                                            isLoading={this.state.isLoading}
                                            items={this.state.addresses}
                                            itemsExtra={this.state.addressTypes}
                                            onPress={this.onPress}
                                            prepareListRow={this.prepareContentManagerRow}
                                            keyID="AddressTypeID"
                                            keyName="AddressTypeName"
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
export default connect(mapStateToProps, mapDispatchToProps)(ContentManagerListComponent);