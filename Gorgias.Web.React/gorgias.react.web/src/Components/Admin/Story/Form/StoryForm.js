/**
 * Created by odenza on 19/02/2018.
 */
/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import {withFormik, Formik, Form, Field, FieldArray, getIn} from "formik";
import Yup from "yup";

import CustomSelect from "../../../PageElements/Form/CustomSelect";
import CustomAsyncSelect from "../../../PageElements/Form/CustomAsyncSelect";
import CustomTextInput from "../../../PageElements/Form/CustomTextInput";
import CustomInputFieldComponent from "../../../PageElements/Form/CustomInputFieldComponent";
import CustomTextAreaFieldComponent from "../../../PageElements/Form/CustomTextAreaFieldComponent";
import CustomDropZone from "../../../PageElements/Form/CustomDropZone";
import CustomAutocomplete from "../../../PageElements/Form/CustomAutocomplete";
import RowLayout from "../../../PageElements/Form/RowLayout";

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
    } = props;
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
                        <CustomAutocomplete
                            label="Category"
                            valueName="category"
                            valueKey="KeyName"
                            KeyID="KeyID"
                            KeyName="KeyName"
                            value={values.category}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/"
                        />
                    }
                    right={
                        <CustomTextInput
                            id="AlbumPublishDate"
                            type="date"
                            label="Publish in"
                            placeholder="Enter your email"
                            // error={touched.ProfileEmail && errors.ProfileEmail}
                            value={values.AlbumPublishDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            valueName="AvailabilityID"
                            value={values.AvailabilityID}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.AvailabilityID}
                            touched={touched.AvailabilityID}
                            disabled={false}
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
                            valueName="LanguageID"
                            value={values.LanguageID}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.LanguageID}
                            touched={touched.LanguageID}
                            disabled={false}
                            matchProp="KeyID"
                            valueKey="KeyID"
                            labelKey="KeyName"
                            label="Language"
                            options={props.storyOptions[0].SettingCollection}
                        />
                    }
                    right={
                        <CustomSelect
                            valueName="TopicID"
                            value={values.TopicID}
                            onChange={setFieldValue}
                            onBlur={setFieldTouched}
                            error={errors.TopicID}
                            touched={touched.TopicID}
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
    );
};

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
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
});

const StoryForm = formikEnhancer(storyForm);
export default StoryForm;