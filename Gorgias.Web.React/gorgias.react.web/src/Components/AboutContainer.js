import React, { Component } from 'react';
import Header from './Header';
import ContentAbout from './ContentAbout';
import Footer from './Footer';

export default class AboutContainer extends Component {

  componentWillMount(){
    //To ensure page is begining at top ;)
    window.scrollTo(0,0);
  }


   render() {
      return (

        <div id="Wrapper">
            <Header/>
            <ContentAbout/>
            <Footer/>
        </div>
      );
   }
}
