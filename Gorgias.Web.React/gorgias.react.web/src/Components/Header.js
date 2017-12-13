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
      isMainPage: true,
      typeOfNavBar: 0,
    };

  }

  shouldComponentUpdate(nextProps, nextState)
      {
        console.log(window.location, 'i am here ;)');
      return true;
      }

  componentWillReceiveProps(nextProps) {
    //console.log(this.props.location, 'i am here ;)');
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

    /*---------------------responsive menu ------------------*/
    $('.responsive-menu-toggle').click(function(e) {
      e.preventDefault();
      var el = $(this)
      var menu = $('#Top_bar #menu');
      var menuWrap = menu.closest('.menu_wrapper');
      el.toggleClass('active');
      if (el.hasClass('is-sticky') && el.hasClass('active')) {
        var top = 0;
        if (menuWrap.length) top = menuWrap.offset().top;
        $('body,html').animate({
          scrollTop: top
        }, 200);
      }
      menu.stop(true, true).slideToggle(200);
    });


    function sideSlide(){

        var mobile_init_W 	=  1240;
    		var slide 				= $( '#Side_slide' );
    		var overlay 			= $( '#body_overlay' );
    		var ss_mobile_init_W 	= mobile_init_W;
    		var pos 				= 'right';

        var constructor = function(){
  				if( ! slide.hasClass( 'enabled' ) ){
  					$( 'nav#menu' ).detach().appendTo( '#Side_slide .menu_wrapper' );
  					slide.addClass( 'enabled' );
  				}
  			};

        var destructor = function(){
  				if( slide.hasClass( 'enabled' ) ){
  					close();
  					$( 'nav#menu' ).detach().prependTo( '#Top_bar .menu_wrapper' );
  					slide.removeClass( 'enabled' );
  				}
  			};

        // reload ----------

  			var reload = function(){

  				if( ( $(window).width() < ss_mobile_init_W ) ){
  					constructor();
  				} else {
  					destructor();
  				}
  			};

        // init ----------

  			var init = function(){
  				if( slide.hasClass( 'left' ) ){
  					pos = 'left';
  				}

  				if( $( 'body' ).hasClass( 'header-simple' ) ){
  					ss_mobile_init_W = 9999;
  				}

  				reload();
  			};

        // reset to default ----------

  			var reset = function( time ){

  				$( '.lang-active.active', slide ).removeClass('active').children('i').attr('class','icon-down-open-mini');
  				$( '.lang-wrapper', slide ).fadeOut(0);

  				$( '.icon.search.active', slide ).removeClass('active');
  				$( '.search-wrapper', slide ).fadeOut(0);

  				$( '.menu_wrapper, .social', slide ).fadeIn( time );

  			};

        // menu button ----------

  			var button = function(){

  				// show
  				if( pos == 'left' ){
  					slide.animate({ 'left':0 },300);
  					$('body').animate({ 'right':-125 },300);
  				} else {
  					slide.animate({ 'right':0 },300);
  					$('body').animate({ 'left':-125 },300);
  				}

  				overlay.fadeIn(300);

  				// reset
  				reset(0);

  			};

        // close ----------
        var close = function(){

  				if( pos == 'left' ){
  					slide.animate({ 'left':-250 },300);
  					$('body').animate({ 'right':0 },300);
  				} else {
  					slide.animate({ 'right':-250 },300);
  					$('body').animate({ 'left':0 },300);
  				}

  				overlay.fadeOut(300);
  			};

        // search ----------

  			$( '.icon.search', slide ).on( 'click', function(e){

  				e.preventDefault();

  				var el = $(this);

  				if( el.hasClass('active') ){

  					$( '.search-wrapper', slide ).fadeOut(0);
  					$( '.menu_wrapper, .social', slide ).fadeIn(300);

  				} else {

  					$( '.search-wrapper', slide ).fadeIn(300);
  					$( '.menu_wrapper, .social', slide ).fadeOut(0);

  					$( '.lang-active.active', slide ).removeClass('active').children('i').attr('class','icon-down-open-mini');
  					$( '.lang-wrapper', slide ).fadeOut(0);

  				}

  				el.toggleClass('active');
  			});

        // search form submit ----------

  			$( 'a.submit', slide ).on( 'click', function(e){
  				e.preventDefault();
  				$('#side-form').submit();
  			});

        $( '.lang-active', slide ).on( 'click', function(e){
  				e.preventDefault();

  				var el = $(this);

  				if( el.hasClass('active') ){

  					$( '.lang-wrapper', slide ).fadeOut(0);
  					$( '.menu_wrapper, .social', slide ).fadeIn(300);
  					el.children('i').attr('class','icon-down-open-mini');

  				} else {

  					$( '.lang-wrapper', slide ).fadeIn(300);
  					$( '.menu_wrapper, .social', slide ).fadeOut(0);
  					el.children('i').attr('class','icon-up-open-mini');

  					$( '.icon.search.active', slide ).removeClass('active');
  					$( '.search-wrapper', slide ).fadeOut(0);

  				}

  				el.toggleClass('active');
  			});

        // init, click, debouncedresize ----------

  			// init

  			init();

  			// click | menu button

  			$( '.responsive-menu-toggle' ).off( 'click' );

  			$( '.responsive-menu-toggle' ).on( 'click', function(e){
  				e.preventDefault();
  				button();
  			});

        // click | close

  			overlay.on( 'click', function(e){
  				close();
  			});

  			$( '.close', slide ).on( 'click', function(e){
  				e.preventDefault();
  				close();
  			});

        // click | below search or languages menu

  			$( slide ).on( 'click', function(e){
  				if( $( e.target ).is( slide ) ){
  					reset(300);
  				}
  			});

        $( window ).on( 'debouncedresize', reload );

    }

    if( $( 'body' ).hasClass( 'mobile-side-slide' ) ){
			sideSlide();
		}




  }

  componentWillMount(){
    console.log(window.location.pathname, 'i am here ;)', 'componentWillMount');
      if(window.location.pathname != "/"){
        // this.setState({isMainPage: false});
        switch(window.location.pathname){
          case "/about":
            this.setState({typeOfNavBar: 1, isMainPage: false})
            break;
          case "/contact":
            this.setState({typeOfNavBar: 2, isMainPage: false})
            break;
          default:
          this.setState({isMainPage: false})
          break;
        }
      }
  }

  prepareNavBar(){
    switch(this.state.typeOfNavBar) {
          case 1:
              return(
                <ul id="menu-main-menu" className="menu tk">
                  <li>
                    <a href="#About" className="close"><span>About Us</span></a>
                  </li>
                  <li>
                    <a href="#download" className="close"><span>Download App</span></a>
                  </li>
                </ul>
              )
              break;

          case 2:
              return(
                <ul id="menu-main-menu" className="menu tk">
                    <li>
                      <a href="#Location" className="close" ><span>Locations</span></a>
                    </li>
                    <li>
                      <a href="#download" className="close" ><span>Download App</span></a>
                    </li>
                </ul>
              );
              break;

          default:
              return(
                <ul id="menu-main-menu" className="menu tk">
                  <li></li>
                </ul>
              )}
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

                                    {this.state.isMainPage ?
                                      <ul id="menu-main-menu" className="menu tk">
                                          <li>
                                            <a href="#Featured" className="close" ><span>Featured</span></a>
                                          </li>

                                          <li>
                                            <a href="#Stories" className="close"><span>Storiess</span></a>
                                          </li>
                                          <li>
                                            <a href="#OurGorgias" className="close"><span>OurGorgias</span></a>
                                          </li>
                                          <li>
                                            <a href="#Discover" className="close"><span>Discover</span></a>
                                          </li>
                                          <li>
                                            <a href="#download" className="close"><span>Download</span></a>
                                          </li>
                                      </ul>
                                      :this.prepareNavBar()}
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
