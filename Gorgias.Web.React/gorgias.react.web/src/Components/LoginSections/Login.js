import React from "react";
import {connect} from "react-redux";
import * as authenticationActions from "../Actions/authentication/action";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "yaser2us@gmail.com",
            password: "cy830404",
        };
        console.log(this.context, 'this.context login');
    }

    handleSubmit = (event) => {

        console.log('handleSubmit');

        let languageCode = 'en';
        let parentLanguages = {signInError: "username or password is incorrect ;)"};

        let data = "grant_type=password&username=" + this.state.username + "&password=" + this.state.password;
        //let data = "grant_type=password&username=rad@gorgias.com&password=Rad1234567890";

        this.setState({hasError: false, errorText: '', isLoading: true});

        this.props.authenticationLogin({username: this.state.username, password: this.state.password});

        // axios({
        //     method: 'post',
        //     url: 'https://gorgiasapp-v3.azurewebsites.net/' + 'token',
        //     data: data,
        //     headers: {
        //         'Content-type': 'application/x-www-form-urlencoded',
        //         'Accept-Language': languageCode
        //     }
        // })
        //     .then(response => {
        //         this.setupUser(response)
        //     })
        //     .catch(error => {
        //         if (error.status === 200) {
        //             this.setupUser(error);
        //         } else {
        //             console.log(error, 'loginError');
        //             this.setState({
        //                 hasError: true,
        //                 errorText: parentLanguages.signInError,
        //                 isLoading: false,
        //                 isForgetPassword: false,
        //                 hasErrorForgetPassword: true,
        //             });
        //         }
        //     });
        event.preventDefault();
    }

    setupUser = (data) => {
        console.log(data, 'setupUser');
    }

    handleChange = (event) => {
        let name = event.target.name;
        this.setState({[name]: event.target.value});
        event.preventDefault();
    }

    render() {
        return (
            <div className="content_wrapper clearfix" style={{
                height: 100 + "vh",
                backgroundImage: "url(https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/0kjHIH6/glamorous-sparkling-sequins-in-a-silver-border-frame-with-flare-lights-and-particles-background_vs9pjap6l__F0000.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundSize: "cover",
                position: "sticky"
            }}>
                <div className="sections_group">
                    <div className="entry-content">
                        {/*login*/}
                        <div className="section dark" id="featured">
                            <div className="section_wrapper clearfix">
                                <div className="items_group clearfix" style={{height: 100 + "vh"}}>
                                    <div id="tk-modal-form" style={{color: "#de0083"}}>
                                        <div className="animate " data-anim-type="fadeIn">
                                            <div id="tk-overlay-form">
                                                <form onSubmit={this.handleSubmit}>
                                                    <label className="login-label tkFont1 tkFont-Form">Email:</label>
                                                    <i className="icon-user inputIcons"></i>
                                                    <input
                                                        name="username"
                                                        type="email"
                                                        style={{textAlign: "left"}}
                                                        placeholder="Username or email"
                                                        value={this.state.username}
                                                        onChange={this.handleChange}
                                                        required=""/>
                                                    <label className="login-label tkFont1 tkFont-Form">Password:</label>
                                                    <i className="icon-lock inputIcons"></i>
                                                    <input
                                                        name="password"
                                                        type="password"
                                                        style={{textAlign: "left"}}
                                                        placeholder="Password"
                                                        value={this.state.password}
                                                        onChange={this.handleChange}
                                                        required=""/>
                                                    <div className="column one" style={{margin: 0}}>
                                                        <input type="submit" value="Submit" id="submit"
                                                               className="tkFont-Bold"/>
                                                    </div>
                                                    <a href="#" className="forget" ng-click="toggleLayout(2)">Forgot
                                                        Password?</a>
                                                    {/*error messsage*/}
                                                    <div className="login-action error-message ng-binding">
                                                        <span className="tkFontSmall" style={{color: "#ff0088"}}>
                                                            <a>{this.state.errorMessage}</a>
                                                        </span>
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

const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps header login default admin');
    return {
        // You can now say this.props.books
        authentication: state.authentication.authentication
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        authenticationLogin: username => dispatch(authenticationActions.authentication(username)),
        authenticationLogout: () => dispatch(authenticationActions.logout()),
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Login);