/**
 * Created by yasser on 12/15/2017.
 */
import React, {Component} from 'react';
import AdminHeader from './PageElements/AdminHeader';
import Content from './Home/Content';
import Footer from './PageElements/Footer';
import ContentAbout from './AboutPageSection/ContentAbout';
import ContentAppstore from './AppStoreSections/ContentAppstore';
import ContentContact from './ContactPageSections/ContentContact';
import ContentTerms from './TermsPageSections/ContentTerms';
import ContentTest from './TestPageSections/ContentTest';
import { connect } from 'react-redux';
import * as todoActions from '../Components/Actions/ToDo/Action';
class DefaultAdminPage extends Component {

    componentWillMount() {
        //To ensure page is begining at top ;)
        window.scrollTo(0, 0);
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
            case "store":
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

    render() {
        return (
            <div id="Wrapper">
                <AdminHeader/>
                {this.prepareContainer()}
                {this.props.hasFooter ?
                    <Footer/> : null }
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