/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Dropzone from "react-dropzone";
import httpRequest from "../../Global/HTTP/httpRequest";
import uuid from "uuid/v4";
import ReactImageFallback from "react-image-fallback";
import browserImageSize from 'browser-image-size';


export default class CustomDropZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isUploaded: false,
            file: null,
        }
        console.log(props, 'CustomDropZone');
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

            browserImageSize(value[0].preview)
                .then(
                    response => {
                        let size = `${response.width}-${response.height}`;
                        console.log(response, 'image size');
                        if (this.props.isUploading) {
                            this.prepareUploadPhoto(value[0]).then(
                                response => {
                                    this.props.onChange(this.props.valueName, `${response.data.Result[0].FileUrl}?${size}`);
                                    this.setState({isUploaded: true});
                                    console.log(response, 'upload response ;)');
                                },
                                error => {
                                    console.log(error, 'upload error');
                                }
                            )
                        } else {
                            this.props.onChange(this.props.valueName, value[0]);
                            this.setState({isUploaded: true});
                        }
                    }
                );
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
                    style={{border: this.props.prefix !== "hottest-" ? '1px solid #e1e1e1' : '0px'}}
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
                        <div>
                            <ReactImageFallback
                                src={this.props.prefix !== "hottest-" && file !== null ? file.preview : this.props.value}
                                style={{
                                    width: this.props.prefix === "hottest-" ? '100%' : '130px',
                                    padding: this.props.prefix === "hottest-" ? '0px' : '11px',
                                }}
                                fallbackImage="tkImages/1_Discover_Gorgias.png"
                                initialImage="tkImages/1_Discover_Gorgias.png"
                                alt={isUploaded.toString()}
                            />
                            {this.props.prefix !== "hottest-" ?
                                <p style={{
                                    textAlign: 'center',
                                    margin: 0,
                                    fontSize: 17,
                                }}>
                                    {this.props.defaultCaption !== undefined ?
                                        this.props.defaultCaption :
                                        "Try dropping some files here, or click to\n" +
                                        "                        select files to upload."}
                                </p>
                                : null}
                        </div>
                    }
                </Dropzone>
                {!!this.props.error &&
                this.props.touched && (
                    <div style={{color: 'red', marginTop: '.5rem'}}>
                        {this.props.error}
                    </div>
                )}
                {isUploaded ? <i style={{
                    textAlign: 'center',
                    color: 'red',
                    padding: '3px 11px',
                }}>{this.props.uploadedCaption}</i> : null}
            </div>
        );
    }
}
