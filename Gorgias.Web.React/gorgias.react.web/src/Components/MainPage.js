import React, {Component} from 'react';
import HomeContainer from './HomeContainer';
import LoginContent from './LoginSections/AccountContent';
import AboutContainer from './AboutContainer';
import TermsContainer from './TermsContainer';
import ContactContainer from './ContactContainer';
import DownloadAppContainer from './DownloadAppContainer';
import AppstoreContainer from './AppstoreContainer';

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
                    <Route exact path="/" component={HomeContainer}/>
                    <Route exact path="/login" component={()=> <LoginContent/>}/>
                    <Route path="/account/reset/:id" component={()=> <LoginContent accountType="reset"/>}/>
                    <Route exact path="/account/forget" component={()=> <LoginContent accountType="forget"/>}/>
                    <Route exact path="/about" component={AboutContainer}/>
                    <Route exact path="/terms" component={TermsContainer}/>
                    <Route exact path="/contact" component={ContactContainer}/>
                    <Route exact path="/app/:id" component={DownloadAppContainer}/>
                    <Route exact path="/app/:id/:pid" component={DownloadAppContainer}/>
                    <Route exact path="/store" component={AppstoreContainer}/>
                </div>
            </Router>
        )
    }
}
