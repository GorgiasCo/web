/**
 * Created by odenza on 19/02/2018.
 */
/**
 * Created by odenza on 12/02/2018.
 */
import React, {Component} from "react";
import * as storyAction from "../../Actions/story/action";
import * as profileAction from "../../Actions/profile/action";
import * as authenticationAction from "../../Actions/authentication/action";
import {connect} from "react-redux";
import "react-select/dist/react-select.css";
import ContactForm from "./Form/";
// import axios from "axios";
import httpRequest from "../../Global/HTTP/httpRequest";

let API_KEY = "AIzaSyAjU94_y64Gh4mCZgDi4Ccdadaw8YRxqek";
const GOOGLE_API = "https://maps.google.com/maps/api/geocode/json";

class ContactManageComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            addressTypes: [],
            contactData: {
                AddressName: '',
                AddressTel: '',
                AddressFax: '',
                AddressEmail: null,
                AddressZipCode: '',
                CityID: undefined,
                AddressTypeID: undefined,
                AddressAddress: '',
                AddressImage: null,
                AddressStatus: true,
            }
        };
    }

    async handleUrl(url) {
        const response = await fetch(url).catch(error =>
            Promise.reject(new Error("Error fetching data"))
        );

        const json = await response.json().catch(() => {
            console.log("Error parsing server response");
            return Promise.reject(new Error("Error parsing server response"));
        });

        if (json.status === "OK") {
            console.log(json);
            return json;
        }
        console.log(`Server returned status code ${json.status}`, true);
        return Promise.reject(
            new Error(`Server returned status code ${json.status}`)
        );
    }


    async fromAddress(address: string, apiKey: string): Promise {
        if (!address) {
            console.log("Provided address is invalid", true);
            return Promise.reject(new Error("Provided address is invalid"));
        }

        let url = `${GOOGLE_API}?address=${encodeURI(address)}`;

        if (apiKey || API_KEY) {
            API_KEY = apiKey || API_KEY;
            url += `&key=${API_KEY}`;
        }

        console.log(url);
        return this.handleUrl(url);
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
        console.log(values, 'handleSubmit');
        this.fromAddress(values.AddressAddress, API_KEY).then(
            response => {
                const {lat, lng} = response.results[0].geometry.location;
                values.AddressLocation = null;
                values.AddressStringLocation = lat + '#' + lng;
                console.log(values,'error updateAsyncAddress');

                if (this.props.AddressID !== 'New'.toLowerCase()) {
                    httpRequest.updateAsyncAddress(values.AddressID, values).then(
                        response => {
                            console.log(response,'response updateAsyncAddress');
                        },
                        error => {
                            console.log(error,'error updateAsyncAddress');
                        }
                    )
                } else {
                    values.ProfileID = parseInt(this.props.profileAccountSetting.payload.ProfileID);
                    values.AddressLocation = null;
                    console.log(values,'inserting address');
                    httpRequest.newAsyncAddress(values).then(
                        response => {
                            console.log(response,'response newAsyncAddress');
                        },
                        error => {
                            console.log(error,'error newAsyncAddress');
                        }
                    )
                }
                console.log('address la', lat, lng, values);
            },
            error => {
                console.error(error);
            }
        );
    }

    componentDidMount() {
        // this.loadItems(1);
        //this.props.getStoriesOLD(1);
        //this.loadItemsRedux(1011);
        //console.log(this.state.filterData,'filterData',  this.props.profileAccountSetting);
    }

    componentWillMount() {
        console.log(this.props.AddressID, 'AddressID');
        httpRequest.getAsyncAddressTypes().then(
            response => {
                console.log(response, 'response promis');
                this.setState({addressTypes: response.data.Result});
                let that = this;
                if (this.props.AddressID !== 'New'.toLowerCase()) {
                    httpRequest.getAddressByID(this.props.AddressID, (response) => {
                        that.setState({contactData: response.Result, isLoading: false});
                    }, (error) => {
                        console.log(error, this.props.AddressID, 'in action story error ;)');
                        this.props.logout();
                    })
                } else {
                    that.setState({isLoading: false});
                }
            },
            error => {
                console.log(error, 'error promis');
            }
        );
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
                                            optionsProfileTypes={this.state.addressTypes}
                                            handleSubmit={this.handleSubmit.bind(this)}
                                            data={this.state.contactData}
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
        logout: () => dispatch(authenticationAction.logout()),
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ContactManageComponent);