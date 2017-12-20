import React from 'react';
import $ from 'jquery';

export default class CelebGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            // bgColor:"red",
            showLoadMoreBtn: true,
            color_black: true,
            filteringData: {},
        };

        this.handleLoadMore = this.handleLoadMore.bind(this);
        console.log("Initial bgColor is ", this.state.bgColor);
    }

    componentDidMount() {
        /* ---------------------------------------------------------------------------
         * Isotope
         * --------------------------------------------------------------------------- */
        // Isotope | Fiters
        // function isotopeFilter(domEl, isoWrapper) {
        //     var filter = domEl.attr('data-rel');
        //     isoWrapper.isotope({
        //         filter: filter
        //     });
        // }
        // // Isotope | Fiters | Click
        // $('.isotope-filters .filters_wrapper').find('li:not(.close) a').click(function(e) {
        //     e.preventDefault();
        //     var filters = $(this).closest('.isotope-filters');
        //     var parent = filters.attr('data-parent');
        //     if (parent) {
        //         parent = filters.closest('.' + parent);
        //         var isoWrapper = parent.find('.isotope').first()
        //     } else {
        //         var isoWrapper = $('.isotope');
        //     }
        //     filters.find('li').removeClass('current-cat');
        //     $(this).closest('li').addClass('current-cat');
        //     isotopeFilter($(this), isoWrapper);
        // });
        // // Isotope | Fiters | Reset
        // $('.isotope-filters .filters_buttons').find('li.reset a').click(function(e) {
        //     e.preventDefault();
        //     $('.isotope-filters .filters_wrapper').find('li').removeClass('current-cat');
        //     isotopeFilter($(this), $('.isotope'));
        // });
        // // carouFredSel wrapper | Height
        //
        // // Equal Columns | Height
        // //mfn_equalH();
        //
        // /* ---------------------------------------------------------------------------
        //  * Blog & Portfolio filters
        //  * --------------------------------------------------------------------------- */
        // $('.filters_buttons .open').click(function(e) {
        //     e.preventDefault();
        //     var type = $(this).closest('li').attr('class');
        //     $('.filters_wrapper').show(200);
        //     $('.filters_wrapper ul.' + type).show(200);
        //     $('.filters_wrapper ul:not(.' + type + ')').hide();
        // });
        // $('.filters_wrapper .close a').click(function(e) {
        //     e.preventDefault();
        //     $('.filters_wrapper').hide(200);
        // });

    }

    componentWillMount() {

        /*POST method  for Profiles*/

        var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
        var that = this;

        var bodyData = {
            CountryID: null,
            Industries: [],
            ProfileTypeID: null,
            ProfileID: null,
            OrderType: 1,
            Tags: [],
            Location: null,
            PageNumber: 1,
            PageSize: 15,
            SubscriptionTypeID: 3
        }

        this.prepareProfiles(bodyData);
        /*GET method MAIN ENTITIES*/

        var urlMainEntities = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/MainEntities";

        fetch(urlMainEntities)
            .then(function (response) {

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
                    profileTypes: dataMainEntities.Result.ProfileType,
                    isLoading: false,
                    industries: dataMainEntities.Result.Industry
                });

            });

    }

    prepareProfiles(filteringData) {
        var url = "http://gorgiasapp-v3.azurewebsites.net/api/Web/V2/Profiles/";
        var that = this;

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filteringData)
        }).then(function (response) {

            return response.json();
        })
            .then(function (data) {

                var canLoadMore = true;
                if(data.Result.length < filteringData.PageSize){
                    canLoadMore = false;
                }

                that.setState({
                    profiles: data.Result,
                    isLoading: false,
                    filteringData: filteringData,
                    showLoadMoreBtn: canLoadMore,
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

        bodyData.PageNumber += 1;
        // bodyData.PageNumber += 1;
        console.log(bodyData, "body data");

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData)
        }).then(function (response) {

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

                console.log(newResult.length / 100, 'length divide by 100');
                console.log(arrayModulus, 'modulus');

                // var arrayCheck = arrayCompare > 1 ? false : true
                //var arrayCheck = newResult.length / 100 < arrayModulus ? false : true
                // newResult.length == showLoadMoreBtn1 > 45 ? "false" : "true";

                var canLoadMore = true;
                if(data.Result.length < bodyData.PageSize){
                    canLoadMore = false;
                }


                this.setState({
                    profiles: newResult,
                    isLoading: false,
                    filteringData: bodyData,
                    showLoadMoreBtn: canLoadMore
                });

                console.log(this.state.profiles, '4');

            });
    }

    handleProfileTypeFilter(profileTypeID) {
        //get filtering data from state
        var filteringData = this.state.filteringData;

        //i change new value to profile id
        filteringData.ProfileTypeID = profileTypeID > 0 ? profileTypeID : null;
        filteringData.PageNumber = 1;
        this.prepareProfiles(filteringData);
        console.log("filtering country ;) got it ?", profileTypeID, filteringData);
    }

    handleCountryFilter(countryID) {
        //get filtering data from state
        var filteringData = this.state.filteringData;

        //i change new value to country id
        filteringData.CountryID = countryID > 0 ? countryID : null;
        filteringData.PageNumber = 1;
        this.prepareProfiles(filteringData);
        console.log("filtering country ;) ICE CREAM", countryID, filteringData);
        // this.setState({bgColor:"blue"})
        console.log(this.state.bgColor, "this is the new bgColor!");
    }

    handleIndustryFilter(industryID) {

        var filteringData = this.state.filteringData;

        filteringData.IndustryID = industryID > 0 ? industryID : null;
        this.prepareProfiles(filteringData);
        console.log("filtering insdustries data", industryID, filteringData);
    }

    renderProfile(profileData) {
        return (
            <div key={profileData.ProfileID}
                 className="post-item isotope-item clearfix post-2277 post  format-standard has-post-thumbnail  category-lifestyle category-technology tag-Malaysia author-Female">
                <div className="post-photo-wrapper scale-with-grid">
                    <img width="800" height="800" src={profileData.ProfileImage}
                         className="scale-with-grid wp-post-image fixed-grid" alt="home_journalist_blog7"/>
                </div>
                <div className="post-desc-wrapper">
                    <div className="post-desc">
                        <div className="post-title" style={{cursor:"default"}}>
                            <h2 className="entry-title larger" style={{paddingBottom: 0, lineHeight:"115%"}}>
                                <a>{profileData.ProfileFullname}</a></h2>
                            <h2 className="entry-title larger tkFontSecondaryName" style={{marginBottom: 0 + "px"}}>
                                <a>{profileData.ProfileURL}</a></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderCountry(countryData) {
        return (
            <li key={countryData.CountryID} className={(this.state.filteringData.CountryID === countryData.CountryID ? "current-cat" : "")}>
                <a data-rel={".tag-" + countryData.CountryName}
                   onClick={() => this.handleCountryFilter(countryData.CountryID)}>{countryData.CountryName}</a>
            </li>
        )
    }

    renderProfileType(profileTypeData) {
        return (
            <li key={profileTypeData.ProfileTypeID} className={(this.state.filteringData.ProfileTypeID === profileTypeData.ProfileTypeID ? "current-cat" : "")}>
                <a data-rel={".author-" + profileTypeData.ProfileTypeName}
                   onClick={() => this.handleProfileTypeFilter(profileTypeData.ProfileTypeID)}>{profileTypeData.ProfileTypeName}</a>
            </li>
        )
    }

    renderIndustry(industriesData) {
        return (
            <li key={industriesData.IndustryID} className={industriesData.IndustryName}>
                <a data-rel={".industries-" + industriesData.IndustryName}
                   onClick={() => this.handleIndustryFilter(industriesData.IndustryID)}>{industriesData.IndustryName}</a>
            </li>
        )
    }

//for filtering buttons tabs
    toggleCategories() {
        this.setState({showCategoriesTag: !this.state.showCategoriesTag});
    }

    toggleCountries() {

        let showCountriesTag = true
        let activate = true
        // let bgColorActive = activate ? "purple" : "white"

        this.setState({
            showCountriesTag: !this.state.showCountriesTag,
            showProfileTypesTag: false,
            activate: !this.state.activate,
            // bgColor:bgColorActive,
            color_black: !this.state.color
        });
        // console.log("The current color is",bgColorActive );
        console.log("The tag state is", showCountriesTag);
    }

    toggleProfileTypes() {
        this.setState({
            showProfileTypesTag: !this.state.showProfileTypesTag,
            showCountriesTag: false
        });
    }

    toggleIndustries() {
        this.setState({showIndustriesTag: !this.state.showIndustriesTag});
    }

    render() {
        const {filteringData} = this.state;
        console.log(this.state.profiles, 'render', filteringData, this.state.filteringData);

        return (

            !this.state.isLoading ?
                <div className="section mcb-section tkSection-paddingBottom-only bg-color-1">
                    <div className="section_wrapper clearfix">
                        <div className="items_group clearfix">
                            <div className="column one column_blog ">
                                <div className="column_filters">
                                    {/* Filter Area*/}
                                    <div id="Filters" className="isotope-filters" data-parent="column_filters" style={{
                                        margin: 30 + "px",
                                        fontSize: 16 + "px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        marginTop: 30 + "px",
                                        marginBottom: 30 + "px",
                                        width: "fit-content"
                                    }}>
                                        {!this.props.isMainPage ?
                                            <div>
                                          {/*<span className="label" style={{color: "#999c9e"}}>
                                              Filterrr by
                                          </span>*/}
                                                <ul className="filters_buttons" style={{
                                                    margin: "0px auto",
                                                    fontSize: "16px",
                                                    width: "fit-content",
                                                    width: "-webkit-fit-content", /*safari*/
                                                    display: "flex"
                                                }}>
                                                    <li className="tags" onClick={this.toggleCountries.bind(this)}
                                                        style={{backgroundColor: this.state.bgColor}}>
                                                        <a className="open"><i className="icon-docs"></i>Countries<i
                                                            className="icon-down-dir"></i></a>
                                                    </li>
                                                    <li className="authors"
                                                        onClick={this.toggleProfileTypes.bind(this)}>
                                                        <a className="open"><i className="icon-user"></i>ProfileType<i
                                                            className="icon-down-dir"></i></a>
                                                    </li>
                                                </ul>
                                            </div> : null }

                                        <div className="filters_wrapper tkFont tkFont-Bold" style={{display: "block"}}>
                                            {
                                                this.props.isMainPage || this.state.showCountriesTag ?
                                                    <ul className="tags">
                                                        {/*<li className="close" onClick={this.toggleCountries.bind(this)} style={{float:"right"}}>*/}
                                                        {/*<a><i className="icon-cancel"></i></a>*/}
                                                        {/*</li>*/}
                                                        <li className={"reset " + (this.state.filteringData.CountryID === null ? "current-cat" : "")}>
                                                            <a className="all" data-rel="*"
                                                               onClick={() => this.handleCountryFilter(0)}>Worldwide</a>
                                                        </li>

                                                        {this.state.countries != null ? this.state.countries.map(country => this.renderCountry(country)) : null}

                                                    </ul>
                                                    : null
                                            }

                                            {
                                                this.state.showProfileTypesTag ?
                                                    <ul className="authors">
                                                        {/*<li className="close"onClick={this.toggleProfileTypes.bind(this)} style={{float:"right"}}>*/}
                                                        {/*<a><i className="icon-cancel"></i></a>*/}
                                                        {/*</li>*/}
                                                        <li className={"reset " + (this.state.filteringData.ProfileTypeID === null ? "current-cat" : "")}>
                                                            <a className="all" data-rel="*"
                                                               onClick={() => this.handleProfileTypeFilter(0)}>All</a>
                                                        </li>

                                                        {this.state.profileTypes != null ? this.state.profileTypes.map(profileType => this.renderProfileType(profileType)) : null}

                                                    </ul>
                                                    : null
                                            }

                                            {
                                                this.state.showIndustriesTag ?
                                                    <ul className="industries">
                                                        <li className="reset current-cat">
                                                            <a className="all" data-rel="*">Show all</a>
                                                        </li>

                                                        {this.state.industries.map(industries => this.renderIndustry(industries))}

                                                        <li className="close"
                                                            onClick={this.toggleIndustries.bind(this)}>
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
                                        <div className="column one pager_wrapper pager_lm"
                                             style={{paddingTop: 7 + "%"}}>
                                            {
                                                this.state.showLoadMoreBtn ?
                                                    <a className="pager_load_more button button_js"
                                                       style={{borderRadius: 30 + "px", borderWidth: 1 + "px"}}>
                                                        <span onClick={() => this.handleLoadMore()}
                                                              className="button_label"
                                                              style={{padding: 11 + "px " + 40 + "px"}}>Load more</span></a>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*test profile pop up*/}
                    <div>Test pop up</div>

                      <div className="content_wrapper clearfix" style={{ }}>
                          <div className="sections_group">
                              <div className="entry-content">
                                  {/*login*/}
                                  <div className="section dark" id="featured">
                                      <div className="section_wrapper clearfix">
                                          <div className="items_group clearfix" style={{height: 100 + "vh"}}>
                                              <div id="tk-modal-form" style={{color: "#de0083"}}>
                                                  <div className="animate " data-anim-type="fadeIn">
                                                      <div id="tk-overlay-form">

                                                        <div className="column one-second column_our_team">
                                                              <div className="team team_vertical" style={{width:"225px"}}>
                                                                  <div className="image_frame no_link scale-with-grid">
                                                                      <div className="image_wrapper"><img class="scale-with-grid" src="https://gorgiasasia.blob.core.windows.net/images/profile-4125.jpg" alt="Jennifer Lee"/>
                                                                      </div>
                                                                  </div>
                                                                  <div className="desc_wrapper">
                                                                      <h4>Jennifer Lee</h4>
                                                                      <p className="subtitle">
                                                                          Software Engineer
                                                                      </p>
                                                                      <hr className="hr_color"/>
                                                                      <div className="desc">
                                                                          Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra a, dapibus at dolor.
                                                                      </div>
                                                                      <div className="links">
                                                                          <a href="mailto:noreply@envato.com" className="icon_bar icon_bar_small"><span className="t"><i className="icon-mail"></i></span><span class="b"><i className="icon-mail"></i></span></a><a target="_blank" href="http://facebook.com/" className="icon_bar icon_bar_small"><span className="t"><i class="icon-facebook"></i></span><span class="b"><i class="icon-facebook"></i></span></a><a target="_blank" href="http://twitter.com/" class="icon_bar icon_bar_small"><span class="t"><i class="icon-twitter"></i></span><span class="b"><i class="icon-twitter"></i></span></a><a target="_blank" href="http://www.linkedin.com/" class="icon_bar icon_bar_small"><span class="t"><i class="icon-linkedin"></i></span><span class="b"><i class="icon-linkedin"></i></span></a>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                          <div className="column one-second column_our_team">
                                                                <div className="team team_vertical">

                                                                    <div className="desc_wrapper">
                                                                        <h4 class="tkFont-Bold tkFont-Theme" style={{float:"none", textAlign:"center", margin:"5px auto"}}>Galleries</h4>

                                                                        <div className="myGrid">
                                                                              <ul className="portfolio_grid tk">
                                                                                  <li>
                                                                                      <div className="">
                                                                                          <img width="100" height="100" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1" itemprop="image"/>
                                                                                      </div>
                                                                                  </li>
                                                                                  <li>
                                                                                      <div className="">
                                                                                          <img width="100" height="100" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1" itemprop="image"/>
                                                                                      </div>
                                                                                  </li>
                                                                                  <li>
                                                                                      <div className="">
                                                                                          <img width="100" height="100" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1" itemprop="image"/>
                                                                                      </div>
                                                                                  </li>
                                                                                  <li>
                                                                                      <div className="">
                                                                                          <img width="100" height="100" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1" itemprop="image"/>
                                                                                      </div>
                                                                                  </li>
                                                                                  <li>
                                                                                      <div className="">
                                                                                          <img width="100" height="100" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1" itemprop="image"/>
                                                                                      </div>
                                                                                  </li>
                                                                                  <li>
                                                                                      <div className="">
                                                                                          <img width="100" height="100" src="https://gorgiasasia.blob.core.windows.net/images/profile-4992.jpg" alt="portfolio_1" itemprop="image"/>
                                                                                      </div>
                                                                                  </li>

                                                                              </ul>

                                                                        </div>




                                                                    </div>
                                                                </div>
                                                            </div>

                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>}





                </div>
                :
                <h3>Loading</h3>


        );
    }
}
