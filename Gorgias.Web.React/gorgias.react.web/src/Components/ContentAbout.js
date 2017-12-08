import React, {Component} from 'react';

import AboutHeadingCover from './AboutPageSection/1-AboutHeadingCover';
import AboutUs from './AboutPageSection/2-AboutUs';
import OurStory from './AboutPageSection/3-OurStory';
import MissionVision from './AboutPageSection/4-MissionVision';
import ImageBanner from './AboutPageSection/5-ImageBanner';
import TextTilesPanels from './AboutPageSection/6-TextTilesPanels';
import Teams from './AboutPageSection/7-Teams';
import AppDownloadBanner from './AboutPageSection/8-AppDownloadBanner';


export default class ContentAbout extends Component {
    render() {
        return (
            <div id="Content" style={{backgroundColor: "#292929"}}>
                <div className="content_wrapper clearfix">
                    <div className="sections_group">
                        <div className="entry-content">

                            <AboutHeadingCover/>
                            <AboutUs/>
                            <MissionVision/>
                            <ImageBanner/>
                            <TextTilesPanels/>
                            
                            <AppDownloadBanner/>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
