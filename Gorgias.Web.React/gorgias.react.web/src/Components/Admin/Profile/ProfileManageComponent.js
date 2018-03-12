/**
 * Created by odenza on 12/02/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Stores/story/action";
import * as profileAction from "../../Stores/profile/action";
import {connect} from "react-redux";
import {withFormik, Formik, Form, Field, FieldArray} from "formik";
import Yup from "yup";
import classnames from "classnames";
import Select from "react-select";
import "react-select/dist/react-select.css";
import axios from "axios";
import Dropzone from "react-dropzone";
import CustomSelect from "../../PageElements/Form/CustomSelect";
import CustomAsyncSelect from "../../PageElements/Form/CustomAsyncSelect";
import CustomTextInput from "../../PageElements/Form/CustomTextInput";
import CustomInputFieldComponent from "../../PageElements/Form/CustomInputFieldComponent";
import CustomDropZone from "../../PageElements/Form/CustomDropZone";
import ProfileForm from "./Form/";
import AdminpageHeader from "../../PageElements/AdminPageHeader";

const optionsProfileTypes = [
    {value: 1, label: 'Food'},
    {value: 2, label: 'Being Fabulous'},
    {value: 3, label: 'Ken Wheeler'},
    {value: 4, label: 'ReasonML'},
    {value: 5, label: 'Unicorns'},
    {value: 6, label: 'Kittens'},
];


class ProfileManageComponent extends Component {
    constructor(props) {
        super(props);

        let profile = {
            ProfileID: props.profileAccountSetting.payload.ProfileID,
            ProfileEmail: props.profileAccountSetting.payload.ProfileEmail,//'yaser2us@gmail.com',
            ProfileFullname: props.profileAccountSetting.payload.ProfileFullname,//'Yasser',
            ProfileFullnameEnglish: props.profileAccountSetting.payload.ProfileFullnameEnglish,//'Yasser EN',
            ProfileDescription: props.profileAccountSetting.payload.ProfileDescription,//'',
            ProfileShortDescription: props.profileAccountSetting.payload.ProfileShortDescription,//'',
            ProfileURL: props.profileAccountSetting.payload.ProfileURL,//'siti',
            ProfileTypeID: props.profileAccountSetting.payload.ProfileTypeID,//5,
            SubscriptionTypeID: undefined,
            ThemeID: undefined,
            ProfilePhoto: "https://gorgiasasia.blob.core.windows.net/images/content-20161106233839-pic(4).jpg"
        }

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            profile: profile,
            isLoading: false,
        };
    }

    componentDidMount() {
        // this.loadItems(1);
        //this.props.getStoriesOLD(1);
        //this.loadItemsRedux(1011);
        //console.log(this.state.filterData,'filterData',  this.props.profileAccountSetting);
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
        console.log(nextProps, 'componentWillReceiveProps profile', this.props.profileAccountSetting.payload.ProfileID, nextProps.profileAccountSetting.payload.ProfileID);
        if (this.props.profileAccountSetting.payload.ProfileID !== nextProps.profileAccountSetting.payload.ProfileID) {
            console.log(nextProps, 'componentWillReceiveProps storyList', this.props.profileAccountSetting.payload.ProfileID, nextProps.profileAccountSetting.payload.ProfileID);
            // this.setState({isLoading: true,profile:null,});
            let profile = {
                ProfileID: nextProps.profileAccountSetting.payload.ProfileID,
                ProfileEmail: nextProps.profileAccountSetting.payload.ProfileEmail,//'yaser2us@gmail.com',
                ProfileFullname: nextProps.profileAccountSetting.payload.ProfileFullname,//'Yasser',
                ProfileFullnameEnglish: nextProps.profileAccountSetting.payload.ProfileFullnameEnglish,//'Yasser EN',
                ProfileDescription: nextProps.profileAccountSetting.payload.ProfileDescription,//'',
                ProfileShortDescription: nextProps.profileAccountSetting.payload.ProfileShortDescription,//'',
                ProfileURL: nextProps.profileAccountSetting.payload.ProfileURL,//'siti',
                ProfileTypeID: nextProps.profileAccountSetting.payload.ProfileTypeID,//5,
                SubscriptionTypeID: undefined,
                ThemeID: undefined,
                ProfilePhoto: "https://gorgiasasia.blob.core.windows.net/images/content-20161106233839-pic(4).jpg"
            };
            this.setState({
                profile: profile,
                isLoading: false,
            });
            console.log(profile, 'componentWillReceiveProps profile 8888', this.state.isLoading);
        }
    }

    handleSubmit = (data) => {
        console.log(data, 'handleSubmit profile Form');
    }

    prepareForm = (data) => {
        console.log('prepareForm', data);
        return  <ProfileForm
            optionsProfileTypes={optionsProfileTypes}
            user={data}
            handleSubmit={this.handleSubmit}
        />
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;
        const {isLoading, profile} = this.state;
        console.log(profile, 'render profile changed ;)', isLoading);

        return (
            !isLoading ?
                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                            <div className="mcb-wrap-inner">
                                <AdminpageHeader
                                    isLoading={false}
                                    hasButton={false}
                                    headerTitle={`My Profile`}
                                />
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr tkPanels clearfix">
                                        {/*<ProfileForm*/}
                                            {/*optionsProfileTypes={optionsProfileTypes}*/}
                                            {/*user={profile}*/}
                                            {/*handleSubmit={this.handleSubmit}*/}
                                        {/*/>*/}
                                        {this.prepareForm(profile)}
                                        <br/>
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
        getProfileAccountSetting: profileID => dispatch(profileAction.getProfileAccountSetting(profileID))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ProfileManageComponent);