import React from 'react';
import AppProfileInfo from './AppProfileInfo';
// import AppProfile from '../AppProfileSections/AppProfile-Profile';
import {
    BrowserRouter as Router,
    StaticRouter, // for server rendering
    Route,
    Link,
    NavLink
    // etc.
} from 'react-router-dom';
import MiniFooter from '../PageElements/MiniFooter';

export default class AppProfileInfoContainer extends React.Component {

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
                <AppProfileInfo {...this.props}/>
                <MiniFooter />
            </div>
        );
    }
}
