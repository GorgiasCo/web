/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Select from "react-select";
import axios from "axios";

export default class CustomAsyncSelect extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value[this.props.valueKey], 'handleChange MySelect');
            this.props.onChange(this.props.valueName, value[this.props.valueKey]);
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    getContributors = (input, callback) => {
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
                    {this.props.label}
                </label>
                <Select.Async
                    id="color"
                    multi={false}
                    loadOptions={this.getContributors}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                    valueKey={this.props.valueKey}
                    labelKey={this.props.labelKey}
                    matchProp={this.props.matchProp}
                    disabled={this.props.disabled}
                />
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