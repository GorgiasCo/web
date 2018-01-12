/**
 * Created by yasser on 1/10/2018.
 */
/**
 * Created by yasser on 1/9/2018.
 */
/*
 * action types
 */

import * as authenticationAction from '../authentication/action';

export const GET_STORY = 'GET_STORY'
export const FILTER_STORY = 'FILTER_STORY'
export const LOADING = "LOADING"

/*
 * other constants
 */

export const addRepos = payload => ({
    type: GET_STORY,
    payload,
});

export const clearRepos = () => ({ type: FILTER_STORY });

export const loadingRepos = () => ({ type: LOADING });

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

export const getStories = username => async dispatch => {
    try {
        dispatch(loadingRepos());
        const url = `https://gorgiasapp-v3.azurewebsites.net/api/Addresses/10/1`;
        const response = await fetch(url);
        console.log(response, 'story', 'in action');
        if(response.status !== 401){
            const responseBody = await response.json();
            console.log(responseBody, username, 'in action');
            dispatch(addRepos(responseBody.Result));
        } else {
            throw "unAuthorized User ;)";
        }
        console.log(username, 'in action');
    } catch (error) {
        console.log(error, username ,'in action error ;)');
        dispatch(authenticationAction.logout());
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