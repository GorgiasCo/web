/**
 * Created by yasser on 12/15/2017.
 */
import React, {Component} from "react";
import AdminBurgerHeader from "./PageElements/AdminBurgerHeader";
import Content from "./Home/Content";
import Footer from "./PageElements/Footer";
import ContentAbout from "./AboutPageSection/ContentAbout";
import ContentAppstore from "./AppStoreSections/ContentAppstore";
import ContentContact from "./ContactPageSections/ContentContact";
import ContentTerms from "./TermsPageSections/ContentTerms";
import ContentTest from "./TestPageSections/ContentTest";
import {connect} from "react-redux";
import * as todoActions from "../Components/Actions/ToDo/Action";
class DefaultAdminPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            profileAccounts: false,
        };
    }

    componentWillMount() {
        //To ensure page is begining at top ;)

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
        switch (this.props.containerName) {
            case "about":
                return (
                    <ContentAbout/>
                )
                break;
            case "test2":
                return (
                    <ContentAppstore/>
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
            default:
                return (
                    <Content/>
                )
                break;
        }
    }

    prepareProfileAccounts = (event) =>{
        let {profileAccounts} = this.state;
        console.log(profileAccounts,'prepareProfileAccounts');
        this.setState({
            profileAccounts: !profileAccounts,
        })
        event.preventDefault();
    }

    logout(event){
        console.log('logout');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <AdminBurgerHeader
                    logout={this.logout}
                    prepareProfileAccounts={this.prepareProfileAccounts}
                    profileAccounts={this.state.profileAccounts}
                />
                <div id="Wrapper">
                    {this.prepareContainer()}
                    {this.props.hasFooter ?
                        <Footer/> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps default admin');
    return {
        // You can now say this.props.books
        books: state.todoApp.todos
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        addTodo: book => dispatch(todoActions.addTodo(book))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(DefaultAdminPage);