import React from 'react';
import Header from '../PageElements/Header';
import ContentContact from './ContentContact';
import Footer from '../PageElements/Footer';

export default class ContactContainer extends React.Component {

    componentWillMount() {
        //To ensure page is begining at top ;)
        window.scrollTo(0, 0);
    }

    render() {
        return (

            <div id="Wrapper">
                <Header/>
                <ContentContact/>
                <Footer/>
            </div>
        );
    }
}
