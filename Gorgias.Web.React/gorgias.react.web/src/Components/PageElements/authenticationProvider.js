/**
 * Created by yasser on 1/11/2018.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

export default function (ComposedComponent) {
    class AuthenticationProvider extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isAuthenticated: false,
            };
            console.log(this.context, 'this.context login');
            console.log(this.props.authentication, 'authentication')
        }

        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            console.log(this.props.authentication, 'WillMount');
            if (this.props.authentication !== undefined) {
                if (!this.props.authentication.isAuthenticated) {
                    this.context.router.history.push('/login');
                }
            }
        }

        componentWillUpdate(nextProps) {
            console.log('componentWillUpdate', this.props.authentication);
            if (this.props.authentication !== undefined || nextProps.authentication !== undefined) {
                if (nextProps.authentication.isAuthenticated !== this.props.authentication.isAuthenticated) {
                    if (!nextProps.authentication.isAuthenticated) {
                        this.context.router.history.push('/login');
                    } else {
                        this.context.router.history.push('/');
                    }
                }
            }
        }

        render() {
            console.log(this.context, this.props.authentication, 'Rendering', ComposedComponent);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        console.log(state.authentication.authentication, 'authentication')
        return {authentication: state.authentication.authentication.payload}
    }

    return connect(mapStateToProps)(AuthenticationProvider);
}