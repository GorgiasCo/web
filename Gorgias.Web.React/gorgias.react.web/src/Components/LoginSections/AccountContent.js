import React from 'react';
import ResetPassword from './ResetPassword';
import ChangePassword from './ChangePassword';
import Login from './Login';
import MiniFooter from '../PageElements/MiniFooter';
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
                    <NavLink exact to={"/"} activeStyle={{color: "red"}}>
                        <span>
                            Back to Gorgias
                        </span>
                    </NavLink>
                </div>
                {this.prepareAccountContent()}
                <MiniFooter/>
            </div>
        );
    }
}
