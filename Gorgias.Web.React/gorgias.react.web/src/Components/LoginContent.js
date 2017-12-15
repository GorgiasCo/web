import React from 'react';
import ResetPassword from './LoginSections/ResetPassword';
import ChangePassword from './LoginSections/ChangePassword';
import Login from './LoginSections/Login';
import {
    NavLink
} from 'react-router-dom'

export default class LoginContent extends React.Component {
    render() {
        return (

            <div>
                <div className="goBack">
                    <i className="icon-left-thin"></i>
                    <NavLink exact to={"/"} activeStyle={{color: "red"}}><span>Back to Gorgias</span></NavLink>
                </div>

                <Login/>
                <ResetPassword/>
                <ChangePassword username={this.props.match.params.id}/>

                <footer id="Footer" className="clearfix"
                        style={{backgroundColor: "rgba(0,0,0,0.5)", position: "fixed"}}>
                    <div className="footer_copy">
                        <div className="container">
                            <div className="column one" style={{marginBottom: 10 + "px", paddingTop: 20 + "px"}}>
                                <div className="copyright">
                                    &copy; 2017 Gogias &amp; Co. All Rights Reserved. <a target="_blank" rel="nofollow"
                                                                                         href="#">Gorgias</a>
                                </div>
                                <ul className="social"></ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
