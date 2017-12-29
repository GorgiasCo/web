import React from 'react';

export default class ResetPassword extends React.Component {

    baseForgetPasswordAPIURL = 'https://gorgiasapp-v3.azurewebsites.net/api/Account/Forget/';

    constructor(props) {
        super(props);
        this.state = {
            resetPasswordEmail: "",
        };
    }

    handleChange = (event) => {
        this.setState({resetPasswordEmail: event.target.value});
    }

    handleSubmit = (event) => {
        //alert('A name was submitted: ' + this.state.resetPasswordEmail);
        if (this.state.resetPasswordEmail == '') {
            this.setState({
                isLoading: false,
                errorMessage: 'Please key in an Email address',
                resetPasswordEmail: '',
            });
        } else {
            let forgetPasswordAPIURL = this.baseForgetPasswordAPIURL + this.state.resetPasswordEmail;
            fetch(forgetPasswordAPIURL)
                .then(function (response) {
                        return response.json();
                    }
                )
                .then(response => {
                        console.log(response);
                        let errorMessage = "Done, reset link has been sent now to your email.";
                        if (!response.Result) {
                            errorMessage = "Your email is not valid";
                        }
                        this.setState({
                            isLoading: false,
                            errorMessage: errorMessage,
                            resetPasswordEmail: '',
                        });
                    }
                );
        }
        event.preventDefault();
    }


    render() {
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
                                                <form onSubmit={this.handleSubmit}>
                                                    <label className="login-label tkFont1 tkFont-Form">
                                                        Reset Password</label>
                                                    <i className="icon-user inputIcons"></i>
                                                    <input type="email" style={{textAlign: "left"}}
                                                           value={this.state.resetPasswordEmail}
                                                           onChange={this.handleChange}
                                                           placeholder="Key in your email to reset password"
                                                           required=""/>

                                                    <div className="column one" style={{margin: 0}}>
                                                        <input type="submit" value="Reset" id="submit"
                                                               className="tkFont-Bold"/>
                                                        <a>{this.state.errorMessage}</a>
                                                    </div>
                                                </form>
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
