/**
 * Created by yasser on 1/23/2018.
 */
import httpRequest from "../../Global/HTTP/httpRequest";

export const PROFILE_ACCOUNT_SETTING = 'PROFILEACCOUNTSETTING';
export const PROFILE_ACCOUNTS = 'PROFILEACCOUNTS';
export const PROFILE_SETTING_HOTS_POT = 'PROFILESETTINGHOTSPOT';
export const PROFILE_MICROAPP_FULLNAME = 'PROFILEMICROAPPFULLNAME';

export const LOADING = "LOADING";

export const getProfileAccountSetting = profileID => ({
    types: [PROFILE_ACCOUNT_SETTING, PROFILE_ACCOUNT_SETTING + "_SUCCESS", PROFILE_ACCOUNT_SETTING + "_FAIL"],
    payload: {
        request: {
            client: 'default',
            url: httpRequest.Profile_Account_Setting_Endpoint + profileID,
        }
    }
});

export const getProfileAccounts = userID => ({
    types: [PROFILE_ACCOUNTS, PROFILE_ACCOUNTS + "_SUCCESS", PROFILE_ACCOUNTS + "_FAIL"],
    payload: {
        request: {
            client: 'default',
            url: httpRequest.Profile_Management_Endpoint + userID,
        }
    }
});

export const getProfileSettingHotSpot = profileID => ({
    types: [PROFILE_SETTING_HOTS_POT, PROFILE_SETTING_HOTS_POT + "_SUCCESS", PROFILE_SETTING_HOTS_POT + "_FAIL"],
    payload: {
        request: {
            client: 'default',
            url: httpRequest.Profile_Setting_HotSpot + profileID,
        }
    }
});

export const getProfileMicroApp = profileID => ({
    types: [
        PROFILE_MICROAPP_FULLNAME,
        PROFILE_MICROAPP_FULLNAME + "_SUCCESS",
        PROFILE_MICROAPP_FULLNAME + "_FAIL"
    ],
    payload: {
        request: {
            client: 'default',
            url: httpRequest.MicroApp_ProfileFullname_Endpoint + profileID,
        }
    }
});