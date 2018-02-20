import React, {Component} from "react";
import AccountContent from "./LoginSections/AccountContent";
import DownloadAppContainer from "./AppStoreSections/DownloadAppContainer";
import AppProfileInfoContainer from "./AppStoreSections/AppProfileInfoContainer";
import DefaultPage from "./DefaultPage";
import DefaultAdminPage from "./DefaultAdminPage";
import AuthenticationProvider from "./PageElements/authenticationProvider";

import {browserHistory, BrowserRouter as Router, Route} from "react-router-dom";
//
// export const mainHOC = () => {
//     return(
//
//     );
// }

let defaultPage = DefaultPage;

const ComposedComponent = AuthenticationProvider(DefaultPage);
const DefaultAdminPageComponent = AuthenticationProvider(DefaultAdminPage);
const LoginComponent = AuthenticationProvider(AccountContent);
const AdminTestComponent = AuthenticationProvider(DefaultAdminPage);
const AdminTest2Component = AuthenticationProvider(DefaultAdminPage);
const AdminStoryManageComponent = AuthenticationProvider(DefaultAdminPage);


export default class MainPage extends Component {

    constructor(props) {
        super(props);
        defaultPage.containerName = 'about';
        defaultPage.hasFooter = false;
        console.log(props,'root props ;)');
        console.log(defaultPage.hasFooter, 'render');
    }


    componentWillMount() {
        this.setState({isLogin: false});
    }

    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                <div>
                    {/*<Route exact path="/" component={AuthenticationProvider(DefaultPage)} data={{containerName:"contact", hasFooter:true}}/>*/}
                    <Route exact path="/" component={() => <ComposedComponent containerName=""  hasFooter={true} />}/>
                    <Route exact path="/login" component={LoginComponent}/>
                    <Route path="/account/reset/:id" component={(props) => <AccountContent {...props} accountType="reset"/>}/>
                    <Route exact path="/account/forget" component={() => <AccountContent accountType="forget"/>}/>
                    <Route exact path="/about" component={() => <DefaultPage containerName="about" hasFooter={true}/>}/>
                    <Route exact path="/terms" component={() => <DefaultPage containerName="terms" hasFooter={true}/>}/>
                    <Route exact path="/contact"
                           component={() => <DefaultPage containerName="contact" hasFooter={true}/>}/>
                    <Route exact path="/app/:id" component={DownloadAppContainer}/>
                    <Route exact path="/store/profile" component={AppProfileInfoContainer}/>
                    <Route exact path="/app/:id/:pid" component={DownloadAppContainer}/>
                    <Route exact path="/store"
                           component={() => <DefaultPage containerName="store" hasFooter={false}/>}/>
                    {/*test pages --by T.K*/}
                    <Route exact path="/test"
                           component={() => <AdminTestComponent containerName="test" hasFooter={true}/>}/>
                    <Route exact path="/test2"
                           component={() => <AdminTest2Component containerName="test2" hasFooter={true}/>}/>
                    <Route exact path="/admin/story"
                           component={(props) => <AdminStoryManageComponent{...props} containerName="StoryManage" hasFooter={true}/>}/>
                    <Route exact path="/admin/story/new"
                           component={(props) => <AdminStoryManageComponent {...props} containerName="StoryNew" hasFooter={true}/>}/>
                    <Route exact path="/admin/profile"
                           component={(props) => <AdminStoryManageComponent {...props} containerName="ProfileManage" hasFooter={true}/>}/>
                    <Route path="/admin/contact/:AddressID"
                           component={(props) => <AdminStoryManageComponent {...props} containerName="ContactForm" hasFooter={true}/>}/>
                </div>
            </Router>
        )
    }
}
