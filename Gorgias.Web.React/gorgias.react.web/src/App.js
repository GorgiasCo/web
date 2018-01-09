import React, {Component} from 'react';
import logo from './logo.svg';
import MainPage from './Components/Main';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './Components/Actions/ToDo/Reducers';

let store = createStore(todoApp)

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
                <MainPage />
            </Provider>
        );
    }
}

export default App;
