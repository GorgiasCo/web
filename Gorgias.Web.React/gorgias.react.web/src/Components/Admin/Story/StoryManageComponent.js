/**
 * Created by odenza on 12/02/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Stores/story/action";
import * as profileAction from "../../Stores/profile/action";
import {connect} from "react-redux";
import "react-select/dist/react-select.css";
import axios from "axios";
import Dropzone from "react-dropzone";
import Autocomplete from "react-autocomplete";
import StoryForm from "./Form";

const optionsProfileTypes = [
    {value: 1, label: 'Food'},
    {value: 2, label: 'Being Fabulous'},
    {value: 3, label: 'Ken Wheeler'},
    {value: 4, label: 'ReasonML'},
    {value: 5, label: 'Unicorns'},
    {value: 6, label: 'Kittens'},
];

class StoryManageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            value: '',
            values: [{KeyName: '', KeyID: 0}],
        };
    }

    renderContent(content, index) {

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

    prepareAutoComplete = (value) => {
        this.setState({value});
        const url = "https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/" + value;
        axios({
            method: 'get',
            url: url,
        })
            .then(response => {
                const responseBody = response;
                console.log(responseBody, value, 'in action story success ;) NIMA');
                this.setState({values: response.data.Result});
            })
            .catch(error => {
                console.log(error, value, 'in action story error ;)');
                // dispatch(authenticationAction.logout());
            });

    }

    render() {
        const loader = <div className="loader">Loading ...</div>;

        return (
            <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                                <div className="column_attr clearfix">
                                    <StoryForm
                                        // onDrop={this.onDrop.bind(this)}
                                        user={{
                                            ProfileEmail: 'yaser2us@gmail.com',
                                            ProfileFullname: 'Yasser',
                                            ProfileFullnameEnglish: 'Yasser EN',
                                            ProfileDescription: '',
                                            ProfileShortDescription: '',
                                            ProfileURL: 'siti',
                                            ProfileTypeID: 5,
                                            SubscriptionTypeID: undefined,
                                            ThemeID: undefined,
                                            ProfilePhoto: "",
                                            CategoryName:'',
                                            friends: [
                                                {
                                                    name: 'yasser',
                                                    ContentTypeID: 1,
                                                    description: 'https://www.facebook.com/ashkan.rastghamatian',

                                                },
                                                {
                                                    name: 'Nasser',
                                                    ContentTypeID: 2,
                                                    description: 'wowow',
                                                },
                                                {
                                                    name: 'niloofar',
                                                    description: 'lol ;)',
                                                    ContentTypeID: 3,
                                                }]
                                        }}
                                    />
                                    <br/>
                                    fdsfsfsdf
                                    <Autocomplete
                                        items={this.state.values}
                                        shouldItemRender={(item, value) => item.KeyName.toLowerCase().indexOf(value.toLowerCase()) > -1}
                                        getItemValue={item => item.KeyName}
                                        renderItem={(item, highlighted) =>
                                            <div
                                                key={item.KeyID}
                                                style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}
                                            >
                                                {item.KeyName}
                                            </div>
                                        }
                                        value={this.state.value}
                                        onChange={e => this.prepareAutoComplete(e.target.value)}
                                        onSelect={value => this.setState({value})}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(StoryManageComponent);