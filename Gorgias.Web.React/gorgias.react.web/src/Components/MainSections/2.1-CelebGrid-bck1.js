import React from 'react';


export default class CelebGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isLoading: true,
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);

  }

  componentWillMount(){

    /*POST method  for Profiles*/

    var url = "https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
    var that = this;

    var bodyData = {
      CountryID : null,
      Industries : [],
      ProfileTypeID : null,
      ProfileID : null,
      OrderType : 1,
      Tags : [],
      Location : null,
      PageNumber : 1,
      PageSize : 15,
      SubscriptionTypeID : 3
    }

    this.prepareProfiles(bodyData);
    /*GET method MAIN ENTITIES*/

    var urlMainEntities = "https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/MainEntities";

    fetch(urlMainEntities)
      .then(function(response) {

        return response.json();
      })
      .then(dataMainEntities => {

        console.log(dataMainEntities);
        console.log("countries loaded");
        console.log(dataMainEntities.Result.Country);
        console.log(dataMainEntities.Result.ProfileType);
        console.log("profile type to load");

        this.setState({
                        countries: dataMainEntities.Result.Country,
                        profileTypes:dataMainEntities.Result.ProfileType,
                        isLoading:false
                      });

      });

  }

  handleLoadMore() {
    console.log("im working");
    var url = "https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
    var that = this;

    var bodyData = this.state.filteringData;
    bodyData.PageNumber += 1;
    console.log(bodyData);


    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData)
    }).then(function(response) {

      return response.json();
    })
    .then(data => {
      const newResult = this.state.profiles.concat(data.Result);
      this.setState({
                      profiles:newResult,
                      isLoading:false,
                      filteringData: bodyData });

    });
  }

  handleProfileTypeFilter (profileTypeID) {
    //get filtering data from state
    var filteringData = this.state.filteringData;

    //i change new value to profile id
    filteringData.ProfileTypeID = profileTypeID > 0 ? profileTypeID : null;
    this.prepareProfiles(filteringData);
    console.log("filtering country ;) got it ?", profileTypeID, filteringData);
  }

  handleCountryFilter (countryID) {
    //get filtering data from state
    var filteringData = this.state.filteringData;

    //i change new value to country id
    filteringData.CountryID = countryID > 0 ? countryID : null;
    this.prepareProfiles(filteringData);
    console.log("filtering country ;) ICE CREAM", countryID, filteringData);
  }

  prepareProfiles(filteringData){
    var url = "https://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
    var that = this;

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filteringData)
    }).then(function(response) {

      return response.json();
    })
    .then(function(data) {
      that.setState({
                      profiles: data.Result,
                      isLoading:false,
                      filteringData: filteringData
                    });

      console.log(data);

    });
  }

  renderProfile(profileData){
    return (
      <div key={profileData.ProfileID} className="post-item isotope-item clearfix post-2277 post  format-standard has-post-thumbnail  category-lifestyle category-technology tag-Malaysia author-Female">
          <div className="post-photo-wrapper scale-with-grid"><img width="800" height="800" src={profileData.ProfileImage} className="scale-with-grid wp-post-image" alt="home_journalist_blog7" />
          </div>
          <div className="post-desc-wrapper">
              <div className="post-desc">
                  <div className="post-title">
                      <h2 className="entry-title larger"><a href="content/journalist/item-11.html">{profileData.ProfileFullname}</a></h2>
                      <h2 className="entry-title larger tkFontSecondaryName" style={{marginBottom:0+"px"}}><a href="content/journalist/item-12.html">{profileData.ProfileURL}</a></h2>
                  </div>
              </div>
          </div>
      </div>
    )
  }

  renderCountry(countryData){
    return (
      <li key={countryData.CountryID} className={countryData.CountryName}>
          <a data-rel={".tag-" + countryData.CountryName} onClick={() => this.handleCountryFilter(countryData.CountryID)} >{countryData.CountryName}</a>
      </li>
    )
  }

  renderProfileType(profileTypeData){
    return (
      <li key={profileTypeData.ProfileTypeID} className={profileTypeData.ProfileTypeName}>
          <a data-rel={".author-" + profileTypeData.ProfileTypeName} onClick={() => this.handleProfileTypeFilter(profileTypeData.ProfileTypeID)}>{profileTypeData.ProfileTypeName}</a>
      </li>
    )
  }



  render (){
    return (
            !this.state.isLoading ?
            <div className="section mcb-section tkSection-paddingBottom-only bg-color-1">
                  <div className="section_wrapper clearfix">
                      <div className="items_group clearfix">
                          {/* One full width row*/}
                          <div className="column one column_blog ">
                              <div className="column_filters">
                                  {/* Filter Area*/}
                                  <div id="Filters" className="isotope-filters" data-parent="column_filters" style={{margin: 30+"px",fontSize: 16+"px", marginLeft: "auto",marginRight: "auto", marginTop: 30+"px",marginBottom: 30+"px",width:"fit-content"}}>

                                      <ul className="filters_buttons">
                                          <li className="label">
                                              Filter by
                                          </li>
                                          <li className="categories">
                                              <a className="open" href="#"><i className="icon-tag"></i>Categories<i className="icon-down-dir"></i></a>
                                          </li>
                                          <li className="tags">
                                              <a className="open" href="#"><i className="icon-docs"></i>Countries<i className="icon-down-dir"></i></a>
                                          </li>
                                          <li className="authors">
                                              <a className="open" href="#"><i className="icon-user"></i>ProfileType<i className="icon-down-dir"></i></a>
                                          </li>
                                      </ul>

                                      <div className="filters_wrapper" style={{display:"block"}}>

                                          <ul className="categories">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" >Show all</a>
                                              </li>
                                              <li className="hot-news">
                                                  <a data-rel=".category-hot-news" href="#">Hot news</a>
                                              </li>
                                              <li className="lifestyle">
                                                  <a data-rel=".category-lifestyle" href="#">Lifestyle</a>
                                              </li>
                                              <li className="news">
                                                  <a data-rel=".category-news" href="#">News</a>
                                              </li>
                                              <li className="sport">
                                                  <a data-rel=".category-sport" href="#">Sport</a>
                                              </li>
                                              <li className="technology">
                                                  <a data-rel=".category-technology" href="#">Technology</a>
                                              </li>
                                              <li className="close">
                                                  <a href="#"><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>

                                          <ul className="tags">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" onClick={() => this.handleCountryFilter(0)}>Show all</a>
                                              </li>

                                              {this.state.countries != null ? this.state.countries.map(country => this.renderCountry(country)) : null}

                                              <li className="close">
                                                  <a href="#"><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>

                                          <ul className="authors">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" >Show all</a>
                                              </li>

                                              {this.state.profileTypes != null ? this.state.profileTypes.map(profileType => this.renderProfileType(profileType)) : null}

                                              <li className="close">
                                                  <a href="#"><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>

                                      </div>
                                  </div>

                                  <div className="blog_wrapper clearfix">
                                      <div className="posts_group lm_wrapper col-5 masonry tiles isotope">

                                          {this.state.profiles != null ? this.state.profiles.map(item => this.renderProfile(item)) : null}

                                      </div>
                                      {/*One full width row*/}
                                      <div className="column one pager_wrapper pager_lm" style={{paddingTop: 7+"%"}}>
                                          <a className="pager_load_more button button_js" style={{borderRadius: 30+"px",borderWidth:1+"px"}}>

                                            <span onClick={this.handleLoadMore} className="button_label" style={{padding:11+"px "+40+"px"}}>Load more</span></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </div>
            :
            <h3>Loading</h3>
    );
  }
}
