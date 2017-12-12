import React from 'react';


import ContactWebCover from './ContactPageSections/1-ContactWebCover';
import ContactTextBanner from './ContactPageSections/2-ContactTextBanner';
import Locations from './ContactPageSections/3-Locations';
import ContactForm from './ContactPageSections/4-ContactForm';
import AppDownloadBanner from './AboutPageSection/8-AppDownloadBanner';


export default class ContentContact extends React.Component {
    render() {
        return (
            <div id="Content" style={{backgroundColor: "#292929"}}>
                <div className="content_wrapper clearfix">
                    <div className="sections_group">
                        <div className="entry-content">

                            <ContactWebCover/>
                            <ContactTextBanner/>
                            <ContactForm/>
                            <Locations/>
                            <AppDownloadBanner/>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
