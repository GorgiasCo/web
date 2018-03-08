/**
 * Created by yasser on 12/15/2017.
 */
import React from 'react';
import $ from 'jquery';
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link,
    NavLink
    // etc.
} from 'react-router-dom';

export default class MiniFooter extends React.Component {

    componentDidMount() {

    }

    // backgroundColor: "rgba(0,0,0,0.5)"

    render() {
        return (
            <footer id="Footer" className="clearfix"
                    style={{position: "fixed"}}>
                <div className="footer_copy">
                    <div className="container">
                        <div className="column one" style={{marginBottom: 10 + "px", paddingTop: 20 + "px"}}>
                            <div className="copyright">
                                &copy; 2017 Gogias &amp; Co. All Rights Reserved. <a rel="nofollow"
                                                                                     href="/">Gorgias</a>
                            </div>
                            <ul className="social"></ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
