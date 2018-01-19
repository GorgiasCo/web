import React, {Component} from "react";
import MainPage from "./Components/Main";
import "./App.css";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import mainReducer from "./Components/Actions/index";
import {persistCombineReducers, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"; // default: localStorage if web, AsyncStorage if react-native
import {PersistGate} from "redux-persist/es/integration/react";
import thunk from "redux-thunk";
//import axiosMiddleware from "redux-axios";
import axiosMiddleware from "redux-axios-middleware";

import axios from "axios";

const config = {
    key: 'root',
    storage,
    debug: true,
}

const inter = {
    interceptors: {
        request: [{
            success: function ({getState, dispatch, getSourceAction}) {
                console.log(getSourceAction, 'success request'); //contains information about request object
                //...
            },
            error: function ({getState, dispatch, getSourceAction}) {
                console.log(getSourceAction, 'error request'); //contains information about request object
                //...
            }
        }
        ],
        response: [{
            success: function ({getState, dispatch, getSourceAction}) {
                console.log(getSourceAction, 'success response'); //contains information about request object
                //...
            },
            error: function ({getState, dispatch, getSourceAction}) {
                console.log(getSourceAction, 'error response'); //contains information about request object
                //...
            }
        }
        ]
    }
}

var instance = axios.create({
    baseURL: 'https://gorgiasapp-v3.azurewebsites.net/api/',
    responseType: 'json',
    // headers: {
    //     'Authorization': 'Bearer ' + localStorage.getItem('token'),
    // }
});

// (function() {
//     let token = localStorage.getItem('token');
//
//     if (token) {
//         axios.defaults.headers.common['Authorization'] = token;
//         axios.defaults.headers.common['Authorization'] = token;
//     } else {
//         axios.defaults.headers.common['Authorization'] = null;
//         console.log('tokkkkken', token);
//
//         /*if setting null does not remove `Authorization` header then try
//          delete axios.defaults.headers.common['Authorization'];
//          */
//     }
// })();

// axios.interceptors.request.use((config)=>{
//     const token = localStorage.getItem("token");
//     if(token){
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// })

const backend = {
    axios: {
        baseURL: 'https://gorgiasapp-v3.azurewebsites.net/api/',
        responseType: 'json',
    },
    options: {
        successSuffix: "NIMAJAN",
    }
    // axios: instance,
    // options: { getRequestOptions:[(response) => {
    //     console.log(response, 'interceptorResponse *****************************************************************************************');
    //
    //     return response
    // }],
    // }
    //opt
    // interceptors: {
    //     request: [
    //         function ({getState, dispatch, getSourceAction}, req) {
    //             console.log(req, 'wow'); //contains information about request object
    //             //...
    //         },
    //         function ({getState, dispatch, getSourceAction}, req) {
    //             //...
    //         }
    //     ],
    //     response: [
    //         function ({getState, dispatch, getSourceAction}, req) {
    //             console.log(req, 'wow'); //contains information about request object
    //             // ...
    //         },
    //         function ({getState, dispatch, getSourceAction}, req) {
    //             //...
    //         }
    //     ]
    // },
    // options: {
    //     // not required, but use-full configuration option
    //     getRequestOptions: [
    //             (config) => {
    //                 // if (getState().authentication.data.access_token) {
    //                 //
    //                 // }
    //                 //config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    //                 console.log('default axios story config ;) request', config);
    //                 return config
    //             }
    //         ],
    //     returnRejectedPromiseOnError: true,
    //     // interceptors: {
    //     //     request: [{
    //     //         success: function ({getState, dispatch, getAction}, req) {
    //     //             console.log(req, ';)'); //contains information about request object
    //     //             //...
    //     //         },
    //     //         error: function ({getState, dispatch, getAction}, error) {
    //     //             //...
    //     //         }
    //     //     }
    //     //     ],
    //     //     response: [{
    //     //         success: function ({getState, dispatch, getAction}, req) {
    //     //             console.log(req, ';)'); //contains information about request object
    //     //             //...
    //     //         },
    //     //         error: function ({getState, dispatch, getAction}, error) {
    //     //             //...
    //     //         }
    //     //     }
    //     //     ]
    //     // }
    //     // request: [
    //     //     (getState, config) => {
    //     //         // if (getState().authentication.data.access_token) {
    //     //         //
    //     //         // }
    //     //         config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    //     //         console.log('default axios story config ;) request', config);
    //     //         return config
    //     //     }
    //     // ],
    //     // response: [
    //     //     (getState, response) => {
    //     //         console.log('default axios story config ;)',response);
    //     //
    //     //         return response
    //     //     }
    //     // ]
    // }
};

export function loadCategories() {

    console.log('response *****************************************************************************************');
    // return {
    //     types: ['LOAD','AWESOME','OH_NO'],
    //     payload: {
    //         request:{
    //             url:'/categories'
    //         }
    //     }
    // }
}

const middlewareConfig = {
    // successSuffix: "_NIMAJAN",
    onError: function (req) {
        console.log(req, 'onError');
    },
    onComplete: function (req) {
        console.log(req, 'onComplete');
    },
    getRequestOptions: function (req) {
        console.log(req, 'getRequestOptions');
        const token = localStorage.getItem("token");
        if (token) {
            req.payload.request.headers = {'Authorization': `Bearer ${token}`};
        }
        return req;
    },
    interceptors: {
        response: [{
            error: function ({getState, dispatch, getSourceAction}, error) {
                console.log(error, 'response error'); //contains information about request object
            }
        }
        ]
    }
    // onComplete: [ loadCategories ]
    // ,
    // onError: [() => {
    //     console.log('interceptorResponse *****************************************************************************************');
    // }],
    // onSuccess: [
    //     () => {
    //         console.log('interceptorResponse *****************************************************************************************');
    //     }
    // ]
};

const clients = {
    default: backend,
};

const axiosMiddlewareOptions = {
    interceptors: {
        request: interceptorResponse
        ,
        response: [
            (getState, response) => {
                console.log('default axios story config ;)', response);

                return response
            }
        ]
    }
}

function interceptorRequest(response) {
    console.log(response, 'interceptorResponse *****************************************************************************************');
}

function interceptorResponse({dispatch, getState, getAction}, response) {
    console.log(dispatch, 'interceptorResponse');
    console.log(response, 'interceptorResponse');
}

// const apiClient = axios.create({
//     baseURL: 'https://gorgiasapp-v3.azurewebsites.net/api/',
//     responseType: 'json'
// });

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL: 'https://gorgiasapp-v3.azurewebsites.net/api/',
    responseType: 'json'
});


const reducer = persistCombineReducers(config, mainReducer)

// const fetch = (url, params) => ({
//     type: 'FETCH',
//     url,
//     params,
// });
//
// const fetchMiddleware = fetchImplementation => store => next => action => {
//     if (action.type === 'FETCH') {
//         const {url, params} = action;
//         const token = store.getState().token;
//         _.set(params, 'headers.token', token);
//         return fetchImplementation(url, params);
//     } else {
//         return next(action);
//     }
// };

// axios.interceptors.response.use(function (response) {
//     // Do something with response data
//     console.log(response,'response axios.interceptors');
//     return response;
// }, function (error) {
//     // Do something with response error
//     console.log(error,'error axios.interceptors');
//     return Promise.reject(error);
// });

function configureStore() {
    // ...

    let store = createStore(reducer, applyMiddleware(thunk, axiosMiddleware(client, middlewareConfig)))
    let persistor = persistStore(store)

    return {persistor, store}
}

//let store = createStore(todoApp)
const {persistor, store} = configureStore()

class App extends Component {


    componentDidMount() {
        this.prepareApp(2);
    }

    prepareApp = (type) => {
        console.log(type, 'prepareApp');
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    // loading={<Loading />}
                    // onBeforeLift={onBeforeLift}
                    persistor={persistor}>
                    <MainPage />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
