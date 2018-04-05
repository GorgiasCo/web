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
import DashboardRow from "./List/DashboardRow";
import Coursol from "../../PageElements/Coursol";
import {ToastContainer} from "react-toastify";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import ReactTable from "react-table";
import "react-table/react-table.css";
import {color} from "d3-color";
import {interpolateRgb} from "d3-interpolate";
import LiquidFillGauge from "react-liquid-gauge";
import Gauge from "react-svg-gauge";
import AdminpageHeader from "../../PageElements/AdminPageHeader";

class DashboardComponent extends Component {
    startColor = '#6495ed'; // cornflowerblue
    endColor = '#dc143c'; // crimson

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            profileReports: [],
            reports: {},
            isEmptyList: false,
            columns: [{
                Header: 'Profile',
                accessor: 'ProfileFullname',
                minWidth: 150,
            }, {
                Header: 'View',
                accessor: 'TotalView',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }, {
                Header: 'Engagement',
                accessor: 'TotalEngagement',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }, {
                Header: 'Subscription',
                accessor: 'TotalSubscription',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }],
        };
    }

    componentDidMount() {
        // this.props.getProfileAccounts(1016);
        // this.props.getProfileAccountSetting(1011);
    }

    componentWillMount() {
        if (this.props.profileAccountSetting.payload.userUserID !== undefined) {
            this.prepareDateFromAPI(this.props.profileAccountSetting.payload.userUserID, this.props.profileAccountSetting.payload.ProfileID);
        } else {
            this.prepareDateFromAPI(this.props.profileAccountSetting.payload.UserID, this.props.profileAccountSetting.payload.ProfileID);
        }
        this.prepareColumns(1);
    }

    prepareColumns = (type) => {
        let columns = null;
        switch (type) {
            case 1:
                columns = [{
                    Header: 'Profile',
                    accessor: 'ProfileFullname',
                    minWidth: 150,
                }, {
                    Header: 'View',
                    accessor: 'AlbumView',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'Comments',
                    accessor: 'AlbumComments',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'Likes',
                    accessor: 'AlbumLikes',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'StayOn',
                    accessor: 'StayOnConnection',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'Subscription',
                    accessor: 'Subscription',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }];
                break;
            case 2:
                columns = [{
                    Header: 'Profile',
                    accessor: 'ProfileFullname',
                    minWidth: 150,
                }, {
                    Header: 'View',
                    accessor: 'OverAllTotalView',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'Engagement',
                    accessor: 'OverAllTotalEngagement',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'Subscription',
                    accessor: 'OverAllTotalSubscription',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }];
                break;
            default:
                columns = [{
                    Header: 'Profile',
                    accessor: 'ProfileFullname',
                    minWidth: 150,
                }, {
                    Header: 'View',
                    accessor: 'TotalView',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'Engagement',
                    accessor: 'TotalEngagement',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }, {
                    Header: 'Subscription',
                    accessor: 'TotalSubscription',
                    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
                }];
                break;
        }
        this.setState({columns: columns});
    }

    prepareDateFromAPI = (UserID, ProfileID) => {
        this.setState({
            isLoading: true,
            profileReports: [],
            reports: {}
        });
        console.log('dashboard', this.props.profileAccountSetting);

        httpRequest.getAsyncProfileReports(UserID, 1).then(
            response => {
                let ProfileReports = response.data.Result.ProfileReports;
                let isEmptyList = false;
                if (response.data.Result.ProfileReports.length === 0) {
                    isEmptyList = true;
                }

                console.log(response.data.Result, 'addressTypes.length');
                let report = response.data.Result;

                httpRequest.getAsyncProfileSettingHotSpot(ProfileID).then(
                    response => {
                        console.log(response, 'getAsyncProfileSettingHotSpot');
                        this.setState({
                            isLoading: false,
                            profileReports: ProfileReports,
                            reports: report,
                            hotSpots: response.data.Result,
                            isEmptyList: isEmptyList,
                        });
                        console.log(response, 'Contacts Address');
                    },
                    error => {
                        console.log(error, 'getAsyncProfileSettingHotSpot');
                    }
                )
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
        if (this.props.profileAccountSetting.payload.ProfileID !== nextProps.profileAccountSetting.payload.ProfileID) {
            console.log(nextProps, 'componentWillReceiveProps storyList', this.props.profileAccountSetting.payload.ProfileID, nextProps.profileAccountSetting.payload.ProfileID);
            this.prepareDateFromAPI(nextProps.profileAccountSetting.payload.UserID,nextProps.profileAccountSetting.payload.ProfileID);
        }
    }

    prepareContactRow = (item) => {
        return <DashboardRow key={item.ProfileID} onPress={this.prepareDeleteConfirmation} data={item}/>
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
        const {isEmptyList, isLoading, profileReports, reports, columns, hotSpots} = this.state;

        // const columns = [{
        //     Header: 'Name',
        //     accessor: 'ProfileFullname' // String-based value accessors!
        // }, {
        //     Header: 'TotalView',
        //     accessor: 'TotalView',
        //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        // },{
        //     Header: 'TotalEngagement',
        //     accessor: 'TotalEngagement',
        //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        // },{
        //     Header: 'TotalSubscription',
        //     accessor: 'TotalSubscription',
        //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        // }]

        const radius = 200;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(50 / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];


        return (
            !isLoading ?
                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                    <ToastContainer closeButton={false}/>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                            <div className="mcb-wrap-inner">
                                <AdminpageHeader
                                    isLoading={false}
                                    hasButton={false}
                                    headerTitle={`My Dashboard`}
                                />
                                <div className="wrap mcb-wrap one  valign-top clearfix"
                                     style={{margin: "0px auto"}}>
                                    <div className="mcb-wrap-inner">

                                        <div className="column mcb-column one-third column_column"
                                             style={{margin: 1 + "% " + 1 + "%"}}>
                                            <div className="column_attr align_center card-block-rounded ">
                                                <div
                                                    className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div className="image_wrapper"><img className="scale-with-grid"
                                                                                        src="tkImages/1_Discover_Gorgias.png"
                                                                                        alt="" width="123"
                                                                                        height="100"/></div>
                                                </div>
                                                <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
                                                <h4 className="tkFont-Bold tkFont-Theme">Discover Shares</h4>
                                                <p>
                                                    {hotSpots.TotalShares}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="column mcb-column one-third column_column"
                                             style={{margin: 1 + "% " + 1 + "%"}}>
                                            <div className="column_attr align_center card-block-rounded">
                                                <div
                                                    className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div className="image_wrapper"><img className="scale-with-grid"
                                                                                        src="tkImages/2_StoryLand.png"
                                                                                        alt="" width="123"
                                                                                        height="100"/></div>
                                                </div>
                                                <hr className="no_line" style={{margin: 0 + "auto " + 10 + "px"}}/>
                                                <h4 className="tkFont-Bold tkFont-Theme">Likes</h4>
                                                <p>
                                                    {hotSpots.TotalLikes}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="column mcb-column one-third column_column"
                                             style={{margin: 1 + "% " + 1 + "%"}}>
                                            <div className="column_attr align_center card-block-rounded ">
                                                <div
                                                    className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div className="image_wrapper"><img className="scale-with-grid"
                                                                                        src="tkImages/3_Touch_For_Love.png"
                                                                                        alt="" width="123"
                                                                                        height="100"/></div>
                                                </div>
                                                <hr className="no_line" style={{margin: 0 + " auto" + 10 + "px"}}/>
                                                <h4 className="tkFont-Bold tkFont-Theme">Engagements</h4>
                                                <p>
                                                    {hotSpots.TotalEngagements}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="column mcb-column one-third column_column"
                                             style={{margin: 1 + "% " + 1 + "%"}}>
                                            <div className="column_attr align_center card-block-rounded ">
                                                <div
                                                    className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div className="image_wrapper"><img className="scale-with-grid"
                                                                                        src="tkImages/4_iFeel.png"
                                                                                        alt="" width="123"
                                                                                        height="100"/></div>
                                                </div>
                                                <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
                                                <h4 className="tkFont-Bold tkFont-Theme">iFeel</h4>
                                                <p>
                                                    {hotSpots.TotalFeel}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="column mcb-column one-third column_column"
                                             style={{margin: 1 + "% " + 1 + "%"}}>
                                            <div className="column_attr align_center card-block-rounded ">
                                                <div
                                                    className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div className="image_wrapper"><img className="scale-with-grid"
                                                                                        src="tkImages/5_StayOn.png"
                                                                                        alt="" width="123"
                                                                                        height="100"/></div>
                                                </div>
                                                <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
                                                <h4 className="tkFont-Bold tkFont-Theme">Connections</h4>
                                                <p>
                                                    {hotSpots.TotalConnections}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="column mcb-column one-third column_column"
                                             style={{margin: 1 + "% " + 1 + "%"}}>
                                            <div className="column_attr align_center card-block-rounded ">
                                                <div
                                                    className="image_frame image_item no_link scale-with-grid alignnone no_border">
                                                    <div className="image_wrapper"><img className="scale-with-grid"
                                                                                        src="tkImages/6_Hotspot.png"
                                                                                        alt="" width="123"
                                                                                        height="100"/></div>
                                                </div>
                                                <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
                                                <h4 className="tkFont-Bold tkFont-Theme">Hotspot</h4>
                                                <p>
                                                    {hotSpots.TotalViews}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix">
                                        {/*<Gauge value={33} width={400} height={320}*/}
                                        {/*label="This is my Gauge"/>*/}

                                        {/*<List*/}
                                        {/*isLoading={isLoading}*/}
                                        {/*items={profileReports}*/}
                                        {/*prepareListRow={this.prepareContactRow}*/}
                                        {/*isEmptyList={isEmptyList}*/}
                                        {/*emptyComponent={*/}
                                        {/*<div>It is empty<br/><a className="button-love button"*/}
                                        {/*href="admin/contact/new">Add New Contact</a>*/}
                                        {/*</div>*/}
                                        {/*}*/}
                                        {/*/>*/}
                                        <div>
                                            <div className ="table-header">
                                                <button className="tabs" onClick={() => this.prepareColumns(1)}>
                                                    Now
                                                </button>
                                                <button className="tabs" onClick={() => this.prepareColumns(2)}>
                                                    Total
                                                </button>
                                                <button className="tabs" onClick={() => this.prepareColumns(0)}>
                                                    Overall
                                                </button>

                                                <form className="table-options searchh">
                                                  {/* <i class="icon-search"></i> */}
                                                  <input type="text" name="search" placeholder="Search.."/>
                                                </form>


                                            </div>
                                            <ReactTable
                                                data={profileReports}
                                                columns={columns}
                                                showPagination={false}
                                                defaultPageSize={4}
                                                style = {{backgroundColor:"white"}}
                                            />
                                        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
