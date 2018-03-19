/**
 * Created by odenza on 12/02/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Stores/story/action";
import * as profileAction from "../../Stores/profile/action";
import {connect} from "react-redux";
import "react-select/dist/react-select.css";
import ProfileForm from "./Form/";
import AdminpageHeader from "../../PageElements/AdminPageHeader";
import {ToastContainer} from "react-toastify";
import httpRequest from "../../Global/HTTP/httpRequest";

// const optionsProfileTypes = [
//     {value: 1, label: 'Food'},
//     {value: 2, label: 'Being Fabulous'},
//     {value: 3, label: 'Ken Wheeler'},
//     {value: 4, label: 'ReasonML'},
//     {value: 5, label: 'Unicorns'},
//     {value: 6, label: 'Kittens'},
// ];


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
            ProfileURL: props.profileAccountSetting.payload.profileURL,//'siti',
            ProfileTypeID: props.profileAccountSetting.payload.ProfileTypeID,//5,
            CityID: props.profileAccountSetting.payload.CityID,
            // IndustryID: props.profileAccountSetting.payload.IndustryID,
            ProfileBirthday: props.profileAccountSetting.payload.ProfileBirthday,
            ProfileLanguageApp: props.profileAccountSetting.payload.ProfileLanguageApp,
            ProfilePassword: props.profileAccountSetting.payload.ProfilePassword,
            // IndustryName: props.profileAccountSetting.payload.IndustryName,
            IndustryID: {
                valueKey: props.profileAccountSetting.payload.IndustryID,
                labelKey: props.profileAccountSetting.payload.IndustryName
            },
            ProfilePhoto: "https://gorgiasasia.blob.core.windows.net/images/content-20161106233839-pic(4).jpg",
            optionsProfileTypes: null,
        }

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            profile: profile,
            isLoading: true,
        };
    }

    componentDidMount() {
        // this.loadItems(1);
        //this.props.getStoriesOLD(1);
        //this.loadItemsRedux(1011);
        //console.log(this.state.filterData,'filterData',  this.props.profileAccountSetting);
    }

    componentWillMount() {
        httpRequest.getProfileTypes().then(
            response => {
                console.log(response, 'response getProfileTypes');
                this.setState({
                    optionsProfileTypes: response.data.Result,
                    isLoading: false,
                });
            },
            error => {
                console.log(error, 'error getProfileTypes');
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
        console.log(nextProps, 'componentWillReceiveProps profile', this.props.profileAccountSetting.payload.ProfileID, nextProps.profileAccountSetting.payload.ProfileID);
        if (this.props.profileAccountSetting.payload.ProfileID !== nextProps.profileAccountSetting.payload.ProfileID) {
            console.log(nextProps, 'componentWillReceiveProps storyList', this.props.profileAccountSetting.payload.ProfileID, nextProps.profileAccountSetting.payload.ProfileID);
            this.setState({isLoading: true, profile: null,});
            let profile = {
                ProfileID: nextProps.profileAccountSetting.payload.ProfileID,
                ProfileEmail: nextProps.profileAccountSetting.payload.ProfileEmail,//'yaser2us@gmail.com',
                ProfileFullname: nextProps.profileAccountSetting.payload.ProfileFullname,//'Yasser',
                ProfileFullnameEnglish: nextProps.profileAccountSetting.payload.ProfileFullnameEnglish,//'Yasser EN',
                ProfileDescription: nextProps.profileAccountSetting.payload.ProfileDescription,//'',
                ProfileShortDescription: nextProps.profileAccountSetting.payload.ProfileShortDescription,//'',
                ProfileURL: nextProps.profileAccountSetting.payload.profileURL,//'siti',
                ProfileTypeID: nextProps.profileAccountSetting.payload.ProfileTypeID,//5,
                CityID: nextProps.profileAccountSetting.payload.CityID,
                ProfileBirthday: nextProps.profileAccountSetting.payload.ProfileBirthday,
                ProfileLanguageApp: nextProps.profileAccountSetting.payload.ProfileLanguageApp,
                ProfilePassword: nextProps.profileAccountSetting.payload.ProfilePassword,
                IndustryID: {
                    valueKey: nextProps.profileAccountSetting.payload.IndustryID,
                    labelKey: nextProps.profileAccountSetting.payload.IndustryName
                },
                ProfilePhoto: `https://gorgiasasia.blob.core.windows.net/images/profile-${nextProps.profileAccountSetting.payload.ProfileID}.jpg`,
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

        let registerData = {
            ProfileFullname: data.ProfileFullname,
            ProfileFullnameEnglish: data.ProfileFullnameEnglish,
            ProfileTypeID: data.ProfileTypeID,
            CityID: data.CityID,
            IndustryID: data.IndustryID.valueKey,
            IndustryName: data.IndustryID.labelKey,
            ProfileShortDescription: data.ProfileShortDescription,
            ProfileBirthday: data.ProfileBirthday,
            ProfileEmail: data.ProfileEmail,
            ProfilePassword: data.ProfilePassword,
            ProfileID: data.ProfileID,
            ProfileLanguageApp: 'en',
            isFirstRegistration: true,
        };

        console.log(registerData, 'registerData');

        httpRequest.postAsyncUpdateProfileRegistration(registerData).then(
            response => {
                console.log(response, 'response postAsyncUpdateProfileRegistration', this.props.profileAccountSetting);

                let newProfileAccountSetting = this.props.profileAccountSetting;
                newProfileAccountSetting.payload.ProfileFullname = data.ProfileFullname;
                newProfileAccountSetting.payload.ProfileFullnameEnglish = data.ProfileFullnameEnglish;
                newProfileAccountSetting.payload.ProfileTypeID = data.ProfileTypeID;
                newProfileAccountSetting.payload.CityID = data.CityID;
                newProfileAccountSetting.payload.IndustryID = data.IndustryID.valueKey;
                newProfileAccountSetting.payload.IndustryName = data.IndustryID.labelKey;
                newProfileAccountSetting.payload.ProfileShortDescription = data.ProfileShortDescription;
                newProfileAccountSetting.payload.ProfileBirthday = data.ProfileBirthday;

                this.props.setProfileAccountSetting(newProfileAccountSetting.payload);
            },
            error => {
                console.log(error, 'response postAsyncUpdateProfileRegistration');
            }
        )

        // toast.success("Success!", {
        //     position: toast.POSITION.TOP_CENTER,
        //     onClose: this.return,
        // });
    };

    return = () => {
        this.props.router.history.push('/admin/');
    };

    prepareForm = (data) => {
        console.log('prepareForm', data);
        return <ProfileForm
            optionsProfileTypes={this.state.optionsProfileTypes}
            user={data}
            handleSubmit={this.handleSubmit}
        />
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;
        const {isLoading, profile, optionsProfileTypes} = this.state;
        console.log(profile, 'render profile changed ;)', isLoading);

        return (
            !isLoading ?
                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                    <ToastContainer closeButton={false}/>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                            <div className="mcb-wrap-inner">
                                <AdminpageHeader
                                    isLoading={false}
                                    hasButton={true}
                                    headerTitle={`My Profile`}
                                    newButtonCaption={`back`}
                                    newPageURL={`/admin/`}
                                />
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr tkPanels clearfix">
                                        <ProfileForm
                                            optionsProfileTypes={optionsProfileTypes}
                                            user={profile}
                                            handleSubmit={this.handleSubmit}
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
        setProfileAccountSetting: data => dispatch(profileAction.setProfileAccountSetting(data)),
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ProfileManageComponent);