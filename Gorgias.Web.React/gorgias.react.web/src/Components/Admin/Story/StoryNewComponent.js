/**
 * Created by odenza on 19/02/2018.
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
import {connect} from "react-redux";
import "react-select/dist/react-select.css";
import StoryForm from "./Form/";
import httpRequest from "../../Global/HTTP/httpRequest";
import AdminpageHeader from "../../PageElements/AdminPageHeader";
import dateFormat from "dateformat";
import {toast, ToastContainer} from "react-toastify";

const optionsProfileTypes = [
    {value: 1, label: 'Food'},
    {value: 2, label: 'Being Fabulous'},
    {value: 3, label: 'Ken Wheeler'},
    {value: 4, label: 'ReasonML'},
    {value: 5, label: 'Unicorns'},
    {value: 6, label: 'Kittens'},
];

let newContent = {
    ContentTitle: '',
    ContentURL: '',
    ContentGeoLocation: null,
    ContentDimension: null,
    ContentTypeID: 1,
    ContentID: 0,
}

let newTextContent = {
    ContentTitle: '',
    ContentURL: '',
    ContentGeoLocation: null,
    ContentDimension: null,
    ContentTypeID: 3,
    ContentID: 0,
}

let newYotubeContent = {
    ContentTitle: '',
    ContentURL: '',
    ContentGeoLocation: null,
    ContentDimension: null,
    ContentTypeID: 10,
    ContentID: 0,
}

let newCTAContent = {
    ContentTitle: 'newCTAContentnewCTAContentnewCTAContentnewCTAContentnewCTAContentnewCTAContentnewCTAContentnewCTAContent',
    ContentURL: '',
    ContentGeoLocation: null,
    ContentDimension: null,
    ContentTypeID: 0,
    ContentID: 0,
}

class StoryNewComponent extends Component {

    constructor(props) {
        super(props);

        let newAlbumData = {
            AlbumID: 0,
            AlbumName: '',
            AlbumStatus: true,
            AlbumCover: undefined,
            CategoryID: undefined,
            ProfileID: parseInt(props.profileAccountSetting.payload.ProfileID),
            AlbumDatePublish: undefined,
            AlbumView: 0,
            AlbumAvailability: undefined,
            AlbumHasComment: true,
            AlbumReadingLanguageCode: undefined,
            AlbumRepostValue: null,
            AlbumRepostRequest: null,
            AlbumRepostAttempt: null,
            AlbumPrice: null,
            AlbumIsTokenAvailable: null,
            AlbumPriceToken: null,
            ContentRatingID: undefined,
            AlbumParentID: null,
            Topic: null,
            Contents: []
        };

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            story: newAlbumData,
            isLoading: true,
            isNew: true,
            storySetting: null,
            contentTypes: null,
        };

        console.log(this.props.AlbumID, 'AlbumID', newAlbumData);
    }

    return = () => {
        this.props.router.history.push('/admin/story');
    }

    handleSubmit = (data) => {
        const regex = /[?&](\d+)-(\d+)/;
        if (data.Contents[0] !== undefined && data.Contents[0].ContentTypeID === 1) {

            data.Contents = data.Contents.map(el => {
                // if (el.ContentDimension === null)
                    if (el.ContentTypeID === 1) {
                        let dimension = regex.exec(el.ContentURL);
                        if(dimension !== null){
                            console.log(dimension, el.ContentURL, 'dimenssion', el.ContentURL.split('?')[0]);
                            return Object.assign({}, el, {
                                ContentDimension: `${dimension[1]}-${dimension[2]}`,
                                ContentID: el.ContentID > 0 ? el.ContentID : 0,
                                ContentURL: el.ContentURL.split('?')[0],
                                ContentTypeID:  parseInt(el.ContentTypeID),
                            })
                        }
                    }
                return Object.assign({}, el, {
                    ContentTypeID:  parseInt(el.ContentTypeID),
                })
                // return el
            });

            console.log('onDrop ;)', data);
            data.AlbumName = data.Contents[0].ContentTitle;
            data.AlbumCover = data.Contents[0].ContentURL;
            data.AlbumStatus = true;
            data.CategoryID = data.CategoryID !== undefined ? data.CategoryID : 29;
            // data.Topic = data.Topic !== undefined ? { CategoryName: data.Topic, CategoryID: null } : null;
            // data.Topic = data.Topic !== undefined ? { CategoryName: data.Topic, CategoryID: null } : null;

            if (this.state.isNew) {
                data.AlbumView = 0;
                data.AlbumDatePublish = dateFormat(data.AlbumDatePublish, "UTC:yyyy-mm-dd'T'HH:MM:ss");

                // console.log(data.AlbumDatePublish,dateFormat(data.AlbumDatePublish, "UTC:yyyy-mm-dd'T'HH:MM:ss"), 'new Date');
                httpRequest.newAsyncStory('Insert', data).then(
                    response => {
                        console.log(response, 'story response Insert');

                        let notificationData = {
                            body: this.props.profileAccountSetting.payload.ProfileFullname + " has published new story",
                            title: "New Story",
                            albumid: response.data.Result.AlbumID,
                            ProfileFullname: this.props.profileAccountSetting.payload.ProfileFullname,
                            channelid: "ch" + this.props.profileAccountSetting.payload.ProfileID,
                            ProfileID: this.props.profileAccountSetting.payload.ProfileID,
                            //NotificationType: 'Story',
                            //canValidate: false,
                        };

                        httpRequest.postAsyncStoryNotification(notificationData).then(
                            response => {
                                console.log(response, 'story response Insert');
                                toast.success("Success!", {
                                    position: toast.POSITION.TOP_CENTER,
                                    onClose: this.return,
                                });
                            },
                            error => {
                                console.log(error, 'story error Insert');
                            }
                        )
                        // toast.success("Success!", {
                        //     position: toast.POSITION.TOP_CENTER,
                        //     onClose: this.return,
                        // });
                    },
                    error => {
                        console.log(error, 'story error Insert');
                    }
                )
            } else {
                data.AlbumDatePublish = this.state.story.AlbumDatePublish;
                httpRequest.newAsyncStory('Update', data).then(
                    response => {
                        console.log(response, 'story response Insert');

                        let notificationData = {
                            body: this.props.profileAccountSetting.payload.ProfileFullname + " has updated old story",
                            title: "Updated Story",
                            albumid: response.data.Result.AlbumID,
                            ProfileFullname: this.props.profileAccountSetting.payload.ProfileFullname,
                            channelid: "ch" + this.props.profileAccountSetting.payload.ProfileID,
                            ProfileID: this.props.profileAccountSetting.payload.ProfileID,
                            //NotificationType: 'Story',
                            //canValidate: false,
                        };

                        httpRequest.postAsyncStoryNotification(notificationData).then(
                            response => {
                                console.log(response, 'story response Insert');
                                toast.success("Success!", {
                                    position: toast.POSITION.TOP_CENTER,
                                    onClose: this.return,
                                });
                            },
                            error => {
                                console.log(error, 'story error Insert');
                            }
                        )
                    },
                    error => {
                        console.log(error, 'story error Insert');
                    }
                )
            }
            // Topic: {CategoryName: data.Category.value, CategoryID: data.Category.valueID},
        } else {
            console.log('cant send without image header onDrop ;)', data);
        }


        // var image = new Image();
        //
        // image.addEventListener('load', function () {
        //     console.log(image.height, image.width, image.size);
        //     if (image.width > 300) {
        //         console.log('This image must be exactly 2500 pixels wide.');
        //         this.setState({
        //             // files: [...files, files],
        //             files: [...this.state.files, ...files],
        //         });
        //     } else if (image.height !== 3000) {
        //         console.log('This image must be exactly 3000 pixels wide.');
        //     }
        //
        //     // display errors or do success thing
        //     // if (errors.length >= 0) {
        //     //     alert(errors.join(', '));
        //     // } else {
        //     //     alert('client side validations passed');
        //     // }
        // }.bind(this));
        //
        // files.forEach(file => {
        //     const reader = new FileReader();
        //     reader.onload = () => {
        //         const fileAsBinaryString = reader.result;
        //         console.log(file, 'file ;)');
        //
        //
        //         image.src = file.preview;
        //         this.props.addTodo(file.preview);
        //
        //         // do whatever you want with the file content
        //     };
        //     reader.onabort = () => console.log('file reading was aborted');
        //     reader.onerror = () => console.log('file reading has failed');
        //
        //     reader.readAsBinaryString(file);
        // });
    }

    componentDidMount() {
        // this.loadItems(1);
        //this.props.getStoriesOLD(1);
        //this.loadItemsRedux(1011);
        //console.log(this.state.filterData,'filterData',  this.props.profileAccountSetting);
    }

    prepareAvailability = (data, canAll = false) => {
        var item = data.KeyID;
        console.log(data, 'Availability');

        if (data.KeyExtra !== null && canAll === false) {
            return null;
        }

        let hours = (item / (60)).toFixed(0);

        let days = (item / (60 * 24)).toFixed(0);
        let result = null;

        if (item < 60) {
            result = item > 1 ? item + ' mins' : item + ' min';
        } else if (hours < 24) {
            result = hours > 1 ? hours + ' hours' : hours + ' hour';
        } else {
            result = days > 1 ? days + ' days' : days + ' day';
        }
        return {KeyName: result, KeyID: data.KeyID, KeyExtra: data.KeyExtra};
    }

    componentWillMount() {

        let notificationData = {
            body: this.props.profileAccountSetting.payload.ProfileFullname + " has published new story",
            title: "New Story",
            albumid: 3903,
            ProfileFullname: this.props.profileAccountSetting.payload.ProfileFullname,
            channelid: "ch" + this.props.profileAccountSetting.payload.ProfileID,
            ProfileID: this.props.profileAccountSetting.payload.ProfileID,
            //NotificationType: 'Story',
            //canValidate: false,
        };

        httpRequest.postAsyncStoryNotification(notificationData).then(
            response => {
                console.log(response, 'story response notification');
            },
            error => {
                console.log(error, 'story error notification');
            }
        )

        httpRequest.getAsyncStorySettings(this.props.profileAccountSetting.payload.ProfileID, 13, this.props.profileAccountSetting.payload.ProfileIsConfirmed).then(
            response => {
                console.log(response, 'getAsyncStorySettings')
                let storySetting = response.data.Result;

                storySetting[1].SettingCollection = [{
                    KeyName: "None",
                    KeyID: null
                }, ...storySetting[1].SettingCollection];

                httpRequest.getAsyncContentTypes(3).then(
                    response => {
                        console.log(response, 'getAsyncContentTypes');
                        let contentTypes = response.data.Result;

                        if (this.props.AlbumID.toLowerCase() === 'new') {

                            let newAvailability = [];

                            storySetting[3].SettingCollection.forEach((item) => {
                                let result = this.prepareAvailability(item);
                                if (result !== null) {
                                    newAvailability.push(result);
                                }
                            });

                            storySetting[3].SettingCollection = newAvailability;
                            console.log(storySetting[3].SettingCollection, 'storySetting[3].SettingCollection');

                            if(this.props.stories.length > 0){
                                let latestStory = this.props.stories[0];
                                let newStory = this.state.story;
                                newStory.CategoryID = latestStory.CategoryID;
                                // newStory.CategoryName = latestStory.CategoryName;
                                newStory.AlbumAvailability = latestStory.AlbumAvailability;
                                newStory.AlbumReadingLanguageCode = latestStory.AlbumReadingLanguageCode;
                                newStory.ContentRatingID = latestStory.ContentRatingID;
                                newStory.AlbumHasComment = latestStory.AlbumHasComment;

                                console.log(latestStory, 'Latest Stories', newStory);
                            }

                            this.setState({
                                isLoading: false,
                                isNew: true,
                                storySetting: storySetting,
                                contentTypes: contentTypes,
                            });
                        } else {

                            let newAvailability = [];

                            storySetting[3].SettingCollection.forEach((item) => {
                                let result = this.prepareAvailability(item,true);
                                newAvailability.push(result);
                            });

                            storySetting[3].SettingCollection = newAvailability;
                            console.log(storySetting[3].SettingCollection, 'storySetting[3].SettingCollection');

                            httpRequest.getAsyncStoryForEdit(this.props.AlbumID, this.state.story.ProfileID).then(
                                response => {
                                    console.log(response.data.Result, 'getStory ;)');

                                    this.setState({
                                        story: response.data.Result,
                                        isLoading: false,
                                        isNew: false,
                                        storySetting: storySetting,
                                        contentTypes: contentTypes,
                                    })
                                },
                                error => {
                                    console.log(error, 'getStory ;)');
                                }
                            )
                        }

                    },
                    error => {
                        console.log(error, 'getAsyncContentTypes');
                    }
                )
            },
            error => {
                console.log(error, 'getAsyncStorySettings')
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

    changeProfile = (event) => {
        console.log('changeProfile');
        if (this.props.filterData.MicroAppProfileID === 1011) {
            this.props.getProfileAccountSetting(1010);
        } else {
            this.props.getProfileAccountSetting(1011);
        }
        event.preventDefault();
    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        const {isLoading, isNew, storySetting} = this.state;
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
                                    headerTitle={`Edit Story`}
                                    newPageURL={`/admin/story/`}
                                    newButtonCaption={`Back`}
                                />
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr tkPanels clearfix">
                                        <StoryForm
                                            optionsProfileTypes={optionsProfileTypes}
                                            storyOptions={storySetting}
                                            handleSubmit={this.handleSubmit}
                                            newContent={newContent}
                                            isNew={isNew}
                                            contentTypes={this.state.contentTypes}
                                            newTextContent={newTextContent}
                                            newYotubeContent={newYotubeContent}
                                            newCTAContent={newCTAContent}
                                            ProfileIsConfirmed={this.props.profileAccountSetting.payload.ProfileIsConfirmed}
                                            user={this.state.story}
                                            // user={{
                                            //     ProfileEmail: 'yaser2us@gmail.com',
                                            //     ProfileFullname: 'Yasser',
                                            //     ProfileFullnameEnglish: 'Yasser EN',
                                            //     ProfileDescription: '',
                                            //     ProfileShortDescription: '',
                                            //     ProfileURL: 'siti',
                                            //     ProfileTypeID: 5,
                                            //     SubscriptionTypeID: undefined,
                                            //     ThemeID: undefined,
                                            //     ProfilePhoto: "",
                                            //     category: '',
                                            //     friends: [
                                            //         {
                                            //             name: 'yasser',
                                            //             ContentTypeID: 0,
                                            //             description: 'https://www.facebook.com/ashkan.rastghamatian',
                                            //
                                            //         },
                                            //         {
                                            //             name: 'Nasser',
                                            //             ContentTypeID: 0,
                                            //             description: 'wowow',
                                            //         },
                                            //         {
                                            //             name: 'niloofar',
                                            //             description: 'lol ;)',
                                            //             ContentTypeID: 0,
                                            //         }]
                                            //     // topics:{value: "Kittens", label: "Being Fabulous"},
                                            //     // topics:{value: "Kittens"},
                                            // }}
                                        />
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
export default connect(mapStateToProps, mapDispatchToProps)(StoryNewComponent);