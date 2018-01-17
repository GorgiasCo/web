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
import axiosMiddleware from 'redux-axios';

const config = {
    key: 'root',
    storage,
    debug: true,
}

const backend = {
    axios: {
        baseURL: 'https://gorgiasapp-v3.azurewebsites.net/api/',
        responseType: 'json',
    },
    //opt
    options: {
        interceptors: {
            request: [
                (getState, config) => {
                    // if (getState().authentication.data.access_token) {
                    //
                    // }

                    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');

                    return config
                }
            ],
            response: [
                (getState, response) => {
                    return response
                }
            ]
        }
    }
};


const clients = {
    default: backend,
};

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

function configureStore() {
    // ...

    let store = createStore(reducer, applyMiddleware(thunk, axiosMiddleware(clients)))
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
