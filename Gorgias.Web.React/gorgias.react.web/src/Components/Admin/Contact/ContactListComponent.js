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
import httpRequest from "../../Global/HTTP/httpRequest";
import ContactRow from "./List/ContactRow";
import Coursol from "../../PageElements/Coursol";
import {toast, ToastContainer} from "react-toastify";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import AdminpageHeader from "../../PageElements/AdminPageHeader";

class ContactListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            addressTypes: [],
            addresses: [],
            isEmptyList: false,
        };
    }

    componentDidMount() {
        //this.props.getProfileAccounts(1016);
        //this.props.getProfileAccountSetting(1011);

    }

    componentWillMount() {
        this.prepareDateFromAPI(this.props.profileAccountSetting.payload.ProfileID,0);
    }

    prepareDateFromAPI = (profileID, addressTypeID) => {
        this.setState({
            isLoading: true,
            addresses: [],
            addressTypes: []
        });
        httpRequest.getAsyncAddresses(profileID, addressTypeID).then(
            response => {
                let addressTypes = [{AddressTypeName: "All", AddressTypeID: 0}, ...response.data.Result.AddressTypes];
                let isEmptyList = false;
                if (response.data.Result.Addresses.length === 0) {
                    isEmptyList = true;
                }
                console.log(response.data.Result.Addresses.length, 'addressTypes.length');
                this.setState({
                    isLoading: false,
                    addresses: response.data.Result.Addresses,
                    addressTypes: addressTypes,
                    isEmptyList: isEmptyList,
                });
                console.log(response, 'Contacts Address');
            }
        )
    }

    deleteContact = (AddressID) => {
        this.setState({
            isLoading: true,
            addresses: [],
            addressTypes: []
        });
        console.log(AddressID, 'delete');
        httpRequest.deleteAsyncContact(AddressID).then(
            response => {
                console.log(response, 'delete');
                this.prepareDateFromAPI(0);
                toast.success("Success Notification !", {
                    position: toast.POSITION.TOP_CENTER
                });
            },
            error => {
                console.log(error, 'delete error');
                this.props.logout();
            }
        )
    };

    prepareDeleteConfirmation = (item) => {
        confirmAlert({
            customUI: ({onClose}) => {
                return (
                    <div className='custom-ui' style={{textAlign:'center'}}>
                        <h1>Are you sure?</h1>
                        <p>You want to delete this?</p>
                        <button className={`reset`} onClick={onClose}>No</button>
                        <button onClick={() => {
                            this.deleteContact(item.AddressID)
                            onClose()
                        }}>Yes, Delete it!
                        </button>
                    </div>
                )
            }
        })

        // confirmAlert({
        //     title: 'Confirm to submit',                        // Title dialog
        //     message: 'Are you sure to do this.',               // Message dialog
        //     childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component
        //     confirmLabel: 'Confirm',                           // Text button confirm
        //     cancelLabel: 'Cancel',                             // Text button cancel
        //     onConfirm: () => this.deleteContact(item.AddressID),    // Action after Confirm
        // })
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
        if(this.props.profileAccountSetting.payload.ProfileID !== nextProps.profileAccountSetting.payload.ProfileID){
            console.log(nextProps,'componentWillReceiveProps storyList',this.props.profileAccountSetting.payload.ProfileID, nextProps.profileAccountSetting.payload.ProfileID);
            this.prepareDateFromAPI(nextProps.profileAccountSetting.payload.ProfileID,0);
        }
    }

    prepareContactRow = (item) => {
        return <ContactRow key={item.AddressID} onPress={this.prepareDeleteConfirmation} data={item}/>
    }

    onPress = (item, event) => {
        console.log(item, 'onPress');
        this.prepareDateFromAPI(item.AddressTypeID);
        event.preventDefault();
    }

    header = () => {
        return (
            <Coursol
                items={this.state.addressTypes}
                keyID={"AddressTypeID"}
                keyName={"AddressTypeName"}
                onPress={this.onPress}
            />
        )
    }

    renderEmptyList = () => {
        console.log('renderEmptyList');
        return <div>It is empty</div>
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;
        // console.log(this.state.contactData, this.props.AddressID, 'in action story success ;) NIMA render');
        const {isEmptyList, isLoading, addresses, addressTypes} = this.state;


        return (
            !isLoading ?
                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                    <ToastContainer closeButton={false}/>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                            <div className="mcb-wrap-inner">
                                <AdminpageHeader
                                    isLoading={isLoading}
                                    headerTitle={`My Contacts`}
                                    newPageURL={`/admin/contact/new`}
                                    newButtonCaption={`+`}
                                />
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix">
                                        <List
                                            isLoading={isLoading}
                                            items={addresses}
                                            prepareListRow={this.prepareContactRow}
                                            isEmptyList={isEmptyList}
                                            emptyComponent={
                                                <div
                                                    style={{marginTop: 70, textAlign: 'center'}}>
                                                    ops no address saved.
                                                    <br/>
                                                    <form action="admin/contact/new">
                                                        <button
                                                            className="button"
                                                        >
                                                            New Contact
                                                        </button>
                                                    </form>
                                                </div>
                                            }
                                            header={
                                                <Coursol
                                                    items={addressTypes}
                                                    keyID={"AddressTypeID"}
                                                    keyName={"AddressTypeName"}
                                                    onPress={this.onPress}
                                                />
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : loader
        );
    }
}
;

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
        getStories: filteringData => dispatch(storyAction.getStories(filteringData)),
        getStoriesOLD: page => dispatch(storyAction.getStoriesOLD(page)),
        getCategories: profileID => dispatch(storyAction.getCategories(profileID)),
        getProfileAccountSetting: profileID => dispatch(profileAction.getProfileAccountSetting(profileID)),
        getProfileAccounts: userID => dispatch(profileAction.getProfileAccounts(userID)),
        logout: () => dispatch(authenticationAction.logout()),
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ContactListComponent);