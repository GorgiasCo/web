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
        };
    }

    componentDidMount() {
        // this.props.getProfileAccounts(1016);
        // this.props.getProfileAccountSetting(1011);
    }

    componentWillMount() {
        this.prepareDateFromAPI();
    }

    prepareDateFromAPI = () => {
        this.setState({
            isLoading: true,
            profileReports: [],
            reports: {}
        });
        console.log('dashboard');

        httpRequest.getAsyncProfileReports(this.props.profileAccountSetting.payload.userUserID, 1).then(
            response => {
                let ProfileReports = response.data.Result.ProfileReports;
                let isEmptyList = false;
                if (response.data.Result.ProfileReports.length === 0) {
                    isEmptyList = true;
                }
                console.log(response.data.Result, 'addressTypes.length');
                this.setState({
                    isLoading: false,
                    profileReports: ProfileReports,
                    reports: response.data.Result,
                    isEmptyList: isEmptyList,
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
        const {isEmptyList, isLoading, profileReports, reports} = this.state;

        const columns = [{
            Header: 'Name',
            accessor: 'ProfileFullname' // String-based value accessors!
        }, {
            Header: 'TotalView',
            accessor: 'TotalView',
            // Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            Cell: props => <LiquidFillGauge
                style={{margin: '0 auto'}}
                width={radius * 2}
                height={radius * 2}
                value={props.value / 10}
                percent="%"
                textSize={1}
                textOffsetX={0}
                textOffsetY={0}
                textRenderer={(props) => {
                    const value = Math.round(props.value);
                    const radius = Math.min(props.height / 2, props.width / 2);
                    const textPixels = (props.textSize * radius / 2);
                    const valueStyle = {
                        fontSize: textPixels
                    };
                    const percentStyle = {
                        fontSize: textPixels * 0.6
                    };

                    return (
                        <tspan>
                            <tspan className="value" style={valueStyle}>{value}</tspan>
                            <tspan style={percentStyle}>{props.percent}</tspan>
                        </tspan>
                    );
                }}
                riseAnimation
                waveAnimation
                waveFrequency={2}
                waveAmplitude={1}
                gradient
                gradientStops={gradientStops}
                circleStyle={{
                    fill: fillColor
                }}
                waveStyle={{
                    fill: fillColor
                }}
                textStyle={{
                    fill: color('#444').toString(),
                    fontFamily: 'Arial'
                }}
                waveTextStyle={{
                    fill: color('#fff').toString(),
                    fontFamily: 'Arial'
                }}
                onClick={() => {
                    this.setState({value: Math.random() * 100});
                }}
            /> // Custom cell components!
        }]

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
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix">
                                        <Gauge value={33} width={400} height={320}
                                               label="This is my Gauge"/>
                                        <List
                                            isLoading={isLoading}
                                            items={profileReports}
                                            prepareListRow={this.prepareContactRow}
                                            isEmptyList={isEmptyList}
                                            emptyComponent={
                                                <div>It is empty<br/><a className="button-love button"
                                                                        href="admin/contact/new">Add New Contact</a>
                                                </div>
                                            }
                                            header={<h1>Dashboard ;)</h1>}
                                        />
                                        <ReactTable
                                            data={profileReports}
                                            columns={columns}
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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);