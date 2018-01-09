import React from 'react';


import MiniFooter from './MiniFooter';
import {
    NavLink
} from 'react-router-dom'

export default class AdminHeader extends React.Component {


    render() {
        return (
            <div>
                <div id="Header_creative">
                    <a href="#" className="creative-menu-toggle"><i className="icon-menu"></i></a>

                    <ul className="social creative-social"></ul>
                    <div className="creative-wrapper">

                        <div id="Top_bar" style={{margin: "0%"}}>
                            <div className="one">
                                <div className="top_bar_left">

                                    <div className="logo">
                                        <NavLink exact to={"/"} activeStyle={{textDecoration: "none"}}>
                                            <h3 style={{color: "white", marginTop: 10 + "px"}}>GorgiasT</h3>
                                        </NavLink>
                                    </div>

                                    <div className="menu_wrapper" style={{margin: "30p% 0"}}>
                                        <nav id="menu">
                                            <ul id="menu-main-menu" className="menu">
                                                <li className="current_page_item">
                                                    <a href="index-story.html"><span>Home</span></a>
                                                </li>
                                                <li>
                                                    <a href="content/story/photos.html"><span>Photos</span></a>
                                                </li>
                                                <li>
                                                    <a href="content/story/about-me.html"><span>About me</span></a>
                                                </li>
                                                <li>
                                                    <a href="content/story/what-i-do.html"><span>What I do</span></a>
                                                </li>
                                                <li>
                                                    <a href="content/story/contact.html"><span>Contact</span></a>
                                                </li>
                                            </ul>
                                        </nav>
                                        <a className="responsive-menu-toggle" href="#"><i className="icon-menu"></i></a>
                                    </div>

                                    <div className="search_wrapper">
                                        <form method="get" action="#">
                                            <i className="icon_search icon-search"></i><a href="#"
                                                                                          className="icon_close"><i
                                            className="icon-cancel"></i></a>
                                            <input type="text" className="field" name="s"
                                                   placeholder="Enter your search"/>
                                            <input type="submit" className="submit flv_disp_none" value=""/>
                                        </form>
                                    </div>
                                </div>

                                <div className="banner_wrapper"></div>
                            </div>
                        </div>

                        <div id="Action_bar">

                            <ul className="social"></ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
