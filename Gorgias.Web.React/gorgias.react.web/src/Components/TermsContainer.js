import React from 'react';
import Header from './Page/Header';
import ContentTerms from './ContentTerms';
import Footer from './Page/Footer';

export default class TermsContainer extends React.Component {

  componentWillMount(){
    //To ensure page is begining at top ;)
    window.scrollTo(0,0);
  }

   render() {
      return (

        <div id="Wrapper">
            <Header/>
            <ContentTerms/>
            <Footer/>
        </div>
      );
   }
}
