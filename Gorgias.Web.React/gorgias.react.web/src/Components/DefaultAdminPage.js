/**
 * Created by yasser on 12/15/2017.
 */
import React, {Component} from "react";
import AdminBurgerHeader from "./PageElements/AdminBurgerHeader";
import Content from "./Home/Content";
import ContentAbout from "./AboutPageSection/ContentAbout";
import ContentContact from "./ContactPageSections/ContentContact";
import ContentTerms from "./TermsPageSections/ContentTerms";
import ContentTest from "./TestPageSections/ContentTest";
import ContentTestLoad from "./TestPageSections/ContentTestLoad";
import StoryManage from "./Admin/Story/StoryManageComponent";
import StoryNew from "./Admin/Story/StoryNewComponent";
import StoryListComponent from "./Admin/Story/StoryListComponent";
import ProfileManage from "./Admin/Profile/ProfileManageComponent";
import ContactManageComponent from "./Admin/Contact/ContactManageComponent";
import ContactListComponent from "./Admin/Contact/ContactListComponent";
import ContentManagerListComponent from "./Admin/ContentManager/ContentManagerListComponent";
import FollowerListComponent from "./Admin/Follower/FollowerListComponent";
import DashboardComponent from "./Admin/Dashboard/DashboardComponent";
import MiniFooter from './PageElements/MiniFooter';
import ContentManagerProfileListComponent from '../Components/Admin/ContentManager/ContentManagerProfileListComponent';
import {connect} from "react-redux";
import * as todoActions from "./Stores/ToDo/Action";
import * as authenticationAction from "./Stores/authentication/action";
import * as profileAction from "./Stores/profile/action";

class DefaultAdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileAccounts: false,
        };
    }

    componentWillMount() {
        //To ensure page is begining at top ;)
        console.log(this.props, 'defaultAdmin', this.props.profileAccountSetting.payload);
        if(this.props.profileAccountSetting.payload.userUserID !== undefined){
            this.props.getProfileAccounts(this.props.profileAccountSetting.payload.userUserID);
        }
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.books !== nextProps.books) {
            console.log(nextProps.books, 'changed');
        }
    }


    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName,
            MainNav: false
        });
    }

    prepareContainer = () => {
        let result = null;
        switch (this.props.containerName) {
            case "about":
                return (
                    <ContentAbout/>
                )
                break;
            case "test2":
                return (
                    <ContentTestLoad/>
                )
                break;
            case "terms":
                return (
                    <ContentTerms/>
                )
                break;
            case "contact":
                return (
                    <ContentContact/>
                )
                break;
            case "test":
                return (
                    <ContentTest/>
                )
                break;
            case "StoryManage":
                result = <StoryListComponent {...this.props}/>;
                // return (
                //     <StoryListComponent {...this.props}/>
                // )
                break;
            case "StoryNew":
                result = <StoryNew AlbumID={this.props.match.params.AlbumID} {...this.props}/>;
                // return (
                //     <StoryNew AlbumID={this.props.match.params.AlbumID} {...this.props}/>
                // )
                break;
            case "ProfileManage":
                result = <ProfileManage {...this.props}/>;
                // return (
                //     <ProfileManage {...this.props}/>
                // )
                break;
            case "ContactForm":
                result = <ContactManageComponent AddressID={this.props.match.params.AddressID} {...this.props}/>;
                // return (
                //     <ContactManageComponent AddressID={this.props.match.params.AddressID} {...this.props}/>
                // )
                break;
            case "ContactList":
                result = <ContactListComponent {...this.props}/>;
                // return (
                //     <ContactListComponent {...this.props}/>
                // )
                break;
            case "ContentManagerList":
                result = <ContentManagerListComponent {...this.props}/>;
                // return (
                //     <ContentManagerListComponent {...this.props}/>
                // )
                break;
            case "FollowerList":
                result = <FollowerListComponent {...this.props}/>;
                // return (
                //     <FollowerListComponent {...this.props}/>
                // )
                break;
            case "Dashboard":
                result = <DashboardComponent {...this.props}/>;
                // return (
                //     <DashboardComponent {...this.props}/>
                // )
                break;
            default:
                result = <Content/>;
                // return (
                //     <Content/>
                // )
                break;
        }
        return result;
    }

    prepareProfileAccounts = (event) => {
        let {profileAccounts} = this.state;
        console.log(profileAccounts, 'prepareProfileAccounts');
        this.setState({
            profileAccounts: !profileAccounts,
        })
        event.preventDefault();
    }

    logout(event) {
        console.log('logout');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <AdminBurgerHeader
                    logout={this.props.logout}
                    prepareProfileAccounts={this.prepareProfileAccounts}
                    prepareProfileAccountLists={this.props.profileAccounts}
                    profileAccountss={this.state.profileAccounts}
                    profileAccountSetting={this.props.profileAccountSetting.payload}
                    onPressProfileAccount={(ProfileID) => this.props.getProfileAccountSetting(ProfileID)}
                    router={this.props.router}
                />
                <div id="Wrapper">
                    {this.prepareContainer()}
                    <MiniFooter/>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     //console.log(state, 'mapStateToProps default admin');
//     return {
//         // You can now say this.props.books
//         books: state.todoApp.todos
//     }
// };
const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps storylist');
    return {
        profileAccountSetting: state.profile.profileAccountSetting,
        profileAccounts: state.profile.profileAccounts,
    }
};
// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        addTodo: book => dispatch(todoActions.addTodo(book)),
        logout: () => dispatch(authenticationAction.logout()),
        getProfileAccountSetting: (ProfileID) => dispatch(profileAction.getProfileAccountSetting(ProfileID)),
        getProfileAccounts: (UserID) => dispatch(profileAction.getProfileAccounts(UserID)),
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(DefaultAdminPage);
// export default connect(mapStateToProps, mapDispatchToProps)(DefaultAdminPage);