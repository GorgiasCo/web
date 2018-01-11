/**
 * Created by yasser on 1/9/2018.
 */
import { combineReducers } from 'redux'
import * as authenticationAction from './action'

function authentication(state = [], action) {
    switch (action.type) {
        case authenticationAction.LOGIN:
            console.log(action, state,'inside header login reducer ;)');
            return action
        case authenticationAction.LOGOUT:
            return action
        case authenticationAction.LOADING:
            return action
        default:
            return state
    }
}

const authenticationReducer = combineReducers({
    authentication
})

export default authenticationReducer