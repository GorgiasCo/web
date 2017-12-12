import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class HomeContainer extends Component {

    constructor(){
      super()
      this.state={
        homeLink:"Homee",
        MainNav:true
      };
    }

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
                <Header homeLink={this.state.homeLink}/>
                <Content/>
                <Footer changeLink={this.onChangeLinkName.bind(this)}/>
            </div>
        );
    }
}
