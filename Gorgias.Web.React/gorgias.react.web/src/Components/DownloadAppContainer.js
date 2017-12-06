import React from 'react';
import AppProfile from './AppProfileSections/AppProfile';
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link,
    NavLink
    // etc.
} from 'react-router-dom';


export default class DownloadAppContainer extends React.Component {
    render() {
        return (

            <div>
                <div className="goBack">
                    <i className="icon-left-thin"></i>
                    <NavLink exact to={"/"}><span>Back to Gorgias</span></NavLink>
                </div>

                <AppProfile/>

                <footer id="Footer" className="clearfix"
                        style={{backgroundColor: "rgba(0,0,0,0.5)", position: "fixed"}}>
                    <div className="footer_copy">
                        <div className="container">
                            <div className="column one" style={{marginBottom: 10 + "px", paddingTop: 20 + "px"}}>
                                <div className="copyright">
                                    &copy; 2017 Gogias &amp; Co. All Rights Reserved. <a target="_blank" rel="nofollow"
                                                                                         href="#">Gorgias</a>
                                </div>
                                <ul className="social"></ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>


        );
    }
}
