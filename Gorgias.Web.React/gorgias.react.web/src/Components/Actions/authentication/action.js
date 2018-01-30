/**
 * Created by yasser on 1/10/2018.
 */
/**
 * Created by yasser on 1/9/2018.
 */
/*
 * action types
 */
import axios from 'axios'
import * as profileAction from '../profile/action';

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

export const profileSettings = () => ({
    payload: login.payload
})

export const logout = () => ({ type: LOGOUT, payload: {isAuthenticated: false}, });

export const loading = () => ({ type: LOADING, payload: {isAuthenticated: false}, });

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

export const authentication = credential => async dispatch => {
    try {
        dispatch(loading());
        // const url = `https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/MainEntities`;
        // const response = await fetch(url)
        // const responseBody = await response.json();
        let languageCode = 'en';
        let data = "grant_type=password&username=" + credential.username + "&password=" + credential.password;

        axios({
            method: 'post',
            url: 'https://gorgiasapp-v3.azurewebsites.net/' + 'token',
            data: data,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Accept-Language': languageCode
            }
        })
            .then(response => {
                let loginData = {data: response.data, isAuthenticated: true};
                console.log(response.data,'after login data');
                localStorage.setItem('token', response.data.access_token);
                dispatch(login(loginData));
                dispatch(profileAction.setProfileAccountSetting(response.data));
            })
            .catch(error => {
                if (error.status === 200) {
                    let loginData = {data: error.data, isAuthenticated: true};
                    localStorage.setItem('token', error.data.access_token);
                    dispatch(login(loginData));
                    dispatch(profileAction.setProfileAccountSetting(error.data));
                } else {
                    console.log(error, 'loginError');
                    dispatch(logout());
                }
            });
        console.log(credential.username, 'in authentication action');
    } catch (error) {
        console.log(error, credential.username ,'logout in action');
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