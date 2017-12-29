import React from 'react';
import OwlCarousel from 'react-owl-carousel';

export default class TopStories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isLoading: true,
    };
  }

  componentWillMount(){
    var url = "https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Stories/Latest/10/1";
    var that = this;

    fetch(url)
      .then(function(response) {

        return response.json();
      })
      .then(function(data) {
        that.setState({ items: data.Result.Items, isLoading:false });
        console.log(that.state.items,"API for stories");
      });
  }

  renderStory(story){
    return (
      <li key={story.AlbumID} className="floatr tklist content_slider_li" style={{float:"left"}}>

        <img width="287" height="339" className="tk fit2" src={story.cdnAlbumCover} alt={story.ProfileFullname} style={{borderRadius:"9px"}}/>

        <div className="desc2" style={{
            position: "absolute",
            top:"70%",
            left: "16px",
            color:"white",
            zIndex:"1"
          }}>
          <p style={{fontSize:"12px"}}>{story.AlbumName}</p>
          {/*<p className="tkBottom-p-font">24</p>*/}
        </div>
        <div className="full-card-overlay gradient" style={{borderRadius:"9px"}}>
        {/* <div className="tk tp-caption Photography-Button rev-btn ">OPEN IN APP</div>*/}
          <div className="customButton">OPEN IN APP</div>
        </div>
      </li>

      // <li>
      //   <img src="https://gorgiascdn.azureedge.net/albums/hottest-album-1b14a562-1801-4494-a289-1b45303df32c.jpg"/>
      //
      //   <div>heyy there</div>
      //
      // </li>


    )
  }

  render (){
    return (
      !this.state.isLoading ?
      <div className="section mcb-section full-width tkSection-paddingBottom-only">
        <div className="section_wrapper mcb-section-inner">
          <div className="wrap mcb-wrap one  valign-top clearfix">
            <div className="mcb-wrap-inner">
              <div className="column mcb-column one column_column ">
                <div className="column_attr clearfix" style={{padding: 0 +" "+ 8+"%"}}>
                  <h3 className="tkFont1" style={{color:"white"}}>Top Stories</h3>
                </div>
              </div>
              <div className="column mcb-column one column_slider ">
                <div className="content_slider carousel">

                  <OwlCarousel
                      className="owl-theme"
                      autoWidth={false}
                      loop={false}
                      margin={10}
                      nav={false}
                      dots={false}
                      autoplay={false}
                      autoplayTimeout={1000}
                      autoplayHoverPause={true}
                      responsiveClass= {false}
                responsive= {{
                  0: {
                    items: 2,
                    nav: false,
                    margin:10,
                    center:true,

                  },
                  400: {
                    items: 2,
                    nav: false,
                    margin:10,
                    center:true,

                  },
                  600: {
                    items: 3,
                    nav: false,
                    margin: 15,
                  },

                  1000: {
                    items: 4,
                    nav: false,
                    loop: false,
                    margin: 15,

                  },

                  1200: {
                    items: 5,
                    nav: false,
                    loop: false,
                    margin: 15,

                  },

                  1366:{
                    items: 5,
                    nav: false,
                    loop: false,
                    margin: 15,
                  },

                  1920:{
                    items: 6,
                    nav: false,
                    loop: false,
                    margin: 15,
                  },

                  2560:{
                    items: 8,
                    nav: false,
                    loop: false,
                    margin: 15,
                  }
                }}
                  >
                      {this.state.items.map(item => this.renderStory(item))}
                  </OwlCarousel>

                  <a className="button button_js slider_prev" href="#"><span className="button_icon"><i className="icon-left-open-big"></i></span></a><a className="button button_js slider_next" href="#"><span className="button_icon"><i className="icon-right-open-big"></i></span></a>
                  <div className="slider_pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        : <h3>Loading</h3>
    );
  }
}
//
//
// <ul className="content_slider_ulio tk">
//     {this.state.items.map(item => this.renderStory(item))}
// </ul>
