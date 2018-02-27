/**
 * Created by yasser on 1/26/2018.
 */
/**
 * Created by yasser on 1/26/2018.
 */
import React, {Component} from "react";

export default function (ComposedComponent) {
    class ElementProvider extends Component {

        constructor(props) {
            super(props);
            this.state = {
                name: '',
            };
            this.handleInputChange = this.handleInputChange.bind(this)
        }

        componentWillMount() {

        }

        componentWillUpdate(nextProps) {

        }

        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;

            console.log(value, name, 'handleInputChange');

            this.setState({
                name: value
            });
        }

        render() {
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.handleInputChange
                }
            }

            console.log(this.context, 'Element Rendering', ComposedComponent);
            // return <ComposedComponent {...this.props} {...newProps} />
            return (
                <div>
                    <h5>{this.state.name}</h5>
                    <ComposedComponent {...this.props} {...newProps}/>
                </div>
            );
        }
    }

    // function mapStateToProps(state) {
    //     console.log(state.authentication.authentication, 'authentication')
    //     return {authentication: state.authentication.authentication}
    // }
    //
    // return connect(mapStateToProps)(EndlessLoadingProvider);
    return ElementProvider;
}