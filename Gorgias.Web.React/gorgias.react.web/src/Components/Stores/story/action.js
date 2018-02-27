/**
 * Created by yasser on 1/10/2018.
 */
/**
 * Created by yasser on 1/9/2018.
 */
/*
 * action types
 */

import * as authenticationAction from "../authentication/action";
// import axios from 'axios';
import {AxiosRequestConfig, AxiosResponse} from "axios";
import axios from 'axios';
import httpRequest from "../../Global/HTTP/httpRequest";


export const GET_STORY = 'GET_STORY';

export const FILTER_STORY = 'FILTER_STORY'
export const LOADING = "LOADING"
export const AWESOME = "AWESOME"

export const GET_STORIES = 'GETSTORIES';
export const GET_CATEGORIES = 'GETCATEGORIES';

export const Action =
    {
        type: AWESOME,
        payload: {
            request: AxiosRequestConfig
        }
    } | {
        type: AWESOME + '_SUCCESS',
        payload: AxiosResponse
    };

/*
 * other constants
 */

export const addRepos = payload => ({
    type: GET_STORY,
    payload,
});

export const clearRepos = () => ({type: FILTER_STORY});

export const loadingRepos = () => ({type: LOADING});

/*
 * action creators
 */

// export function getStories() {
//     return (fetch('https://www.google.com/search?q=secret+sauce').then(response => {
//         r
//
//     }));
// }
//
// export function filterDataChanged(filterData) {
//     console.log(filterData.CategoryID , 'storiesFlatlist Stories componentWillReceiveProps filterDataChanged');
//     return (dispatch) => {
//         dispatch({
//             type: types.FILTER_DATA_CHANGED,
//             filterData: filterData
//         });
//         dispatch (
//             filterData.Page>1 ? getMoreStories(filterData, filterData.Page) :
//                 getStories(filterData,filterData.Page)
//         );
//     };
// }


export const getValues = () => ({
    types: [AWESOME, AWESOME + "_SUCCESS", AWESOME + "_FAIL"],
    payload: {
        request: {
            client: 'default',
            url: 'Addresses/10/1',
            // headers: {
            //     'Authorization': 'Bearer ' + localStorage.getItem('token'),
            // }
        }
    }
});

export const getCategories = profileID => ({
    types: [
        GET_CATEGORIES,
        GET_CATEGORIES + "_SUCCESS",
        GET_CATEGORIES + "_FAIL"
    ],
    payload: {
        request: {
            client: 'default',
            url: httpRequest.Category_Endpoint + profileID,
        }
    }
});

export const getStories = filteringData => ({
    types: [
        GET_STORIES,
        GET_STORIES + "_SUCCESS",
        GET_STORIES + "_FAIL"
    ],
    payload: {
        request: {
            method: 'POST',
            client: 'default',
            url: httpRequest.Albums_Filter_Endpoint,
            data: filteringData,
        }
    }
});

export const getStoriesOLD = page => async dispatch => {
    try {
        // dispatch(loadingRepos());
        // const url = `https://gorgiasapp-v3.azurewebsites.net/api/Addresses/10/1`;
        const url = "https://gorgiasapp-v4.azurewebsites.net/api/Web/V2/Stories/Latest/10/" + page;
        axios({
            method: 'get',
            url: url,
        })
            .then(response => {
                const responseBody = response;
                console.log(responseBody, page, 'in action story success ;) NIMA');
                dispatch(addRepos(responseBody.data.Result.Items));
            })
            .catch(error => {
                console.log(error, page, 'in action story error ;)');
                // dispatch(authenticationAction.logout());
            });


        // const response = await fetch(url);
        // console.log(response, 'story', 'in action');
        // if(response.status !== 401){
        //     const responseBody = await response.json();
        //     console.log(responseBody, username, 'in action');
        //     dispatch(addRepos(responseBody.Result));
        // } else {
        //     throw "unAuthorized User ;)";
        // }
        // console.log(username, 'in action');
    } catch (error) {
        console.log(error, page, 'in action error ********* ;)');
        // dispatch(authenticationAction.logout());
    }
}

// export function getReports() {
//     return function (dispatch) {
//         return axios(
//             {
//                 method: 'get',
//                 url: 'https://gorgiasapp-v2.azurewebsites.net/api/Mobile/V2/Felts/15',
//                 headers: {
//                     'Accept-Language': httpRequest.languageCodeFeeling
//                 }
//             }
//         ).then(response => {
// //console.log(response, 'axios');
//                 dispatch(getReportsSuccess(response.data))
//             }
//         ).catch(error => {
// //console.log(error, 'axios');
// //cbError(error.data);
//             }
//         )
//     };
// }