/**
 * Created by yasser on 1/9/2018.
 */
import {combineReducers} from "redux";
import * as storyAction from "./action";

function story(state = [], action: Action) {
    // console.log(action,'action');
    switch (action.type) {
        case storyAction.GET_STORY:
            console.log(action, state,'inside reducer GET_STORY ;)');
            return [
                ...state,
                ...action.payload
            ]
        case storyAction.LOADING:
            return []
        case storyAction.FILTER_STORY:
            return state
        case storyAction.AWESOME:
            // console.log('reducer  storyAction.AWESOME', action, state);
            return action.payload;
        case storyAction.AWESOME + "_SUCCESS":
            // console.log('reducer AWESOME_SUCCESS', action, state);
            if (action.payload !== undefined && action.payload !== null) {
                return {payload: action.payload, ...state};
            }
            return {payload: null, ...state};
        case storyAction.AWESOME + "_FAIL":
            // console.log('reducer AWESOME_FAIL', action, state);
            return {payload: null, ...state};
        default:
            // console.log('story reducer default', action, state);
            return state
    }
}

function stories(state = [], action: Action) {
    // console.log(action,'action');
    switch (action.type) {
        case storyAction.GET_STORIES:
            console.log('reducer  storyAction.AWESOME', action);
            return {...state, isLoading: true,};
        case storyAction.GET_STORIES + "_SUCCESS":
            console.log('reducer womo', action, state);
            // if(state.payload !== undefined){
            if (state.payload !== undefined) {
                if (action.payload.Page !== 1) {
                    console.log('reducer manam;)', [...state.payload, ...action.payload.Items]);
                    let newItems = state.payload;
                    newItems.Items = [...state.payload, ...action.payload.Items];
                    console.log(newItems, 'womo new', [...state.payload, ...action.payload.Items]);
                    return {...state, payload: [...state.payload, ...action.payload.Items], isLoading: false,};
                }
                // return {payload: [], isLoading: false,};
            }
            // }
            return {...state, payload: action.payload.Items, isLoading: false,};
        //return {payload: {}, isLoading: false,};
        case storyAction.GET_STORIES + "_FAIL":
            console.log('reducer AWESOME_FAIL', action, state);
            return {...state, payload: null, isLoading: false};

        default:
            // console.log('story reducer default', action, state);
            return state
    }
}

function categories(state = [], action) {
    // console.log(action,'action categories');
    switch (action.type) {
        case storyAction.GET_CATEGORIES:
            return action.payload;
        case storyAction.GET_CATEGORIES + "_SUCCESS":
            return {payload: action.payload, ...state};
        case storyAction.GET_CATEGORIES + "_FAIL":
            return {payload: null, ...state};
        default:
            return state
    }
}

function loading(state = [], action) {
    switch (action.type) {
        case storyAction.LOADING:
            return true
        default:
            return false
    }
}

const storyReducer = combineReducers({
    story,
    stories,
    categories,
    loading
})

export default storyReducer