import React from 'react';
import ResetPassword from './ResetPassword';
import ChangePassword from './ChangePassword';
import Login from './Login';
import {
    NavLink
} from 'react-router-dom'

export default class AccountContent extends React.Component {

    prepareAccountContent = () => {
        switch (this.props.accountType) {
            case "forget":
                return <ResetPassword />;
                break;
            case "reset":
                return <ChangePassword username={this.props.match.params.id}/>;
                break;
            default:
                return <Login />;
                break;
        }
    }

    render() {
        return (
            <div>
                <div className="goBack">
                    <i className="icon-left-thin"></i>
                    <NavLink exact to={"/"} activeStyle={{color: "red"}}><span>Back to Gorgias</span></NavLink>
                </div>

                {this.prepareAccountContent()}

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
