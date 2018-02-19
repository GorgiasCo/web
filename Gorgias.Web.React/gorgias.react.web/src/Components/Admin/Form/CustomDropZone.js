/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Dropzone from "react-dropzone";


export default class CustomDropZone extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value, 'handleChange MySelect');
            this.props.onChange(this.props.valueName, value[0].preview);
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
                    {this.props.label}
                </label>
                <Dropzone
                    multiple={false}
                    onDrop={this.handleChange}>
                    <p>Try dropping some files here, or click to
                        select files to upload.</p>
                </Dropzone>
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
