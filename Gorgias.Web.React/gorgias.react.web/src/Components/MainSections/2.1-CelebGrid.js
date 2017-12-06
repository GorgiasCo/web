import React from 'react';


export default class CelebGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      isLoading: true,
      bgColor:"red",
      showLoadMoreBtn:true,
      color_black:true 
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
    console.log("Initial bgColor is ",this.state.bgColor);
  }

  componentWillMount(){

    /*POST method  for Profiles*/

    var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
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

    var urlMainEntities = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/MainEntities";

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
        console.log(dataMainEntities.Result.Industry);
        console.log("industries loaded")

        this.setState({
                        countries: dataMainEntities.Result.Country,
                        profileTypes:dataMainEntities.Result.ProfileType,
                        isLoading:false,
                        industries:dataMainEntities.Result.Industry
                      });

      });

  }

  prepareProfiles(filteringData){
    var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
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
      console.log("above from POST!")
      console.log(data.Result, 'prepareProfiles');

    });
  }

  handleLoadMore() {
    console.log("im working");
    var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
    var that = this;

    var bodyData = this.state.filteringData;

    bodyData.PageNumber += 1 ;
    // bodyData.PageNumber += 1;
    console.log(bodyData,"body data");

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
      var newResult = this.state.profiles.concat(data.Result);

      console.log(this.state.profiles, '1');
      console.log(data.Result, '2');
      console.log(newResult, '3');
      console.log(newResult.length, 'array length');

      // var arrayLength=0;
      // arrayLength += newResult.length+15 ;
      // console.log(arrayLength,'this my array counter');

      var arrayModulus = newResult.length % bodyData.PageNumber;

      console.log(newResult.length/100, 'length divide by 100');
      console.log(arrayModulus, 'modulus');

      // var arrayCheck = arrayCompare > 1 ? false : true
      var arrayCheck = newResult.length/100 < arrayModulus ? false : true
      // newResult.length == showLoadMoreBtn1 > 45 ? "false" : "true";

      this.setState({
                      profiles:newResult,
                      isLoading:false,
                      filteringData: bodyData,
                      showLoadMoreBtn:arrayCheck
                    });

     console.log(this.state.profiles, '4');

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
    this.setState({bgColor:"blue"})
    console.log(this.state.bgColor, "this is the new bgColor!");
  }

  handleIndustryFilter(industryID){

    var filteringData = this.state.filteringData;

    filteringData.IndustryID = industryID > 0 ? industryID :null;
    this.prepareProfiles(filteringData);
    console.log("filtering insdustries data", industryID, filteringData);
  }

  renderProfile(profileData){
    return (
      <div key={profileData.ProfileID} className="post-item isotope-item clearfix post-2277 post  format-standard has-post-thumbnail  category-lifestyle category-technology tag-Malaysia author-Female">
          <div className="post-photo-wrapper scale-with-grid">
            <img width="800" height="800" src={profileData.ProfileImage} className="scale-with-grid wp-post-image fixed-grid" alt="home_journalist_blog7" />
          </div>
          <div className="post-desc-wrapper">
              <div className="post-desc">
                  <div className="post-title">
                      <h2 className="entry-title larger" style={{paddingBottom:0}}><a>{profileData.ProfileFullname}</a></h2>
                      <h2 className="entry-title larger tkFontSecondaryName" style={{marginBottom:0+"px"}}><a>{profileData.ProfileURL}</a></h2>
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

  renderIndustry(industriesData){
    return (
      <li key={industriesData.IndustryID} className={industriesData.IndustryName}>
          <a data-rel={".industries-" + industriesData.IndustryName} onClick={()=> this.handleIndustryFilter(industriesData.IndustryID)} >{industriesData.IndustryName}</a>
      </li>
    )
  }

//for filtering buttons tabs
toggleCategories(){
  this.setState({showCategoriesTag:!this.state.showCategoriesTag});
}

toggleCountries(){

  let showCountriesTag=true
  let activate = true
  let bgColorActive = activate ? "purple" : "white"

  this.setState({
                    showCountriesTag:!this.state.showCountriesTag,
                    activate:!this.state.activate,
                    bgColor:bgColorActive,
                    color_black:!this.state.color
                });
  console.log("The current color is",bgColorActive );
  console.log("The tag state is",showCountriesTag );
}

toggleProfileTypes(){
  this.setState({showProfileTypesTag:!this.state.showProfileTypesTag});
}

toggleIndustries(){
  this.setState({showIndustriesTag:!this.state.showIndustriesTag});
}

  render (){
    console.log(this.state.profiles, 'render');
    return (
            !this.state.isLoading ?
            <div className="section mcb-section tkSection-paddingBottom-only bg-color-1">
                  <div className="section_wrapper clearfix">
                      <div className="items_group clearfix">
                          <div className="column one column_blog ">
                              <div className="column_filters">
                                  {/* Filter Area*/}
                                  <div id="Filters" className="isotope-filters" data-parent="column_filters" style={{margin: 30+"px",fontSize: 16+"px", marginLeft: "auto",marginRight: "auto", marginTop: 30+"px",marginBottom: 30+"px",width:"fit-content"}}>

                                      {/*Grid filter Buttons*/}
                                      <ul className="filters_buttons">
                                          <li className="label">
                                              Filter by
                                          </li>

                                          <li className="categories" onClick={this.toggleCategories.bind(this)}>
                                              <a className="open"><i className="icon-tag"></i>Categories<i className="icon-down-dir"></i></a>
                                          </li>
                                          <li className="tags" onClick={this.toggleCountries.bind(this)} style={{backgroundColor:this.state.bgColor}}>
                                              <a className="open"><i className="icon-docs"></i>Countries<i className="icon-down-dir"></i></a>
                                          </li>
                                          <li className="authors" onClick={this.toggleProfileTypes.bind(this)}>
                                              <a className="open"><i className="icon-user"></i>ProfileType<i className="icon-down-dir"></i></a>
                                          </li>
                                          <li className="industries" onClick={this.toggleIndustries.bind(this)}>
                                              <a className="open"><i className="icon-tag"></i>Industries<i className="icon-down-dir"></i></a>
                                          </li>
                                      </ul>

                                      <div className="filters_wrapper" style={{display:"block"}}>

                                          {
                                            this.state.showCategoriesTag ?
                                          <ul className="categories">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*">Show all</a>
                                              </li>
                                              <li className="hot-news">
                                                  <a data-rel=".category-hot-news">Hot news</a>
                                              </li>
                                              <li className="lifestyle">
                                                  <a data-rel=".category-lifestyle">Lifestyle</a>
                                              </li>
                                              <li className="news">
                                                  <a data-rel=".category-news">News</a>
                                              </li>
                                              <li className="sport">
                                                  <a data-rel=".category-sport">Sport</a>
                                              </li>
                                              <li className="technology">
                                                  <a data-rel=".category-technology">Technology</a>
                                              </li>
                                              <li className="close" onClick={this.toggleCategories.bind(this)}>
                                                  <a><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>
                                           : null
                                          }

                                          {
                                            this.state.showCountriesTag ?
                                            <ul className="tags">
                                                <li className="reset current-cat">
                                                    <a className="all" data-rel="*" onClick={() => this.handleCountryFilter(0)}>Show all</a>
                                                </li>

                                                {this.state.countries != null ? this.state.countries.map(country => this.renderCountry(country)) : null}

                                                <li className="close" onClick={this.toggleCountries.bind(this)}>
                                                    <a><i className="icon-cancel"></i></a>
                                                </li>
                                            </ul>
                                            : null
                                          }

                                          {
                                            this.state.showProfileTypesTag ?
                                          <ul className="authors">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*" >Show all</a>
                                              </li>

                                              {this.state.profileTypes != null ? this.state.profileTypes.map(profileType => this.renderProfileType(profileType)) : null}

                                              <li className="close" onClick={this.toggleProfileTypes.bind(this)}>
                                                  <a><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>
                                          : null
                                          }

                                          {
                                            this.state.showIndustriesTag ?
                                          <ul className="industries">
                                              <li className="reset current-cat">
                                                  <a className="all" data-rel="*">Show all</a>
                                              </li>

                                              {this.state.industries.map(industries=>this.renderIndustry(industries))}

                                              <li className="close" onClick={this.toggleIndustries.bind(this)}>
                                                  <a><i className="icon-cancel"></i></a>
                                              </li>
                                          </ul>
                                          : null
                                          }

                                      </div>
                                  </div>

                                  <div className="blog_wrapper clearfix">
                                      <div className="posts_group lm_wrapper col-5 masonry tiles isotope">

                                          {this.state.profiles != null ? this.state.profiles.map(profile => this.renderProfile(profile)) : null}

                                      </div>
                                      {/*One full width row*/}
                                      <div className="column one pager_wrapper pager_lm" style={{paddingTop: 7+"%"}}>
                                            {
                                              this.state.showLoadMoreBtn ?
                                              <a className="pager_load_more button button_js" style={{borderRadius: 30+"px",borderWidth:1+"px"}}>
                                              <span onClick={() => this.handleLoadMore()} className="button_label" style={{padding:11+"px "+40+"px"}}>Load more</span></a>
                                                : null
                                            }
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
