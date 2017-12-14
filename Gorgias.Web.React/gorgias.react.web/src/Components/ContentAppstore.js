import React from 'react';
import CelebGrid from './AppstoreSections/1.0-CelebGrid-Appstore';
import WhoIsGorgias from "./MainSections/1-WhatIsGorgias";

export default class ContentAppstore extends React.Component {
    render() {
        return (
            <div id="Content" style={{backgroundColor: "#292929", marginTop: 0 + "px"}}>
                <div className="content_wrapper clearfix">
                    <div className="sections_group">
                        <div className="entry-content">
                            <WhoIsGorgias
                                marginTop={50}
                                title="App Store"
                                body="Try to download app less than 1mb ;)"/>
                            <CelebGrid isMainPage={false}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

