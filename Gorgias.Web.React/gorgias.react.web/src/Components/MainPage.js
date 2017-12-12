import React, {Component} from 'react';
import HomeContainer from './HomeContainer';
import LoginContent from './LoginContent';
import AboutContainer from './AboutContainer';
import TermsContainer from './TermsContainer';
import ContactContainer from './ContactContainer';
import DownloadAppContainer from './DownloadAppContainer';
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
                    <Route exact path="/login" component={LoginContent}/>
                    <Route exact path="/about" component={AboutContainer}/>
                    <Route exact path="/terms" component={TermsContainer}/>
                    <Route exact path="/contact" component={ContactContainer}/>
                    <Route exact path="/downloadApp" component={DownloadAppContainer}/>
                </div>
            </Router>
        )
    }
}
