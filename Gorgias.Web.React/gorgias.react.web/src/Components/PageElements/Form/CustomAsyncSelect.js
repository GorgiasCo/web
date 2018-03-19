/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Select from "react-select";
import axios from "axios";

export default class CustomAsyncSelect extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedItem: undefined,
        };
    }

    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value[this.props.valueKey], 'handleChange MySelect');

            if(this.props.isSingleValue === undefined){
                this.props.onChange(this.props.valueName, value[this.props.valueKey]);
                this.setState({selectedItem: value})
            } else {
                this.props.onChange(this.props.valueName, {valueKey: value[this.props.valueKey], labelKey: value[this.props.labelKey]});
                this.setState({selectedItem: {valueKey: value[this.props.valueKey], labelKey: value[this.props.labelKey]}})
            }

            // this.props.onChange(this.props.valueName, value[this.props.valueKey]);
            // this.setState({selectedItem: value})
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    getContributors = (input, callback) => {
        // if(input === ''){
        //     return;
        // }

        let selectedInput = input;
        if(this.props.isSingleValue !== undefined){
            selectedInput = input.valueKey
        }


        const url = this.props.url + input;

        const token = localStorage.getItem("token");
        let headers = null;

        if (token) {
            headers = {'Authorization': `Bearer ${token}`};
        }

        console.log(headers,'headers token');
        axios({
            method: 'get',
            url: url,
            headers: headers,
        })
            .then(response => {
                const responseBody = response;
                console.log(responseBody, input, 'in action story success ;) NIMA');

                var data = {
                    options: response.data.Result,
                    complete: 6,
                };

                callback(null, data);
            })
            .catch(error => {
                console.log(error, input, 'in action story error ;)');
                // dispatch(authenticationAction.logout());
            });
    }

    render() {
        return (
            <div style={{margin: '1rem 0'}}>
                <label htmlFor="color">
                    <i>{this.props.label}</i>
                </label>
                <Select.Async
                    id="color"
                    multi={false}
                    loadOptions={this.getContributors}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    // value={this.props.value}
                    value={this.props.isSingleValue === undefined ? this.props.value : this.props.value.valueKey}
                    valueKey={this.props.valueKey}
                    labelKey={this.props.labelKey}
                    matchProp={this.props.matchProp}
                    disabled={this.props.disabled}
                />
                <p style={{paddingTop:13,fontStyle:'italic'}}>
                    {this.props.hasCaption && this.state.selectedItem !== undefined ? this.state.selectedItem[this.props.labelKey] : null}
                </p>
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>
                        {this.props.error}
                    </div>
                )}
            </div>
        );
    }
}