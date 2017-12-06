import React from 'react';
import WhatIsGorgias from './MainSections/1-WhatIsGorgias';
import TopStories from './MainSections/1.2-TopStories';
import WhyBecomeGorgias from './MainSections/3-WhyBecomeGorgias';
import AppDownload from './MainSections/4-AppDownload';
import WhoIsGorgias from './MainSections/2-WhoIsGorgias';
import CelebGrid from './MainSections/2.1-CelebGrid';

import {ContactWebCover} from './ContactPageSections/1-ContactWebCover.js';
import {ContactTextBanner} from './ContactPageSections/2-ContactTextBanner.js';
import {Locations} from './ContactPageSections/3-Locations.js';
import {ContactForm} from './ContactPageSections/4-ContactForm.js';

import {PrivacyPolicy} from './TermsPageSections/1-PrivacyPolicy.js';

import {AboutHeadingCover} from './AboutPageSection/1-AboutHeadingCover.js';
import {AboutUs} from './AboutPageSection/2-AboutUs.js';
import {OurStory} from './AboutPageSection/3-OurStory.js';
import {MissionVision} from './AboutPageSection/4-MissionVision.js';
import {ImageBanner} from './AboutPageSection/5-ImageBanner.js';
import {TextTilesPanels} from './AboutPageSection/6-TextTilesPanels.js';
import {Teams} from './AboutPageSection/7-Teams.js';
import {AppDownloadBanner} from './AboutPageSection/8-AppDownloadBanner.js';


export default class Content extends React.Component {
    render() {
        return (
            <div id="Content" style={{backgroundColor: "#292929"}}>
                <div className="content_wrapper clearfix">
                    <div className="sections_group">
                        <div className="entry-content">

                            <WhatIsGorgias/>
                            <TopStories/>
                            <WhoIsGorgias/>
                            <CelebGrid/>
                            <WhyBecomeGorgias/>
                            <AppDownload/>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
