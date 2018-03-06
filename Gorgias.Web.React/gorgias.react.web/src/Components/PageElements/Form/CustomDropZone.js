/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Dropzone from "react-dropzone";
import httpRequest from "../../Global/HTTP/httpRequest";
import uuid from 'uuid/v4';


export default class CustomDropZone extends React.Component {

    prepareUploadPhoto = async (data) => {
        var photoName = `${this.props.prefix + uuid()}.jpg`; //data.name;
        console.log(data,'prepareUploadPhoto',photoName);

        let body = new FormData();
        body.append('file', data);
        body.append('name', photoName);

        // var fetchResult = await axios.post('http://localhost:43587/api/images/name?ImageName=' + photoName + '&MasterFileName=address',body);
        var fetchResult = await httpRequest.uploadPhoto(photoName,this.props.photoType,body);
        console.log(fetchResult, 'prepareUploadPhoto yasser');
        return fetchResult;
    }

    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        console.log(uuid(),'uuid');
        if (value !== null) {
            console.log(value, 'handleChange MySelect');
            if(this.props.isUploading){
                this.prepareUploadPhoto(value[0]).then(
                    response => {
                        this.props.onChange(this.props.valueName, response.data.Result[0].FileUrl);
                        console.log(response, 'upload response ;)');
                    },
                    error => {
                        console.log(error, 'upload error');
                    }
                )
            } else {
                this.props.onChange(this.props.valueName, value[0].preview);
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
                    {this.props.label}
                </label>
                <Dropzone
                    multiple={false}
                    accept="image/jpeg, image/png, image/jpg"
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
