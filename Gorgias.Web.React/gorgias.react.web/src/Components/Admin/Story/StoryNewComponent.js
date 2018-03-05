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
import CustomGoogleMap from "../../PageElements/Form/CustomGoogleMap";
import httpRequest from "../../Global/HTTP/httpRequest";

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
    ContentID: null,
}

let newTextContent = {
    ContentTitle: '',
    ContentURL: '',
    ContentGeoLocation: null,
    ContentDimension: null,
    ContentTypeID: 3,
    ContentID: null,
}

let newYotubeContent = {
    ContentTitle: '',
    ContentURL: '',
    ContentGeoLocation: null,
    ContentDimension: null,
    ContentTypeID: 10,
    ContentID: null,
}

let newCTAContent = {
    ContentTitle: '',
    ContentURL: '',
    ContentGeoLocation: null,
    ContentDimension: null,
    ContentTypeID: 0,
    ContentID: null,
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
            Contents: [{
                ContentTitle: "hello WOW from fiddler4 h6",
                ContentURL: "https://gorgiasasia.blob.core.windows.net/images/content-20161106233839-pic(4).jpg",
                ContentGeoLocation: null,
                ContentDimension: "800-600",
                ContentTypeID: 1
            }]
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

    onDrop(files) {

        console.log('onDrop ;)', files);
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

    componentWillMount() {
        httpRequest.getAsyncStorySettings(this.props.profileAccountSetting.payload.ProfileID, 13, this.props.profileAccountSetting.payload.ProfileIsConfirmed).then(
            response => {
                console.log(response, 'getAsyncStorySettings')
                let storySetting = response.data.Result;

                httpRequest.getAsyncContentTypes(3).then(
                    response => {
                        console.log(response,'getAsyncContentTypes');
                        let contentTypes = response.data.Result;

                        if (this.props.AlbumID.toLowerCase() === 'new') {
                            this.setState({
                                isLoading: false,
                                isNew: true,
                                storySetting: storySetting,
                                contentTypes: contentTypes,
                            })
                        } else {
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
                        console.log(error,'getAsyncContentTypes');
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

        const {isLoading, isNew} = this.state;
        return (
            !isLoading ?
                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                    <div className="section_wrapper mcb-section-inner">
                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                            <div className="mcb-wrap-inner">
                                <div className="column mcb-column one column_column">
                                    <div className="column_attr clearfix">
                                        <h2>
                                            New Story ;)
                                        </h2>
                                        <StoryForm
                                            optionsProfileTypes={optionsProfileTypes}
                                            // onDrop={this.onDrop.bind(this)}
                                            newContent={newContent}
                                            isNew={isNew}
                                            contentTypes={this.state.contentTypes}
                                            newTextContent={newTextContent}
                                            newYotubeContent={newYotubeContent}
                                            newCTAContent={newCTAContent}
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