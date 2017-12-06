import React from 'react';

import PrivacyPolicy from './TermsPageSections/1-PrivacyPolicy';

export default class ContentTerms extends React.Component {
  render (){
    return (
          <div id="Content" style={{backgroundColor:"#292929"}}>
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                  <div className="entry-content">

                    <PrivacyPolicy/>

                  </div>
                </div>
              </div>
            </div>

    );
  }
}
