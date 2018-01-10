/**
 * Created by yasser on 1/9/2018.
 */
import { combineReducers } from 'redux'
import * as storyAction from './action'

function story(state = [], action) {
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
    loading
})

export default storyReducer