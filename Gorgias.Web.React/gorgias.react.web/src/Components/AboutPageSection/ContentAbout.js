import React, {Component} from 'react';

import AboutHeadingCover from './1-AboutHeadingCover';
import AboutUs from './2-AboutUs';
import OurStory from './3-OurStory';
import MissionVision from './4-MissionVision';
import ImageBanner from './5-ImageBanner';
import TextTilesPanels from './6-TextTilesPanels';
import Teams from './7-Teams';
import AppDownloadBanner from './8-AppDownloadBanner';
// import "../../css/main.css";


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
