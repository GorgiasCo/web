import React from 'react';
import WhatIsGorgias from './MainSections/1-WhatIsGorgias';
import TopStories from './MainSections/1.2-TopStories';
import WhyBecomeGorgias from './MainSections/3-WhyBecomeGorgias';
import AppDownload from './MainSections/4-AppDownload';
import WhoIsGorgias from './MainSections/2-WhoIsGorgias';
import CelebGrid from './MainSections/2.1-CelebGrid';
import FeaturedSlider from './MainSections/0-WebSlider';

export default class Content extends React.Component {
    render() {
        return (
            <div id="Content" style={{backgroundColor: "#292929"}}>
                <div className="content_wrapper clearfix">
                    <div className="sections_group">
                        <div className="entry-content">
                            <FeaturedSlider/>
                            <WhatIsGorgias/>
                            <TopStories/>
                            <WhoIsGorgias/>
                            <CelebGrid isMainPage={true}/>
                            <WhyBecomeGorgias/>
                            <AppDownload/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
