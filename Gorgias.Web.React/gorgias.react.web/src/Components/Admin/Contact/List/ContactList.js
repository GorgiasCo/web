/**
 * Created by odenza on 22/02/2018.
 */
/**
 * Created by yasser on 1/24/2018.
 */
/***
 Use this component inside your ReactJS Application.
 A scrollable list with different item type
 */
import React, {Component} from "react";
import * as storyAction from "../../../Actions/story/action";
import * as profileAction from "../../../Actions/profile/action";

import {connect} from "react-redux";
import EndlessLoadingProvider from "../../../Admin/EndlessLoadingProvider";
import ContactRow from './ContactRow';

const ContactsEndless = EndlessLoadingProvider(ContactRow);

class ContactList extends React.Component {
    constructor(args) {
        super(args);


    }

    componentWillMount() {
        console.log('will nima mount');
    }


    render() {
        return (
            <div className="section mcb-section full-width tkSection-paddingBottom-only">
                <div className="section_wrapper mcb-section-inner">
                    <div className="wrap mcb-wrap one  valign-top clearfix">
                        <div className="mcb-wrap-inner">
                            <div className="column mcb-column one column_column ">
                                <div className="column_attr clearfix" style={{padding: 0 + " " + 8 + "%"}}>
                                    <h3 className="tkFont1" style={{color: "white"}}>Contacts</h3>
                                </div>
                            </div>
                            <div className="column mcb-column one column_slider ">
                                <ContactsEndless
                                    useWindow={false}
                                    getData={this.props.getStories}
                                    hasMore={this.props.storiesHasMore}
                                    filterData={this.props.filterData}
                                    data={this.props.stories}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

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