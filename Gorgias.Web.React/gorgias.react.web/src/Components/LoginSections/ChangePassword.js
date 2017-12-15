import React from 'react';
import queryString from 'query-string';

export default class ChangePassword extends React.Component {

    baseResetPasswordAPIURL = 'http://gorgiasapp-v3.azurewebsites.net/api/account/ResetPassword/';

    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            confirmNewPassword: '',
            isDone: false,
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        //alert('A name was submitted: ' + this.state.resetPasswordEmail);
        if (this.state.newPassword !== this.state.confirmNewPassword) {
            this.setState({
                isLoading: false,
                errorMessage: 'Passwords are not same ;)',
                newPassword: '',
                confirmNewPassword: '',
                isDone: false,
            });
        } else {
            const parsed = queryString.parse(window.location.search);
            //console.log(parsed, 'parsed ;)');

            if (parsed !== null) {
                let resetPasswordDate = {
                    Username: this.props.username,
                    Code: parsed.code,
                    Password: this.state.newPassword,
                    ConfirmedPassword: this.state.confirmNewPassword
                }
                //console.log(resetPasswordDate, 'resetPasswordDate');
                fetch(
                    this.baseResetPasswordAPIURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(resetPasswordDate)
                    }
                ).then(function (response) {
                        return response.json();
                    }
                ).then(response => {
                        //console.log(response);
                        let errorMessage = "Done, your password changed";
                        if (!response.Result) {
                            errorMessage = "Your link is expired. Try to reset password again.";
                        }
                        this.setState({
                            isLoading: false,
                            errorMessage: errorMessage,
                            newPassword: '',
                            confirmNewPassword: '',
                            isDone: response.Result,
                        });
                    }
                );
            }
        }
        event.preventDefault();
    }

    reset = () => {
        this.setState({
            isLoading: false,
            errorMessage: '',
            newPassword: '',
            confirmNewPassword: '',
        });
    }

    render() {
        const {isDone} = this.state;
        return (
            <div className="content_wrapper clearfix">
                <div className="sections_group">
                    <div className="entry-content">
                        {/*login*/}
                        <div className="section dark" id="featured" style={{
                            height: 100 + "vh",
                            backgroundImage: "url(https://www.wallpaperup.com/uploads/wallpapers/2015/09/22/808178/00e8bff9f8589282d95264db8916df89.jpg)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center top",
                            backgroundSize: "cover"
                        }}>
                            <div className="section_wrapper clearfix">
                                <div className="items_group clearfix" style={{height: 100 + "vh"}}>
                                    <div id="tk-modal-form" style={{color: "#de0083"}}>
                                        <div className="animate " data-anim-type="fadeIn">
                                            <div id="tk-overlay-form">
                                                {!isDone ?
                                                    // TODO: determine which cases actually cause this to happen
                                                    // TODO: Need to do centering style
                                                    <form onSubmit={this.handleSubmit}>
                                                        <label className="login-label tkFont1 tkFont-Form">
                                                            Great! <br/> Now Change new password</label>
                                                        <input
                                                            name="newPassword"
                                                            style={{textAlign: "left", paddingLeft: "0px"}}
                                                            value={this.state.newPassword}
                                                            onChange={this.handleChange}
                                                            type="password"
                                                            placeholder="New password"
                                                            required=""/>
                                                        <input
                                                            name="confirmNewPassword"
                                                            value={this.state.confirmNewPassword}
                                                            onChange={this.handleChange}
                                                            type="password"
                                                            style={{textAlign: "left", paddingLeft: "0px"}}
                                                            placeholder="Confirm new password"
                                                            required=""/>
                                                        <div style={{display: "flex"}}>
                                                            <div className="column one" style={{margin: "0 1% 0px"}}>
                                                                <input type="submit" value="Confirm" id="submit"/>
                                                            </div>
                                                            <div className="column one" style={{margin: " 0 1% 0px"}}>
                                                                <input type="reset" value="Cancel"
                                                                       onClick={this.reset}/>
                                                            </div>
                                                        </div>
                                                        <div className="login-action error-message ng-binding">
                                                        <span className="tkFontSmall" style={{color: "#ff0088"}}>
                                                            {this.state.errorMessage}
                                                        </span>
                                                        </div>
                                                    </form> :
                                                    //TODO: need button to click and go to home page of Gorgias
                                                    <div className="login-action error-message ng-binding">
                                                        <span className="tkFontSmall" style={{color: "#ff0088"}}>
                                                            {this.state.errorMessage}
                                                        </span>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
