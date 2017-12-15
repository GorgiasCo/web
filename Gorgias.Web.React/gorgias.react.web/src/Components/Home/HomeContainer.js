import React, {Component} from 'react';
import Header from '../PageElements/Header';
import Content from './Content';
import Footer from '../PageElements/Footer';

export default class HomeContainer extends Component {



    componentWillMount() {
        //To ensure page is begining at top ;)
        window.scrollTo(0, 0);
    }

    onChangeLinkName(newName){
      this.setState({
        homeLink:newName,
        MainNav:false
      });
    }

    render() {
        return (

            <div id="Wrapper">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}
