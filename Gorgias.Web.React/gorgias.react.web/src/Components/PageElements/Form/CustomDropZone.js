/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Dropzone from "react-dropzone";
import httpRequest from "../../Global/HTTP/httpRequest";
import uuid from 'uuid/v4';


export default class CustomDropZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUploaded: false,
            file: null,
        }
        console.log(props,'CustomDropZone');
    }

    prepareUploadPhoto = async (data) => {
        let photoName = `${this.props.prefix + uuid()}.jpg`; //data.name;
        if (this.props.photoName !== undefined) {
            photoName = this.props.photoName; //data.name;
        }

        console.log(data, 'prepareUploadPhoto', photoName);

        let body = new FormData();
        body.append('file', data);
        body.append('name', photoName);

        // var fetchResult = await axios.post('http://localhost:43587/api/images/name?ImageName=' + photoName + '&MasterFileName=address',body);
        var fetchResult = await httpRequest.uploadPhoto(photoName, this.props.photoType, body);
        console.log(fetchResult, 'prepareUploadPhoto yasser');
        return fetchResult;
    }

    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        if (value !== null) {
            console.log(value, 'handleChange MySelect');
            if (this.props.isUploading) {
                this.prepareUploadPhoto(value[0]).then(
                    response => {
                        this.props.onChange(this.props.valueName, response.data.Result[0].FileUrl);
                        this.setState({isUploaded: true});
                        console.log(response, 'upload response ;)');
                    },
                    error => {
                        console.log(error, 'upload error');
                    }
                )
            } else {
                this.props.onChange(this.props.valueName, value[0].preview);
                this.setState({isUploaded: true});
            }
        }
        this.setState({file: value[0]})
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur(this.props.valueName, true);
    };

    render() {
        const {file, isUploaded} = this.state;
        return (
            <div style={{margin: '0'}}>
                <label htmlFor="color">
                    {this.props.label}
                </label>
                <Dropzone
                    multiple={false}
                    accept="image/jpeg, image/png, image/jpg"
                    className={`dropzoneCustom`}
                    onDrop={this.handleChange}
                >
                    {this.props.value === '' ?
                        <p style={{
                            textAlign: 'center',
                            margin: 42,
                            fontSize: 17,
                        }}>
                            {this.props.defaultCaption !== undefined ?
                                this.props.defaultCaption :
                                "Try dropping some files here, or click to\n" +
                                "                        select files to upload."}
                        </p> :
                        <img
                            src={this.props.value}
                            style={{width: '100%'}}
                        />
                    }
                </Dropzone>
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>
                        {this.props.error}
                    </div>
                )}
                {isUploaded ? <h3>{this.props.uploadedCaption}</h3> : null}
            </div>
        );
    }
}
