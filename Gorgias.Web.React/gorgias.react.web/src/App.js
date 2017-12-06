import React, { Component } from 'react';
import logo from './logo.svg';
import MainPage from './Components/MainPage';
import './App.css';

class App extends Component {

    componentDidMount(){
        this.prepareApp(2);
    }

    prepareApp = (type) => {
        console.log(type, 'prepareApp');
    }

  render() {
    return (
      <MainPage />
    );
  }
}

export default App;
