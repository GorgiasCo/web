/**
 * Created by yasser on 1/9/2018.
 */
import { combineReducers } from 'redux'
import * as storyAction from './action'

function story(state = [], action: Action) {
    console.log(action,'action');
    switch (action.type) {
        case storyAction.GET_STORY:
            console.log(action, state,'inside reducer ;)');
            return [
                ...state,
                ...action.payload.ProfileType
            ]
        case storyAction.LOADING:
            return []
        case storyAction.FILTER_STORY:
            return state
        case storyAction.AWESOME:
            console.log('default new AWESOME', action, state);
            return action.payload;
        case storyAction.AWESOME + "_SUCCESS":
            console.log('default new AWESOME _SUCCESS', action, state);
            return action.payload;
        default:
            console.log('story reducer default', action, state);
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
    loading
})

export default storyReducer