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
                            <WhatIsGorgias
                                marginTop={0}
                                title="What is Storyland!"
                                body="Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget
                                        hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.
                                        Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh."/>
                            <TopStories/>
                            <WhoIsGorgias
                                title="Who is gorgias?"
                                body="Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget
                                        hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem.
                                        Sed auctor dui eleifend, scelerisque eros ut, pellentesque nibh."
                            />
                            <CelebGrid isMainPage={true} isPeople={true}/>
                            <WhyBecomeGorgias/>
                            <WhoIsGorgias
                                title="Gorgias Partners"
                                body="Curabitur sed iaculis dolor, non congue ligula. Maecenas imperdiet ante eget
                                        hendrerit posuere. Nunc urna libero, congue porta nibh a, semper feugiat sem."
                            />
                            <CelebGrid isMainPage={true} isPeople={false}/>
                            <AppDownload/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
