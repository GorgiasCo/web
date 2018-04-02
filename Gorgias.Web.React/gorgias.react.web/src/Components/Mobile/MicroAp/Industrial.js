import React from 'react';
import MaterialTab from "../../PageElements/Mobile/Tab";
import StoryListComponent from "../../Admin/Story/StoryListComponent";

class Industrial extends React.Component {

    render() {
        const {classes, theme} = this.props;

        return (
            <MaterialTab
                tabs={[
                    {header:'Chat', container: <h1>Chat WOW</h1>},
                    {header:'Story', container: <StoryListComponent />},
                    {header:'Product', container: <h1>Chat WOW</h1>},
                ]}
            />
        );
    }
}

export default Industrial;
