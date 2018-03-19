/**
 * Created by odenza on 19/02/2018.
 */
/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import {Field, FieldArray, getIn, withFormik} from "formik";
import Yup from "yup";

import CustomSelect from "../../../PageElements/Form/CustomSelect";
import CustomTextInput from "../../../PageElements/Form/CustomTextInput";
import CustomAutocomplete from "../../../PageElements/Form/CustomAutocomplete";
import CustomInputFieldComponent from "../../../PageElements/Form/CustomInputFieldComponent";
import CustomTextAreaFieldComponent from "../../../PageElements/Form/CustomTextAreaFieldComponent";
import CustomDropZone from "../../../PageElements/Form/CustomDropZone";
import RowLayout from "../../../PageElements/Form/RowLayout";
import dateFormat from "dateformat";

const ErrorMessage = ({name}) => (
    <Field
        name={name}
        render={({form}) => {
            const error = getIn(form.errors, name);
            const touch = getIn(form.touched, name);
            return touch && error ? <p className={`error`}>{error}</p> : null;
        }}
    />
);

const storyForm = props => {
    const {
        values,
        touched,
        dirty,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
        onDrop,
        arrayHelpers,
        newContent,
        newTextContent,
        newCTAContent,
        newYotubeContent,
        isNew,
        contentTypes,
        storyOptions,
        ProfileIsConfirmed,
    } = props;
    let dropZone;
    return (
        <form onSubmit={handleSubmit}>
            <FieldArray
                name="Contents"
                render={arrayHelpers => (
                    values.Contents && values.Contents.length > 0 ?

                        (<div>
                                {values.Contents.map((content, index) => (
                                        <div key={index}
                                             style={{
                                                 width: '70%',
                                                 margin: '7px auto',
                                                 marginTop: '14px',
                                             }}>
                                            <a
                                                className="button"
                                                style={{
                                                    margin: '0px',
                                                    overflow: 'inherit',
                                                    border: '1px solid rgba(0, 0, 0, 0.07)',
                                                    borderBottom: '0px',
                                                }}
                                                onClick={() => arrayHelpers.remove(index)}
                                            >
                                                X
                                            </a>
                                            <div
                                                style={{
                                                    width: '100%',
                                                    margin: '0px auto',
                                                    textAlign: 'center',
                                                    padding: '7px',
                                                    border: '1px solid rgba(0, 0, 0, 0.07)',
                                                }}>


                                                <div className={`story-section`}
                                                     style={{textAlign: 'right'}}>

                                                </div>
                                                {content.ContentTypeID === 1 ?
                                                    <div className={`story-section`}>
                                                        <Field name={`Contents.${index}.ContentURL`}
                                                               render={({field, /* _form */}) =>
                                                                   <CustomDropZone
                                                                       error={errors.ContentURL}
                                                                       touched={touched.ContentURL}
                                                                       valueName={`Contents.${index}.ContentURL`}
                                                                       value={field.value}
                                                                       onChange={setFieldValue}
                                                                       onBlur={setFieldTouched}
                                                                       isUploading={true}
                                                                       prefix="hottest-"
                                                                       photoType="album"
                                                                   />
                                                               }/>

                                                        <Field name={`Contents.${index}.ContentTitle`}
                                                               component={CustomInputFieldComponent}/>
                                                        <ErrorMessage name={`Contents.${index}.ContentTitle`}/>
                                                    </div>
                                                    : null
                                                }

                                                {content.ContentTypeID === 3 ?
                                                    <div className={`story-section`}>
                                                        <Field name={`Contents.${index}.ContentTitle`}
                                                               component={CustomInputFieldComponent}/>
                                                        <ErrorMessage name={`Contents.${index}.ContentTitle`}/>
                                                        <Field name={`Contents.${index}.ContentURL`}
                                                               component={CustomTextAreaFieldComponent}/>
                                                        <ErrorMessage name={`Contents.${index}.ContentURL`}/>
                                                    </div>
                                                    : null
                                                }

                                                {content.ContentTypeID === 10 ?
                                                    <div className={`story-section`}>
                                                        Youtube
                                                        <Field name={`Contents.${index}.ContentTitle`}
                                                               component={CustomInputFieldComponent}/>
                                                        <ErrorMessage name={`Contents.${index}.ContentTitle`}/>
                                                        <Field name={`Contents.${index}.ContentURL`}
                                                               component={CustomInputFieldComponent}/>
                                                        <ErrorMessage name={`Contents.${index}.ContentURL`}/>
                                                    </div>
                                                    : null
                                                }

                                                {content.ContentTypeID !== 10 && content.ContentTypeID !== 3 && content.ContentTypeID !== 1 ?
                                                    <div className={`story-section`}>
                                                        CTA
                                                        <Field component="select" name={`Contents.${index}.ContentTitle`}>
                                                            {
                                                                contentTypes.map((contentType, index) => {
                                                                    return <option
                                                                        value={contentType.ContentTypeID}>{contentType.ContentTypeName}</option>
                                                                })
                                                            }
                                                        </Field>

                                                        <Field name={`Contents.${index}.ContentURL`}
                                                               component={CustomInputFieldComponent}/>
                                                        <ErrorMessage name={`Contents.${index}.ContentURL`}/>
                                                    </div>
                                                    : null
                                                }

                                            </div>
                                        </div>
                                    )
                                )}

                                <div
                                    style={{textAlign: 'center'}}>
                                    {/*<div>*/}
                                    {/*<Dropzone ref={(node) => { dropZone = node; }} onDrop={(accepted, rejected) => {*/}
                                    {/*console.log(accepted,'files haha');*/}
                                    {/*let arr = [];*/}
                                    {/*accepted.map((file, index) => {*/}
                                    {/*let content = newContent;*/}
                                    {/*content.ContentURL = file.preview;*/}
                                    {/*console.log(content, 'insert content bulk ;)', values.Contents.length + index);*/}
                                    {/*arr.push(content);*/}
                                    {/*arrayHelpers.insert(values.Contents.length + index, content);*/}
                                    {/*});*/}
                                    {/*}}>*/}
                                    {/*<p>Drop files here.</p>*/}
                                    {/*</Dropzone>*/}
                                    {/*<button type="button" onClick={() => { dropZone.open() }}>*/}
                                    {/*Open File Dialog*/}
                                    {/*</button>*/}
                                    {/*</div>*/}
                                    <button
                                        type="button"
                                        onClick={() => arrayHelpers.insert(values.Contents.length, newContent)}
                                    >
                                        Photo
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => arrayHelpers.insert(values.Contents.length, newTextContent)}
                                    >
                                        Text
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => arrayHelpers.insert(values.Contents.length, newCTAContent)}
                                    >
                                        CTA
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => arrayHelpers.insert(values.Contents.length, newYotubeContent)}
                                    >
                                        Youtube
                                    </button>
                                </div>

                            </div>

                        ) : (
                        <div
                            style={{textAlign: 'center'}}>
                            <button
                                type="button"
                                onClick={() => arrayHelpers.insert(0, newContent)}
                            >
                                Photo
                            </button>
                        </div>
                    )
                )}
            />


            <div
                style={{
                    width: '70%',
                    margin: '7px auto',
                    marginTop: '14px',
                }}>

                <RowLayout
                    left={
                        ProfileIsConfirmed ?
                            <CustomAutocomplete
                                label="Category"
                                valueName="Topic"
                                valueKey="KeyName"
                                KeyID="KeyID"
                                KeyName="KeyName"
                                value={values.Topic !== null ? values.Topic.CategoryName : ''}
                                onChange={setFieldValue}
                                onBlur={setFieldTouched}
                                url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Categories/Search/"
                            />
                            : null
                    }
                    right={
                        <CustomTextInput
                            id="AlbumDatePublish"
                            type="date"
                            label="Publish in"
                            placeholder="Enter your email"
                            // error={touched.ProfileEmail && errors.ProfileEmail}values.AlbumDatePublish
                            value={dateFormat(values.AlbumDatePublish, "yyyy-mm-dd")}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={!isNew}
                        />
                    }
                    margin={100}
                />

                <RowLayout
                    left={
                        <CustomSelect
                            valueName="ContentRatingID"
                            value={values.ContentRatingID}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.ContentRatingID}
                            touched={touched.ContentRatingID}
                            disabled={false}
                            matchProp="KeyID"
                            valueKey="KeyID"
                            labelKey="KeyName"
                            label="Content Rating"
                            options={props.storyOptions[2].SettingCollection}
                        />
                    }
                    right={
                        <CustomSelect
                            valueName="AlbumAvailability"
                            value={values.AlbumAvailability}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.AlbumAvailability}
                            touched={touched.AlbumAvailability}
                            disabled={!isNew}
                            matchProp="KeyID"
                            valueKey="KeyID"
                            labelKey="KeyName"
                            label="Expires in"
                            options={props.storyOptions[3].SettingCollection}
                        />
                    }
                />

                <RowLayout
                    left={
                        <CustomSelect
                            valueName="AlbumReadingLanguageCode"
                            value={values.AlbumReadingLanguageCode}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.AlbumReadingLanguageCode}
                            touched={touched.AlbumReadingLanguageCode}
                            disabled={false}
                            matchProp="KeyExtra"
                            valueKey="KeyExtra"
                            labelKey="KeyName"
                            label="Language"
                            options={props.storyOptions[0].SettingCollection}
                        />
                    }
                    right={
                        <CustomSelect
                            valueName="CategoryID"
                            value={values.CategoryID}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.CategoryID}
                            touched={touched.CategoryID}
                            disabled={false}
                            matchProp="KeyID"
                            valueKey="KeyID"
                            labelKey="KeyName"
                            label="Topic"
                            options={props.storyOptions[1].SettingCollection}
                        />
                    }
                />

                <RowLayout
                    left={
                        <CustomTextInput
                            id="AlbumHasComment"
                            type="checkbox"
                            label="Allow comment"
                            // error={touched.ProfileEmail && errors.ProfileEmail}
                            value={values.AlbumHasComment}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            checked={values.AlbumHasComment !== null ? values.AlbumHasComment : false}
                        />
                    }
                    right={null}
                    margin={95}
                />

                <div
                    style={{textAlign: 'right'}}>

                    <button
                        type="button"
                        className="reset"
                        onClick={handleReset}
                    >
                        Reset
                    </button>

                    <button type="submit" className={`submit`} disabled={isSubmitting}>
                        Submit
                    </button>

                </div>
            </div>
        </form>
    )
        ;
};

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        AlbumAvailability: Yup.number()
            .required("expire need"),
        AlbumReadingLanguageCode: Yup.string()
            .required("Language need"),
        ContentRatingID: Yup.number()
            .required("ContentRatingID need"),
        Contents: Yup.array()
            .of(
                Yup.object().shape({
                    ContentURL: Yup.string()
                        .when('ContentTypeID', {
                            is: 1,  // alternatively: (val) => val == true
                            then: Yup.string().min(5),
                        })
                        .when('ContentTypeID', {
                            is: 3,  // alternatively: (val) => val == true
                            then: Yup.string().min(10),
                        })
                        .when('ContentTypeID', {
                            is: 10,  // alternatively: (val) => val == true
                            then: Yup.string().matches(/(youtube|bye)/, {
                                message: 'https valid only',
                                excludeEmptyString: true
                            }),
                        })
                        .when('ContentTypeID', (ContentTypeID, schema) => {
                            if (ContentTypeID !== 10 && ContentTypeID !== 3 && ContentTypeID !== 1) {
                                return schema.matches(/(https|bye)/, {
                                    message: 'https valid only',
                                    excludeEmptyString: true
                                })
                            }
                        })
                        // .when('ContentTypeID', {
                        //     is: 10,  // alternatively: (val) => val == true
                        //     then:      Yup.string().matches(/(https|bye)/, { message:'https valid only', excludeEmptyString: true }),
                        // })
                        .required('Required'), // these constraints take precedence
                    ContentTitle: Yup.string()
                        .required('wowowowowowow'),
                    ContentTypeID: Yup.number(),
                    ContentDimension: Yup.string().nullable(),
                    ContentGeoLocation: Yup.string().nullable(),
                    ContentID: Yup.number().nullable(),
                    // .required('Required'), // these constraints take precedence
                })
            ).required('Must have friends')

        // ProfileFullname: Yup.string()
        //     .min(2, "C'mon, your name is longer than that")
        //     .required('First name is required.'),
        // ProfileFullnameEnglish: Yup.string()
        //     .min(2, "C'mon, your name is longer than that")
        //     .required('Last name is required.'),
        // ProfileEmail: Yup.string()
        //     .email('Invalid email address')
        //     .required('Email is required!'),
        // ProfileDescription: Yup.string()
        //     .min(70, "C'mon, your name is longer than that"),
        // ProfileShortDescription: Yup.string()
        //     .min(70, "C'mon, your name is longer than that"),
        // SubscriptionTypeID: Yup.number()
        //     .required('Subscription is required'),
        // ProfilePhoto: Yup.string()
        //     .required('where is the photo'),
    }),
    // validate: (values, props) => {
    //     const errors = {};
    //     console.log(values, 'validate');
    //     if(values.Contents.length > 2){
    //         errors.Contents = 'need more photos';
    //     }
    //     // if (!values.email) {
    //     //     errors.email = 'Required';
    //     // } else if (
    //     //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //     // ) {
    //     //     errors.email = 'Invalid email address';
    //     // }
    //     return errors;
    // },
    mapPropsToValues: ({user}) => ({
        ...user,
    }),
    handleSubmit: (payload, {setSubmitting, props}) => {
        console.log(payload, 'formikEnhancer');
        setSubmitting(false);
        props.handleSubmit(payload);
    },
    displayName: 'ProfileForm',
    enableReinitialize: true,
});

const StoryForm = formikEnhancer(storyForm);
export default StoryForm;