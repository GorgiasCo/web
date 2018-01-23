/**
 * Created by yasser on 1/23/2018.
 */
import {combineReducers} from "redux";
import * as profileAction from "./action";

function profile(state = [], action) {
    //console.log(action, 'profile action');
    switch (action.type) {
        case profileAction.PROFILE_ACCOUNT_SETTING:
            return null;//action.payload;
        case profileAction.PROFILE_ACCOUNT_SETTING + "_SUCCESS":
            return {profileSetting: action.payload, ...state};
        case profileAction.PROFILE_ACCOUNT_SETTING + "_FAIL":
            return {profileSetting: null, ...state};

        case profileAction.PROFILE_ACCOUNTS:
            return null;//action;
        case profileAction.PROFILE_ACCOUNTS + "_SUCCESS":
            return {profileAccounts: action.payload, ...state};
        case profileAction.PROFILE_ACCOUNTS + "_FAIL":
            return {profileAccounts: null, ...state};

        case profileAction.PROFILE_SETTING_HOTS_POT:
            return null;//action;
        case profileAction.PROFILE_SETTING_HOTS_POT + "_SUCCESS":
            return {profileSettingHotSpot: action.payload, ...state};
        case profileAction.PROFILE_SETTING_HOTS_POT + "_FAIL":
            return {profileSettingHotSpot: null, ...state};
        default:
            //console.log('profile reducer default', action, state);
            return action
    }
}

function profileSettingHotSpot(state = [], action) {
    // console.log(action, 'profile action');
    switch (action.type) {
        case profileAction.PROFILE_SETTING_HOTS_POT:
            return null;//action;
        case profileAction.PROFILE_SETTING_HOTS_POT + "_SUCCESS":
            return {payload: action.payload, ...state};
        case profileAction.PROFILE_SETTING_HOTS_POT + "_FAIL":
            return {payload: null, ...state};
        default:
            // console.log('profile reducer default', action, state);
            return state
    }
}

function profileAccounts(state = [], action) {
    // console.log(action, 'profile action');
    switch (action.type) {
        case profileAction.PROFILE_ACCOUNTS:
            return null;//action;
        case profileAction.PROFILE_ACCOUNTS + "_SUCCESS":
            return {payload: action.payload, ...state};
        case profileAction.PROFILE_ACCOUNTS + "_FAIL":
            return {payload: null, ...state};
        default:
            // console.log('profile reducer default', action, state);
            return state
    }
}

function profileAccountSetting(state = [], action) {
    // console.log(action, 'profile action');
    switch (action.type) {
        case profileAction.PROFILE_ACCOUNT_SETTING:
            return null;//action.payload;
        case profileAction.PROFILE_ACCOUNT_SETTING + "_SUCCESS":
            return {payload: action.payload, ...state};
        case profileAction.PROFILE_ACCOUNT_SETTING + "_FAIL":
            return {payload: null, ...state};
        default:
            return state
    }
}

function profileMicroApp(state = [], action) {
    // console.log(action, 'profile action');
    switch (action.type) {
        case profileAction.PROFILE_MICROAPP_FULLNAME:
            return null;//action.payload;
        case profileAction.PROFILE_MICROAPP_FULLNAME + "_SUCCESS":
            return {payload: action.payload, ...state};
        case profileAction.PROFILE_MICROAPP_FULLNAME + "_FAIL":
            return {payload: null, ...state};
        default:
            return state
    }
}

const profileReducer = combineReducers({
    profile,
    profileAccountSetting,
    profileAccounts,
    profileSettingHotSpot,
    profileMicroApp,
})

export default profileReducer