/**
 * Created by odenza on 19/02/2018.
 */
/**
 * Created by odenza on 12/02/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Actions/story/action";
import * as profileAction from "../../Actions/profile/action";
import {connect} from "react-redux";
import "react-select/dist/react-select.css";
import ContactForm from "./Form/";
import axios from 'axios';

const optionsProfileTypes = [
    {value: 1, label: 'Food'},
    {value: 2, label: 'Being Fabulous'},
    {value: 3, label: 'Ken Wheeler'},
    {value: 4, label: 'ReasonML'},
    {value: 5, label: 'Unicorns'},
    {value: 6, label: 'Kittens'},
];

class ContactManageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            isLoading: true,
            contactData: {
                AddressName: '',
                AddressTel: '',
                AddressFax: '',
                AddressEmail: '',
                AddressZipCode: '',
                CityID: undefined,
                AddressTypeID: undefined,
                AddressAddress: '',
                AddressPhoto: '',
            }
        };
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

    handleSubmit = (values) => {
        console.log(values,'handleSubmit');
    }

    componentDidMount() {
        // this.loadItems(1);
        //this.props.getStoriesOLD(1);
        //this.loadItemsRedux(1011);
        //console.log(this.state.filterData,'filterData',  this.props.profileAccountSetting);
    }

    componentWillMount(){
        let url = 'api/Address/AddressID/';
        console.log(this.props.AddressID, 'AddressID');
        let that = this;
        if(this.props.AddressID !== 'New'.toLowerCase()){
            const token = localStorage.getItem("token");
            let headers = null;
            if (token) {
                headers = {'Authorization': `Bearer ${token}`};
            }
            const url = "https://gorgiasapp-v4.azurewebsites.net/api/Address/AddressID/" + this.props.AddressID;
            axios({
                method: 'get',
                url: url,
                headers: headers,
            })
                .then(response => {
                    const responseBody = response.data.Result;

                    // let contactData ={
                    //     AddressName: responseBody.data.Result.AddressName,
                    //     AddressTel: responseBody.data.Result.AddressTel,
                    //     AddressFax: responseBody.data.Result.AddressFax,
                    //     AddressEmail: responseBody.data.Result.AddressEmail,
                    //     AddressZipCode: responseBody.data.Result.AddressZipCode,
                    //     CityID: responseBody.data.Result.CityID,
                    //     AddressTypeID: responseBody.data.Result.AddressTypeID,
                    //     AddressAddress: responseBody.data.Result.AddressAddress,
                    //     AddressPhoto: 'done',
                    // }

                    that.setState({contactData: responseBody, isLoading: false});
                    console.log(this.state.contactData, this.props.AddressID, 'in action story success ;) NIMA');
                })
                .catch(error => {
                    console.log(error, this.props.AddressID, 'in action story error ;)');
                    // dispatch(authenticationAction.logout());
                });

        } else {
            that.setState({isLoading: false});
        }
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
        console.log(this.state.contactData, this.props.AddressID, 'in action story success ;) NIMA render');

        return (
            !this.state.isLoading ?
            <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop: 150 + "px"}}>
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column">
                                <div className="column_attr clearfix">
                                    <ContactForm
                                        optionsProfileTypes={optionsProfileTypes}
                                        handleSubmit={this.handleSubmit.bind(this)}
                                        data={this.state.contactData}
                                    />
                                    <br/>
                                    {this.state.contactData.AddressAddress}
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactManageComponent);