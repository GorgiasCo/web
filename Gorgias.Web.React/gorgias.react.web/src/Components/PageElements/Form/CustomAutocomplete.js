/**
 * Created by odenza on 19/02/2018.
 */
/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Select from "react-select";
import axios from "axios";
import Autocomplete from "react-autocomplete";

let values = [{KeyName: '', KeyID: 0}];

export default class CustomAutocomplete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null,
            input: '',
            values: [{KeyName: '', KeyID: 0}],
        };
    }

    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value[this.props.valueKey], '22 CustomAutocomplete', value);
            // this.setState({input: value});
            this.props.onChange(this.props.valueName, value.value);
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    getContributors = (input) => {
        //this.setState({input});
        console.log(input, 'NIMA');
        // const url = "https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/" + input;
        const url = this.props.url + input;
        axios({
            method: 'get',
            url: url,
        })
            .then(response => {
                const responseBody = response;
                console.log(responseBody, input, 'in action story success ;) NIMA');
                // values = response.data.Result;
                this.setState({values: response.data.Result});
                this.props.onChange(this.props.valueName, input);
            })
            .catch(error => {
                console.log(error, input, 'in action story error ;)');
                // dispatch(authenticationAction.logout());
            });
    }

    conditionForRendering = (item, value) => {
        if (value.value !== undefined) {
            console.log(value.value, value.toString().toLowerCase(), 'lowercase', item[this.props.KeyName].toLowerCase().indexOf(value.value.toString().toLowerCase()) > -1);
            return item[this.props.KeyName].toLowerCase().indexOf(value.toString().toLowerCase()) > -1;
        }
        return true;
    }

    render() {
        return (
            <div style={{margin: '1rem 0'}}>
                <label htmlFor="color">
                    {this.props.label}
                </label>
                <Autocomplete
                    items={this.state.values}
                    shouldItemRender={(item, value) => this.conditionForRendering(item, value)}
                    getItemValue={item => item[this.props.KeyName]}
                    renderItem={(item, highlighted) =>
                        <div
                            key={item[this.props.KeyID]}
                            style={{backgroundColor: highlighted ? '#eee' : 'transparent'}}
                        >
                            {item[this.props.KeyName]}
                        </div>
                    }
                    value={this.props.value}
                    onChange={e => this.getContributors(e.target.value)}
                    onSelect={value => this.handleChange({value})}
                />
                {/*<Select.Async*/}
                {/*id="color"*/}
                {/*multi={false}*/}
                {/*loadOptions={this.getContributors}*/}
                {/*onChange={this.handleChange}*/}
                {/*onBlur={this.handleBlur}*/}
                {/*value={this.props.value}*/}
                {/*valueKey={this.props.valueKey}*/}
                {/*labelKey={this.props.labelKey}*/}
                {/*matchProp={this.props.matchProp}*/}
                {/*disabled={this.props.disabled}*/}
                {/*/>*/}
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