import React, {Component} from 'react';
import HomeContainer from './Home/HomeContainer';
import AccountContent from './LoginSections/AccountContent';
import AboutContainer from './AboutPageSection/AboutContainer';
import TermsContainer from './TermsPageSections/TermsContainer';
import ContactContainer from './ContactPageSections/ContactContainer';
import DownloadAppContainer from './AppStoreSections/DownloadAppContainer';
import AppstoreContainer from './AppStoreSections/AppstoreContainer';
import DefaultPage from './DefaultPage';

import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link,
    browserHistory
    // etc.
} from 'react-router-dom'

export default class MainPage extends Component {

    componentWillMount() {
        this.setState({isLogin: false});
    }

    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <div>
                    <Route exact path="/" component={()=> <DefaultPage containerName="home" />}/>
                    <Route exact path="/login" component={()=> <AccountContent/>}/>
                    <Route path="/account/reset/:id" component={()=> <AccountContent accountType="reset"/>}/>
                    <Route exact path="/account/forget" component={()=> <AccountContent accountType="forget"/>}/>
                    <Route exact path="/about" component={()=> <DefaultPage containerName="about" />}/>
                    <Route exact path="/terms" component={()=> <DefaultPage containerName="terms" />}/>
                    <Route exact path="/contact" component={()=> <DefaultPage containerName="contact" />}/>
                    <Route exact path="/app/:id" component={DownloadAppContainer}/>
                    <Route exact path="/app/:id/:pid" component={DownloadAppContainer}/>
                    <Route exact path="/store" component={()=> <DefaultPage containerName="store" />}/>
                </div>
            </Router>
        )
    }
}
