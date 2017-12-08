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

export default class Footer extends React.Component {

    componentDidMount() {
        if ($('.footer-fixed #Footer, .footer-sliding #Footer').length) {
            var footerH = $('#Footer').height();
            $('#Content').css('margin-bottom', footerH + 'px');
        }
    }

    render() {
        return (
            <footer id="Footer" className="clearfix bg-color-4">
                <div className="widgets_wrapper" style={{paddingTop: '50px',}}>
                    <div className="container">
                        <div className="column one-fourth">
                            <aside className="widget tkLinks">
                                <h4 className="tkFont1" style={{fontWeight: 'bold'}}><a
                                    href="Gorgias-About.html">Site</a>
                                </h4>

                                <p className="tkFont1" style={{fontWeight: 'bold'}}>
                                  <NavLink to={"/login"} activeClassName={"activee"}><span>Login</span></NavLink>
                                </p>

                                <p className="tkFont1" style={{fontWeight: 'bold'}}><a href="#">Gorgias Wow</a></p>

                                <p className="tkFont1" style={{fontWeight: 'bold'}}>
                                    <NavLink to={"/downloadApp"} activeClassName={"activee"}><span>DownloadApp</span></NavLink>
                                </p>

                            </aside>
                        </div>

                        <div className="column one-fourth">
                            <aside className="widget tkLinks">
                                <h4 className="tkFont1" style={{fontWeight: 'bold'}}><a target="_blank" href="Gorgias-About.html#download">About</a>
                                </h4>
                                <p className="tkFont1" style={{fontWeight: 'bold'}}>
                                    <NavLink to={"/about"} activeClassName={"activee"}><span>Company</span></NavLink>
                                </p>

                                <p className="tkFont1" style={{fontWeight: 'bold'}}>
                                    <NavLink to={"/contact"} activeClassName={"activee"}><span>Contact</span></NavLink>
                                </p>

                                <p className="tkFont1" style={{fontWeight: 'bold'}}>
                                    <NavLink to={"/terms"} activeClassName={"activee"}><span>Terms</span></NavLink>
                                </p>
                            </aside>
                        </div>

                        <div className="column one-fourth">
                            <aside className="widget tkLinks">
                                <h4 className="tkFont1" style={{fontWeight: 'bold'}}>Address</h4>
                                <p>No.8 Jalan Kerinchi, The Vertical,
                                    <br/> Bangsar South City, 59200
                                    <br/> Malaysia
                                </p>
                            </aside>
                        </div>

                        <div className="column one-fourth">
                            <aside className="widget tkLinks">
                                <h4 className="tkFont1" style={{fontWeight: 'bold'}}>Contact with us</h4>
                                <div className="textwidget">
                                    <div style={{marginright: '15%',}}>
                                        <ul>
                                            <li style={{marginBottom: 10}}>
                                            </li>
                                            <li style={{marginbottom: 10}}>
                                                <i style={{marginright: 10}} className="icon-email"></i><a href="#">noreply@envato.com</a>
                                            </li>
                                        </ul>
                                        <p className="tkFont1" style={{fontSize: 26 + "px", lineHeight: 35 + "px"}}>
                                            <a style={{color: '#4d5258'}} href="#"><i
                                                className="icon-facebook-circled"></i></a>
                                            <a style={{color: '#4d5258',}} href="#"><i
                                                className="icon-twitter-circled"></i></a>
                                            <a style={{color: '#4d5258'}} href="#"><i
                                                className="icon-pinterest-circled"></i></a>
                                            <a style={{color: '#4d5258'}} href="#"><i
                                                className="icon-linkedin-circled"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="footer_copy">
                    <div className="container">
                        <div className="column one">
                            <a id="back_to_top" href="#Header_wrapper" className="button button_left button_js"><span
                                className="button_icon"><i className="icon-up-open-big"></i></span></a>
                            <div className="copyright">
                                &copy; 2017 Gogias &amp; Co. All Rights Reserved. <a target="_blank" rel="nofollow"
                                                                                     href="#">Gorgias</a>
                            </div>
                            <ul className="social"></ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
