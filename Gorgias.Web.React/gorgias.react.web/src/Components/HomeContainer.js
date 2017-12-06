import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class HomeContainer extends Component {

    componentWillMount() {
        //To ensure page is begining at top ;)
        window.scrollTo(0, 0);
    }

    render() {
        return (

            <div id="Wrapper">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
