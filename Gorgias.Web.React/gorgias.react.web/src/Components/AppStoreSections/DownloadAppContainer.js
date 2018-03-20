import React from 'react';
import AppProfile from '../AppProfileSections/AppProfile';
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link,
    NavLink
    // etc.
} from 'react-router-dom';
import MiniFooter from '../PageElements/MiniFooter';

export default class DownloadAppContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props, 'willMount ;)');
    }

    render() {
        return (
            <div>
                <div className="goBack">
                    <i className="icon-left-thin"></i>
                    <NavLink exact to={"/store"}><span>Back to Gorgias</span></NavLink>
                </div>
                {this.props.match.params.pid === undefined ?
                    <AppProfile profileURL={this.props.match.params.id}/> :
                    <AppProfile profileURL={this.props.match.params.id} profileID={this.props.match.params.pid}/>
                }
                <MiniFooter />
            </div>
        );
    }
}
