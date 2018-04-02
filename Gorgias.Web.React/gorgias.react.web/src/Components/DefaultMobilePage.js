/**
 * Created by yasser on 12/15/2017.
 */
import React, {Component} from 'react';
import Header from './PageElements/Header';
import Content from './Home/Content';
import Footer from './PageElements/Footer';
import ContentAbout from './AboutPageSection/ContentAbout';
import ContentAppstore from './AppStoreSections/ContentAppstore';
import ContentContact from './ContactPageSections/ContentContact';
import ContentTerms from './TermsPageSections/ContentTerms';
import ContentTest from './TestPageSections/ContentTest';
import { connect } from 'react-redux';
import * as todoActions from './Stores/ToDo/Action';
import MicroAp from '../Components/Mobile/MicroAp';

class DefaultMobilePage extends Component {

    componentWillMount() {
    }

    componentWillReceiveProps(nextProps){
    }

    prepareContainer = () => {
        console.log(this.props.containerName,'this.props.containerName');
        let result = null;
        switch (this.props.containerName) {
            case "about":
                result = <ContentAbout/>;
                // return (
                //     <ContentAbout/>
                // )
                break;
            case "store":
                result = <ContentAppstore/>;
                // return (
                //     <ContentAppstore/>
                // )
                break;
            case "terms":
                result = <ContentTerms/>;
                // return (
                //     <ContentTerms/>
                // )
                break;
            case "contact":
                result = <ContentContact/>;
                // return (
                //     <ContentContact/>
                // )
                break;
            case "test":
                result = <ContentContact/>;
                // return (
                //     <ContentContact/>
                // )
                break;
            default:
                result = <MicroAp/>;
                break;
        }
        return result;
    }

    render() {
        return this.prepareContainer()
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
export default connect(mapStateToProps, mapDispatchToProps)(DefaultMobilePage);
