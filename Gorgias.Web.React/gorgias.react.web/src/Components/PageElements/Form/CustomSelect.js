/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Select from "react-select";

export default class CustomSelect extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value[this.props.valueKey], 'handleChange MySelect');
            if(this.props.isSingleValue === undefined){
                this.props.onChange(this.props.valueName, value[this.props.valueKey]);
            } else {
                this.props.onChange(this.props.valueName, {valueKey: value[this.props.valueKey], labelKey: value[this.props.labelKey]});
            }
        }
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    render() {
        return (
            <div style={{margin: '1rem 0'}}>
                <label htmlFor="color">
                    <i>{this.props.label}</i>
                </label>
                <Select
                    id="color"
                    options={this.props.options}
                    multi={false}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.isSingleValue === undefined ? this.props.value : this.props.value.valueKey}
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