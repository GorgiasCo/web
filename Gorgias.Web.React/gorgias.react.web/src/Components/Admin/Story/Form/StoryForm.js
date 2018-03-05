/**
 * Created by odenza on 19/02/2018.
 */
/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import {withFormik, Formik, Form, Field, FieldArray} from "formik";
import Yup from "yup";

import CustomSelect from "../../../PageElements/Form/CustomSelect";
import CustomAsyncSelect from "../../../PageElements/Form/CustomAsyncSelect";
import CustomTextInput from "../../../PageElements/Form/CustomTextInput";
import CustomInputFieldComponent from "../../../PageElements/Form/CustomInputFieldComponent";
import CustomDropZone from "../../../PageElements/Form/CustomDropZone";
import CustomAutocomplete from "../../../PageElements/Form/CustomAutocomplete";

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
        isNew,
        contentTypes,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            {/*<CustomTextInput*/}
            {/*id="ProfileFullname"*/}
            {/*type="text"*/}
            {/*label="Fullname"*/}
            {/*placeholder="John"*/}
            {/*error={touched.ProfileFullname && errors.ProfileFullname}*/}
            {/*value={values.ProfileFullname}*/}
            {/*onChange={handleChange}*/}
            {/*onBlur={handleBlur}*/}
            {/*/>*/}
            {/*<CustomTextInput*/}
            {/*id="ProfileFullnameEnglish"*/}
            {/*type="text"*/}
            {/*label="English Fullname"*/}
            {/*placeholder="Doe"*/}
            {/*error={touched.ProfileFullnameEnglish && errors.ProfileFullnameEnglish}*/}
            {/*value={values.ProfileFullnameEnglish}*/}
            {/*onChange={handleChange}*/}
            {/*onBlur={handleBlur}*/}
            {/*/>*/}
            {/*<CustomTextInput*/}
            {/*id="ProfileDescription"*/}
            {/*type="text"*/}
            {/*label="Description"*/}
            {/*placeholder="long bio"*/}
            {/*error={touched.ProfileDescription && errors.ProfileDescription}*/}
            {/*value={values.ProfileDescription}*/}
            {/*onChange={handleChange}*/}
            {/*onBlur={handleBlur}*/}
            {/*/>*/}
            {/*<CustomTextInput*/}
            {/*id="ProfileShortDescription"*/}
            {/*type="text"*/}
            {/*label="Short Description"*/}
            {/*placeholder="Bio"*/}
            {/*error={touched.ProfileShortDescription && errors.ProfileShortDescription}*/}
            {/*value={values.ProfileShortDescription}*/}
            {/*onChange={handleChange}*/}
            {/*onBlur={handleBlur}*/}
            {/*/>*/}
            {/*<CustomTextInput*/}
            {/*id="ProfileURL"*/}
            {/*type="text"*/}
            {/*label="Profile Web URL"*/}
            {/*placeholder="URL"*/}
            {/*// error={touched.ProfileURL && errors.ProfileURL}*/}
            {/*value={values.ProfileURL}*/}
            {/*onChange={handleChange}*/}
            {/*onBlur={handleBlur}*/}
            {/*/>*/}
            {/*<CustomTextInput*/}
            {/*id="ProfileEmail"*/}
            {/*type="email"*/}
            {/*label="Email"*/}
            {/*placeholder="Enter your email"*/}
            {/*// error={touched.ProfileEmail && errors.ProfileEmail}*/}
            {/*value={values.ProfileEmail}*/}
            {/*onChange={handleChange}*/}
            {/*onBlur={handleBlur}*/}
            {/*disabled*/}
            {/*/>*/}
            {/*<CustomSelect*/}
            {/*valueName="SubscriptionTypeID"*/}
            {/*value={values.SubscriptionTypeID}*/}
            {/*onChange={setFieldValue}*/}
            {/*onBlur={setFieldTouched}*/}
            {/*error={errors.SubscriptionTypeID}*/}
            {/*touched={touched.SubscriptionTypeID}*/}
            {/*disabled={false}*/}
            {/*matchProp="value"*/}
            {/*valueKey="value"*/}
            {/*labelKey="label"*/}
            {/*label="Subscription"*/}
            {/*options={props.optionsProfileTypes}*/}
            {/*/>*/}
            {/*<CustomSelect*/}
            {/*valueName="ThemeID"*/}
            {/*value={values.ThemeID}*/}
            {/*onChange={setFieldValue}*/}
            {/*onBlur={setFieldTouched}*/}
            {/*error={errors.ThemeID}*/}
            {/*touched={touched.ThemeID}*/}
            {/*disabled={false}*/}
            {/*matchProp="value"*/}
            {/*valueKey="value"*/}
            {/*labelKey="label"*/}
            {/*label="Theme"*/}
            {/*options={props.optionsProfileTypes}*/}
            {/*/>*/}
            {/*<CustomAsyncSelect*/}
            {/*valueName="ProfileTypeID"*/}
            {/*value={values.ProfileTypeID}*/}
            {/*onChange={setFieldValue}*/}
            {/*onBlur={setFieldTouched}*/}
            {/*error={errors.ProfileTypeID}*/}
            {/*touched={touched.ProfileTypeID}*/}
            {/*disabled={false}*/}
            {/*matchProp="KeyID"*/}
            {/*valueKey="KeyID"*/}
            {/*labelKey="KeyName"*/}
            {/*label="Topics"*/}
            {/*url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/"*/}
            {/*/>*/}
            {/*<CustomAutocomplete*/}
            {/*valueName="category"*/}
            {/*valueKey="KeyName"*/}
            {/*KeyID="KeyID"*/}
            {/*KeyName="KeyName"*/}
            {/*value={values.category}*/}
            {/*onChange={setFieldValue}*/}
            {/*onBlur={setFieldTouched}*/}
            {/*url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/"*/}
            {/*/>*/}
            {/*<CustomDropZone*/}
            {/*error={errors.ProfilePhoto}*/}
            {/*touched={touched.ProfilePhoto}*/}
            {/*valueName="ProfilePhoto"*/}
            {/*onChange={setFieldValue}*/}
            {/*onBlur={setFieldTouched}*/}
            {/*>*/}
            {/*</CustomDropZone>*/}
            {/*<FriendList/>*/}

            <button
                type="button"
                onClick={() => values.Contents.push(newContent)}
            >
                +++
            </button>
            <FieldArray
                name="Contents"
                render={arrayHelpers => (
                    values.Contents && values.Contents.length > 0 ?

                        (<div>
                                <button
                                    type="button"
                                    onClick={() => arrayHelpers.insert(values.Contents.length, newContent)}
                                >
                                    ++++++++
                                </button>

                                {values.Contents.map((friend, index) => (
                                        <div key={index}>

                                            {friend.ContentTypeID === 1 ?
                                                <div>
                                                    <Field name={`Contents.${index}.ContentTitle`}
                                                           component={CustomInputFieldComponent}/>
                                                    <Field name={`Contents.${index}.ContentURL`}
                                                           render={({field, /* _form */}) =>
                                                               <img {...field} src={field.value} style={{width: 200}}/>
                                                           }/>
                                                    <CustomDropZone
                                                        error={errors.ContentURL}
                                                        touched={touched.ContentURL}
                                                        valueName={`Contents.${index}.ContentURL`}
                                                        onChange={setFieldValue}
                                                        onBlur={setFieldTouched}
                                                        isUploading={true}
                                                    >
                                                    </CustomDropZone>
                                                </div>
                                                : null
                                            }

                                            {friend.ContentTypeID === 3 ?
                                                <div>
                                                    <Field name={`Contents.${index}.ContentTitle`}
                                                           component={CustomInputFieldComponent}/>
                                                    <Field name={`Contents.${index}.ContentURL`}
                                                           component={CustomInputFieldComponent}/>
                                                </div>
                                                : null
                                            }

                                            {friend.ContentTypeID === 10 ?
                                                <div>
                                                    Youtube
                                                    <Field name={`Contents.${index}.ContentTitle`}
                                                           component={CustomInputFieldComponent}/>
                                                    <Field name={`Contents.${index}.ContentURL`}
                                                           component={CustomInputFieldComponent}/>
                                                </div>
                                                : null
                                            }

                                            {friend.ContentTypeID !== 10 && friend.ContentTypeID !== 3 && friend.ContentTypeID !== 1  ?
                                                <div>
                                                    CTA
                                                    {/*<Field name={`Contents.${index}.ContentTitle`}*/}
                                                           {/*component={CustomInputFieldComponent}/>*/}

                                                    <Field component="select" name={`Contents.${index}.ContentTitle`}>
                                                        {
                                                            contentTypes.map((contentType, index) =>{
                                                                return <option value={contentType.ContentTypeID}>{contentType.ContentTypeName}</option>
                                                            })
                                                        }
                                                    </Field>

                                                    <Field name={`Contents.${index}.ContentURL`}
                                                           component={CustomInputFieldComponent}/>
                                                </div>
                                                : null
                                            }

                                            {friend.ContentTypeID}
                                            <button
                                                type="button"
                                                className="button button-love"
                                                onClick={() => arrayHelpers.remove(index)}
                                            >
                                                -
                                            </button>

                                        </div>
                                    )
                                )}
                            </div>

                        ) : (
                            <button
                                type="button"
                                onClick={() => arrayHelpers.insert(0, newContent)}
                            >
                                ++++++++
                            </button>

                        )
                )}
            />

            <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
            >
                Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};

const formikEnhancer = withFormik({
    // validationSchema: Yup.object().shape({
    //     // ProfileFullname: Yup.string()
    //     //     .min(2, "C'mon, your name is longer than that")
    //     //     .required('First name is required.'),
    //     // ProfileFullnameEnglish: Yup.string()
    //     //     .min(2, "C'mon, your name is longer than that")
    //     //     .required('Last name is required.'),
    //     // ProfileEmail: Yup.string()
    //     //     .email('Invalid email address')
    //     //     .required('Email is required!'),
    //     // ProfileDescription: Yup.string()
    //     //     .min(70, "C'mon, your name is longer than that"),
    //     // ProfileShortDescription: Yup.string()
    //     //     .min(70, "C'mon, your name is longer than that"),
    //     // SubscriptionTypeID: Yup.number()
    //     //     .required('Subscription is required'),
    //     // ProfilePhoto: Yup.string()
    //     //     .required('where is the photo'),
    // }),

    mapPropsToValues: ({user}) => ({
        ...user,
    }),
    handleSubmit: (payload, {setSubmitting}) => {
        console.log(payload, 'formikEnhancer');
        setSubmitting(false);
    },
    displayName: 'ProfileForm',
});

const StoryForm = formikEnhancer(storyForm);
export default StoryForm;