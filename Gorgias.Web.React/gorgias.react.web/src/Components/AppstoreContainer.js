import React, { Component } from 'react';
import Header from './Page/Header';
import ContentAppstore from './ContentAppstore';
import Footer from './Page/Footer';

export default class AppstoreContainer extends Component {



    componentWillMount() {
        //To ensure page is begining at top ;)
        window.scrollTo(0, 0);
    }

    onChangeLinkName(newName){
      this.setState({
        homeLink:newName,
        MainNav:false
      });
    }

    render() {
        return (
            <div id="Wrapper">
                <Header/>
                <ContentAppstore/>
                <Footer/>
            </div>
        );
    }
}
