import React from 'react';
import Header from './Page/Header';
import ContentContact from './ContentContact';
import Footer from './Page/Footer';

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
