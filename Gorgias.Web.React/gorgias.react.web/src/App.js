import React, {Component} from "react";
import MainPage from "./Components/Main";
import "./App.css";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import mainReducer from "./Components/Stores/index";
import {persistCombineReducers, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"; // default: localStorage if web, AsyncStorage if react-native
import {PersistGate} from "redux-persist/es/integration/react";
import thunk from "redux-thunk";
//import axiosMiddleware from "redux-axios";
import axiosMiddleware from "redux-axios-middleware";
import * as authenticationActions from './Components/Stores/authentication/action';

import { connect } from 'react-redux';

import axios from "axios";

const config = {
    key: 'root',
    storage,
    debug: true,
}

const middlewareConfig = {
    // successSuffix: "_NIMAJAN",
    // onError: function (req) {
    //     console.log(req, 'onError');
    //     return req;
    // },
    // onComplete: function (req) {
    //     console.log(req, 'onComplete');
    //     return req;
    // },
    getRequestOptions: function (req) {
        console.log(req, 'getRequestOptions');
        const token = localStorage.getItem("token");
        if (token) {
            req.payload.request.headers = {'Authorization': `Bearer ${token}`};
        }
        return req;
    },
    interceptors: {
        request: [{
            success: function ({getState, dispatch, getSourceAction}, req) {
                console.log(req, 'success request'); //contains information about request object
                return req;
                //...
            },
            error: function ({getState, dispatch, getSourceAction}, error) {
                console.log(error,'error request ;)');
                return error;
                //...
            }
        }
        ],
        response: [
            {
                error: function ({getState, dispatch, getSourceAction}, error) {
                    console.log(error.response.status, 'response error'); //contains information about request object
                    if(error.response.status === 401){
                        dispatch(authenticationActions.logout());
                        throw "401 Unauthorized";
                    }
                    throw "Network Issue, try again";
                    //return error;
                }
            },
            {
                success: function ({getState, dispatch, getSourceAction}, success) {
                    console.log(success, 'response success'); //contains information about request object
                    if(success !== null)
                    {
                        return success.data.Result;
                    }
                    return null;
                }
            }
        ]
    }
};

const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL: 'https://gorgiasapp-v3.azurewebsites.net/api/',
    responseType: 'json'
});


const reducer = persistCombineReducers(config, mainReducer)

function configureStore() {
    // ...

    let store = createStore(reducer, applyMiddleware(thunk, axiosMiddleware(client, middlewareConfig)))
    // let store = createStore(reducer, applyMiddleware(thunk))
    let persistor = persistStore(store)

    return {persistor, store}
}

const {persistor, store} = configureStore()

class App extends Component {

    constructor(props){
        super(props);

    }

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

// Maps actions to props
// const mapDispatchToProps = (dispatch) => {
//     console.log(dispatch, 'new');
//     return {
//         // You can now say this.props.createBook
//         logout: dispatch(authenticationActions.logout()),
//     }
// };
//
// // Use connect to put them together
// export default connect(mapDispatchToProps)(App);