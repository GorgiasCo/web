import React, {Component} from 'react';
import logo from './logo.svg';
import MainPage from './Components/Main';
import './App.css';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import todoApp from './Components/Actions/ToDo/Reducers';
import mainReducer from './Components/Actions/index';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import { PersistGate } from 'redux-persist/es/integration/react'
import thunk from 'redux-thunk';

const config = {
    key: 'root',
    storage,
    debug: true,
}

const reducer = persistCombineReducers(config, mainReducer)

function configureStore () {
    // ...
    let store = createStore(reducer,  applyMiddleware(thunk))
    let persistor = persistStore(store)

    return { persistor, store }
}

//let store = createStore(todoApp)
const { persistor, store } = configureStore()

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
