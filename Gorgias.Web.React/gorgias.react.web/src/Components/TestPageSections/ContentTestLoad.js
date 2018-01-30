import React, {Component} from "react";
import * as storyAction from "../Actions/story/action";
import * as profileAction from "../Actions/profile/action";
import StoryRow from "../Admin/Story/StoryRow";

import EndlessLoadingProvider from "../Admin/EndlessLoadingProvider";
import StoryRowComponent from "../Admin/Story/StoryRowComponent";
import ProfileRowComponent from "../Admin/Profile/ProfileRowComponent";

import ElementProvider from "../Admin/Form/ElementProvider";

import {connect} from "react-redux";
const imageList = [];
const api = {
    baseUrl: 'https://api.soundcloud.com',
    client_id: 'caf73ef1e709f839664ab82bef40fa96'
};

let filterData = {
    CategoryID: 12,
    CategoryTypeID: 2,
    ProfileID: 1011,
    Page: 1,
    Size: 30,
    Languages: ["en"],
    isMicroApp: false,
    MicroAppProfileID: null,
};

const yell = (PassedComponent) =>
    ({children, ...props}) =>
        <PassedComponent {...props}>
            {children.toUpperCase()}!
        </PassedComponent>


const Title = (props) => <h1>{props.children}</h1>
const Title5 = (props) => <h5>{props.children}</h5>

const InputEmail = (props) => <input type="email" {...props.name}/>
const InputPassword = (props) => <input type="password" {...props.name}/>
const DropDown = (props) =>
    <select {...props.name}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
    </select>


const AngryTitle = yell(Title);
const HappyTitle = yell(Title5);

const Email = ElementProvider(InputEmail);
const Password = ElementProvider(InputPassword);
const FruitDropDown = ElementProvider(DropDown);


const StoryEndless = EndlessLoadingProvider(StoryRowComponent);
const ProfileEndless = EndlessLoadingProvider(ProfileRowComponent);

class ContentTestLoad extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            filterData: {
                CategoryID: 12,//12 86
                CategoryTypeID: 2,
                ProfileID: 1011,
                Page: 1,
                Size: 30,
                Languages: ["en"],
                isMicroApp: false,
                MicroAppProfileID:parseInt(this.props.profileAccountSetting.payload.ProfileID),
            },
        };
    }

    componentDidMount() {
        // this.loadItems(1);
        //this.props.getStoriesOLD(1);
        this.loadItemsRedux(1011);
        console.log(this.state.filterData,'filterData',  this.props.profileAccountSetting);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.filterData.MicroAppProfileID !== nextProps.filterData.MicroAppProfileID){
            return true;
        }
        return false;
    }

    loadItemsRedux = (profileid) => {

        //this.props.getProfileAccountSetting(profileid);

        let filterData = this.state.filterData;
        filterData.Page = 1;
        filterData.CategoryID = 86;
        filterData.isMicroApp = !filterData.isMicroApp;
        filterData.MicroAppProfileID = parseInt(this.props.profileAccountSetting.payload.ProfileID);
            // this.props.getStoriesOLD(page);
        this.props.getStories(filterData);
    }

    // loadItems = (page) => {
    //     var self = this;
    //
    //     var url = 'https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Stories/Latest/10/' + page;
    //     if (this.state.nextHref) {
    //         url = 'https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Stories/Latest/10/' + page;
    //     }
    //
    //     let filterData = this.state.filterData;
    //     filterData.Page = page;
    //     console.log(filterData, 'load more owl');
    //
    //     // Promise.all([
    //     //     this.setState({
    //     //         tracks: []
    //     //     })
    //     // ]).then(() => {
    //     //     console.log('P DONE ;)');
    //     // });
    //
    //
    //     axios({
    //         method: 'get',
    //         url: url}
    //         // data:{
    //         //     client_id: api.client_id,
    //         //     linked_partitioning: 1,
    //         //     page_size: 10
    //         // }}
    //     )
    //         .then(response => {
    //             if(response) {
    //                 var tracks = self.state.tracks;
    //
    //                 console.log(response,'Response');
    //
    //                 response.data.Result.Items.map((track) => {
    //                     if(track.artwork_url === null) {
    //                         track.artwork_url = track.user.avatar_url;
    //                     }
    //
    //                     tracks.push(track);
    //                 });
    //
    //                 this.setState({
    //                     tracks: tracks,
    //                     nextHref: true,
    //                 });
    //
    //                 // if(response.next_href) {
    //                 //     self.setState({
    //                 //         tracks: tracks,
    //                 //         nextHref: response.next_href
    //                 //     });
    //                 // } else {
    //                 //     self.setState({
    //                 //         hasMoreItems: false
    //                 //     });
    //                 // }
    //             }
    //         });
    // }

    render() {
        console.log('render rrrrrrr ;)')
        const loader = <div className="loader">Loading ...</div>;

        // var items = [];
        // // this.state.tracks.map((track, i) => {
        // this.props.stories.map((track, i) => {
        //     items.push(
        //         <StoryRow key={i} data={track}/>
        //     );
        // });

        return (
            <div>
                {/*<StoryEndless useWindow={false} getData={this.props.getStories}  filteringData={this.state.filterData} data={this.props.stories}/>*/}
                <ProfileEndless useWindow={false} getData={this.props.getStories} hasMore={this.props.storiesHasMore}  filteringData={this.props.filterData}
                                data={this.props.stories}/>
                <AngryTitle>
                    Salam Yasser
                </AngryTitle>

                <HappyTitle>
                    Nima Jan Salam ;)
                </HappyTitle>

                <Email ref="nimaEmail" name="nimaEmail"/>
                <Password name="nimaPassword"/>
                <FruitDropDown/>
                <button onClick={()=>this.props.getProfileAccountSetting(1010)}>Change Profile to something ;)</button>
                {/*<yell children="Nasser Jan">*/}
                {/*<InfiniteScroll*/}
                {/*pageStart={0}*/}
                {/*loadMore={this.loadItemsRedux.bind(this)}*/}
                {/*hasMore={this.state.hasMoreItems}*/}
                {/*threshold={20}*/}
                {/*useWindow={true}*/}
                {/*loader={loader}>*/}
                {/*<div className="tracks">*/}
                {/*{items}*/}
                {/*</div>*/}
                {/*</InfiniteScroll>*/}
                {/*</yell>*/}
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
    console.log(dispatch, 'new', dispatch);
    return {
        // You can now say this.props.createBook
        getStories: filteringData => dispatch(storyAction.getStories(filteringData)),
        getStoriesOLD: page => dispatch(storyAction.getStoriesOLD(page)),
        getCategories: profileID => dispatch(storyAction.getCategories(profileID)),
        getProfileAccountSetting: profileID => dispatch(profileAction.getProfileAccountSetting(profileID))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ContentTestLoad);