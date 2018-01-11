/**
 * Created by yasser on 1/11/2018.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class AuthenticationProvider extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount(){
            if(!this.props.authentication){
                this.context.router.history.push('/about');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authentication){
                this.context.router.history.push('/about');
            }
        }

        render(){
            console.log(this.context,this.props.authentication,'Rendering', ComposedComponent);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return { authentication: state.authentication.authentication.payload}
    }

    return connect (mapStateToProps)(AuthenticationProvider);
}