/**
 * Created by yasser on 1/10/2018.
 */
/**
 * Created by yasser on 1/9/2018.
 */
/*
 * action types
 */

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const LOADING = "LOADING"

/*
 * other constants
 */

export const login = payload => ({
    type: LOGIN,
    payload,
});

export const logout = () => ({ type: LOGOUT, payload: false, });

export const loading = () => ({ type: LOADING, payload: false, });

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

export const authentication = username => async dispatch => {
    try {
        dispatch(loading());
        // const url = `https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/MainEntities`;
        // const response = await fetch(url)
        // const responseBody = await response.json();
        console.log(username, 'in authentication action');
        dispatch(login(true));
    } catch (error) {
        console.log(error, username ,'in action');
        dispatch(logout());
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