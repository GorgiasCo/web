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

import LoginContent from './LoginContent';
import HomeContainer from './HomeContainer';



export default class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      MainNav:true
    };
  }

  componentDidMount(){
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
          || window.location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1000);
              return false;
          }
      }
    });
  }




  render (){
    return (
        <div id="Header_wrapper" className="bg-parallax" data-enllax-ratio="0.3">
          <header id="Header">
              <div className="header_placeholder"></div>

              <div id="Top_bar">
                  <div className="container">
                      <div className="column one">
                          <div className="top_bar_left clearfix">
                              <div className="logo">

                                    <NavLink exact to={"/"} activeStyle={{textDecoration:"none"}}>
                                      <h3 style={{color:"white",marginTop: 10+"px"}}>Gorgias</h3>
                                    </NavLink>

                              </div>
                              <div className="menu_wrapper">
                                  <nav id="menu" className="menu-main-menu-container">

                                    {this.state.MainNav ?
                                      <ul id="menu-main-menu" className="menu tk">
                                          <li >
                                            <a href="#Featured"><span>Featured</span></a>
                                          </li>

                                          <li>
                                            <a href="#Stories"><span>Stories</span></a>
                                          </li>
                                          <li>
                                            <a href="#OurGorgias"><span>OurGorgias</span></a>
                                          </li>
                                          <li>
                                            <a href="#Discover"><span>Discover</span></a>
                                          </li>
                                          <li>
                                            <a href="#download"><span>Download</span></a>
                                          </li>
                                      </ul>
                                      :null}
                                  </nav><a className="responsive-menu-toggle" href="#"><i className="icon-menu-fine"></i></a>
                              </div>
                              <div className="secondary_menu_wrapper"></div>
                              <div className="banner_wrapper"></div>
                              <div className="search_wrapper">
                                  <form method="get" id="searchform" action="#">
                                      <i className="icon_search icon-search-fine"></i><a href="#" className="icon_close"><i className="icon-cancel-fine"></i></a>
                                      <input type="text" className="field" name="s" id="s" placeholder="Enter your search" />
                                      <input type="submit" className="submit" value="" style={{display:"none"}} />
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



          </header>

        </div>
    );
  }
}
