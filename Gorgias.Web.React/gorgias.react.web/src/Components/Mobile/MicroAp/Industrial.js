import React from 'react';
import MaterialTab from "../../PageElements/Mobile/Tab";
import StoryListComponent from "../../Admin/Story/StoryListComponent";
import MaterialList from "../../PageElements/Mobile/List";

class Industrial extends React.Component {

    render() {
        const {classes, theme} = this.props;

        return (
            <MaterialTab
                tabs={[
                    {header:'Chat', container: <MaterialList/>},
                    {header:'Story', container: <h1>Story la la 3></h1>},
                    {header:'Product', container: <h1>Product WOW</h1>},
                ]}
            />
        );
    }
}

export default Industrial;
