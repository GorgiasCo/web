/**
 * Created by yasser on 1/24/2018.
 */
/***
 Use this component inside your ReactJS Application.
 A scrollable list with different item type
 */
import React, {Component} from "react";
import * as storyAction from "../../Stores/story/action";

import {connect} from "react-redux";
// Most of react-virtualized's styles are functional (eg position, size).
// Functional styles are applied directly to DOM elements.
// The Table component ships with a few presentational styles as well.
// They are optional, but if you want them you will need to also import the CSS file.
// This only needs to be done once; probably during your application's bootstrapping process.
import "react-virtualized/styles.css";
// You can import any component you want as a named export from 'react-virtualized', eg
// But if you only use a few react-virtualized components,
// And you're concerned about increasing your application's bundle size,
// You can directly import only the components you need, like so:


/***
 * To test out just copy this component and render in you root component
 */

let filterData = {
    CategoryID: 12,
    CategoryTypeID: 2,
    ProfileID: 1011,
    Page: 1,
    Size: 20,
    Languages: ["en"],
    isMicroApp: false,
    MicroAppProfileID: null,
};

const list = [
    ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */]
    // And so on...
];

function cellRenderer({columnIndex, key, rowIndex, style}) {
    return (
        <div
            key={key}
            style={style}
        >
            {list[rowIndex][columnIndex]}
        </div>
    )
}

class StoryList extends React.Component {
    constructor(args) {
        super(args);


    }


    componentWillMount() {
        this.props.getStories(filterData);
        console.log('will nima mount');
    }

    loadMoreStories = (e) => {
        console.log(e, 'OWL', e.item.count - 10 < e.item.index);
        if (e.item.count - 10 < e.item.index) {
            filterData.Page = filterData.Page + 1;
            console.log(filterData, 'load more owl');
            this.props.getStories(filterData);
        }
        // filterData.Page = filterData.Page + 1;
        // console.log(filterData, 'load more owl');
        // this.props.getStories(filterData);
        // e.preventDefault();
    }

    loadMoreStoriesTest = () => {
        // console.log(e,'OWL',e.item.count - 10 < e.item.index);
        // if(e.item.count - 10 < e.item.index){
        //     filterData.Page = filterData.Page + 1;
        //     console.log(filterData, 'load more owl');
        //     this.props.getStories(filterData);
        // }
        filterData.Page = filterData.Page + 1;
        console.log(filterData, 'load more owl');
        this.props.getStories(filterData);
        // e.preventDefault();
    }

    renderStory(story) {
        return (
            <div key={story.AlbumID}>

                <img className="tk fit2" src={story.cdnAlbumCover} alt={story.ProfileFullname}
                     style={{borderRadius: "9px"}}/>

                <div className="desc2" style={{
                    position: "absolute",
                    top: "70%",
                    left: "16px",
                    color: "white",
                    zIndex: "1"
                }}>
                    <p style={{fontSize: "12px"}}>{story.AlbumName}</p>
                    {/*<p className="tkBottom-p-font">24</p>*/}
                </div>
                <div className="full-card-overlay gradient" style={{borderRadius: "9px"}}>
                    {/* <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>*/}
                    <div className="customButton">OPEN IN APP</div>
                </div>
            </div>

            // <li>
            //   <img src="https://gorgiascdn.azureedge.net/albums/hottest-album-1b14a562-1801-4494-a289-1b45303df32c.jpg"/>
            //
            //   <div>heyy there</div>
            //
            // </li>


        )
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            variableWidth: false,
            lazyLoad: true,
            accessibility: true,
            beforeChange: (oldIndex, newIndex) => {
                if (newIndex > this.props.stories.payload.length - 5) {
                    this.loadMoreStoriesTest();
                }
                console.log('hi lalalal nima', oldIndex, newIndex);
            }
        };


        var items = [];
        if (this.props.stories !== undefined) {


            this.props.stories.payload.map((story, i) => {
                items.push(
                    <div key={story.AlbumID} style={{width: "200px", float: "left"}}>

                        <img className="tk fit2" src={story.cdnAlbumCover} alt={story.ProfileFullname}
                             style={{borderRadius: "9px"}}/>

                        <div className="desc2" style={{
                            position: "absolute",
                            top: "70%",
                            left: "16px",
                            color: "white",
                            zIndex: "1"
                        }}>
                            <p style={{fontSize: "12px"}}>{story.AlbumName}</p>
                            {/*<p className="tkBottom-p-font">24</p>*/}
                        </div>
                        {/*<div className="full-card-overlay gradient" style={{borderRadius: "9px"}}>*/}
                        {/*/!* <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>*!/*/}
                        {/*<div className="customButton">OPEN IN APP</div>*/}
                        {/*</div>*/}
                    </div>
                );
            });
        }


        console.log('this.props.stories.payload', 'StoryList nima', 'Render ;)');
        return (
            // !this.props.stories.isLoading ?


            <div className="section mcb-section full-width tkSection-paddingBottom-only">

                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column ">
                                <div className="column_attr clearfix" style={{padding: 0 + " " + 8 + "%"}}>
                                    <h3 className="tkFont1" style={{color: "white"}}>Top Stories</h3>
                                </div>
                            </div>
                            <div className="column mcb-column one column_slider ">
                                <div className="content_slider carousel">

                                    {/*<Slider {...settings}>*/}
                                    {/*{this.props.stories.payload !== undefined ? this.props.stories.payload.map(item => this.renderStory(item)) : null}*/}
                                    {/*</Slider>*/}

                                    {/*{this.props.stories.payload !== undefined ? this.props.stories.payload.map(item => this.renderStory(item)) : null}*/}
                                    {/*<button onClick={this.loadMoreStoriesTest}>*/}
                                    {/*Load More*/}
                                    {/*</button>*/}

                                    {/*<OwlCarousel*/}
                                    {/*className="owl-theme"*/}
                                    {/*autoWidth={false}*/}
                                    {/*loop={true}*/}
                                    {/*margin={10}*/}
                                    {/*nav={false}*/}
                                    {/*onDragged={(e) => this.loadMoreStories(e)}*/}
                                    {/*dots={false}*/}
                                    {/*autoplay={false}*/}
                                    {/*autoplayTimeout={1000}*/}
                                    {/*autoplayHoverPause={true}*/}
                                    {/*responsiveClass={false}*/}
                                    {/*lazyLoad={true}*/}
                                    {/*responsive={{*/}
                                    {/*0: {*/}
                                    {/*items: 2,*/}
                                    {/*nav: false,*/}
                                    {/*margin: 10,*/}
                                    {/*center: true,*/}

                                    {/*},*/}
                                    {/*400: {*/}
                                    {/*items: 2,*/}
                                    {/*nav: false,*/}
                                    {/*margin: 10,*/}
                                    {/*center: true,*/}

                                    {/*},*/}
                                    {/*600: {*/}
                                    {/*items: 3,*/}
                                    {/*nav: false,*/}
                                    {/*margin: 15,*/}
                                    {/*},*/}

                                    {/*1000: {*/}
                                    {/*items: 4,*/}
                                    {/*nav: false,*/}
                                    {/*loop: false,*/}
                                    {/*margin: 15,*/}

                                    {/*},*/}

                                    {/*1200: {*/}
                                    {/*items: 5,*/}
                                    {/*nav: false,*/}
                                    {/*loop: false,*/}
                                    {/*margin: 15,*/}

                                    {/*},*/}

                                    {/*1366: {*/}
                                    {/*items: 5,*/}
                                    {/*nav: false,*/}
                                    {/*loop: false,*/}
                                    {/*margin: 15,*/}
                                    {/*},*/}

                                    {/*1920: {*/}
                                    {/*items: 6,*/}
                                    {/*nav: false,*/}
                                    {/*loop: false,*/}
                                    {/*margin: 15,*/}
                                    {/*},*/}

                                    {/*2560: {*/}
                                    {/*items: 8,*/}
                                    {/*nav: false,*/}
                                    {/*loop: false,*/}
                                    {/*margin: 15,*/}
                                    {/*}*/}
                                    {/*}}*/}
                                    {/*>*/}
                                    {/*{this.props.stories.payload !== undefined ? this.props.stories.payload.map(item => this.renderStory(item)) : null}*/}
                                    {/*</OwlCarousel>*/}
                                    <a className="button button_js slider_prev" href="#"><span
                                        className="button_icon"><i className="icon-left-open-big"></i></span></a><a
                                    className="button button_js slider_next" href="#"><span className="button_icon"><i
                                    className="icon-right-open-big"></i></span></a>
                                    <div className="slider_pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // : <h3>Loading</h3>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps storylist');
    return {
        stories: state.storyManager.stories,
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch, 'new', dispatch);
    return {
        // You can now say this.props.createBook
        getStories: filteringData => dispatch(storyAction.getStories(filteringData)),
        getCategories: profileID => dispatch(storyAction.getCategories(profileID)),
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(StoryList);

const styles = {
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        border: '0.5px solid black',
    },
    containerGridLeft: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        border: '0.5px solid black',
    },
    containerGridRight: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        border: '0.5px solid black',
    },
};