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
import RowLayout from "../../../PageElements/Form/RowLayout";
import dateFormat from "dateformat";
import Button from 'material-ui/Button';

const profileForm = props => {
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
        arrayHelpers
    } = props;
    return (
        <form onSubmit={handleSubmit}>

            <RowLayout
                left={
                    <CustomTextInput
                        id="ProfileFullname"
                        type="text"
                        label="Fullname"
                        placeholder="John"
                        error={touched.ProfileFullname && errors.ProfileFullname}
                        value={values.ProfileFullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
                right={
                    <CustomTextInput
                        id="ProfileFullnameEnglish"
                        type="text"
                        label="English Fullname"
                        placeholder="Doe"
                        error={touched.ProfileFullnameEnglish && errors.ProfileFullnameEnglish}
                        value={values.ProfileFullnameEnglish}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
            />

            <RowLayout
                left={
                    <CustomTextInput
                        id="ProfileEmail"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        error={touched.ProfileEmail && errors.ProfileEmail}
                        value={values.ProfileEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled
                    />
                }
                right={
                    <CustomTextInput
                        id="ProfileURL"
                        type="text"
                        label="Profile Web URL"
                        placeholder="URL"
                        error={touched.ProfileURL && errors.ProfileURL}
                        value={values.ProfileURL}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled
                    />
                }
            />

            <RowLayout
                left={
                    <CustomTextInput
                        id="ProfileBirthday"
                        type="date"
                        label="Birthday"
                        placeholder="Enter your birthday"
                        error={touched.ProfileBirthday && errors.ProfileBirthday}
                        value={dateFormat(values.ProfileBirthday, "yyyy-mm-dd")}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
                right={
                    null
                }
                margin={100}
            />

            <RowLayout
                left={
                    <CustomAsyncSelect
                        valueName="IndustryID"
                        value={values.IndustryID}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.IndustryID}
                        touched={touched.IndustryID}
                        disabled={false}
                        isSingleValue = {false}
                        matchProp="KeyID"
                        valueKey="KeyID"
                        labelKey="KeyName"
                        label="Profession"
                        url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/v2/Industries/"
                    />
                }
                right={
                    <CustomSelect
                        valueName="ProfileTypeID"
                        value={values.ProfileTypeID}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.ProfileTypeID}
                        touched={touched.ProfileTypeID}
                        disabled={false}
                        matchProp="KeyID"
                        valueKey="KeyID"
                        labelKey="KeyName"
                        label="Profile Type"
                        options={props.optionsProfileTypes}
                    />
                }
            />

            <RowLayout
                left={
                    <CustomTextInput
                        id="ProfileShortDescription"
                        type="text"
                        label="Bio"
                        placeholder="Bio"
                        error={touched.ProfileShortDescription && errors.ProfileShortDescription}
                        value={values.ProfileShortDescription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isTextArea={true}
                    />
                }
                right={
                    null
                }
                margin={100}
            />



            {/*<RowLayout*/}
                {/*left={*/}
                    {/*<CustomAsyncSelect*/}
                        {/*valueName="ProfileTypeIIID"*/}
                        {/*value={values.ProfileTypeIIID}*/}
                        {/*onChange={setFieldValue}*/}
                        {/*onBlur={setFieldTouched}*/}
                        {/*error={errors.ProfileTypeIIID}*/}
                        {/*touched={touched.ProfileTypeIIID}*/}
                        {/*disabled={false}*/}
                        {/*isSingleValue = {false}*/}
                        {/*matchProp="KeyID"*/}
                        {/*valueKey="KeyID"*/}
                        {/*labelKey="KeyName"*/}
                        {/*label="Topics"*/}
                        {/*url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/"*/}
                    {/*/>*/}
                {/*}*/}
                {/*right={*/}
                    {/*null*/}
                {/*}*/}
                {/*margin={100}*/}
            {/*/>*/}

            <RowLayout
                left={
                    <CustomDropZone
                        error={errors.ProfilePhoto}
                        touched={touched.ProfilePhoto}
                        valueName="ProfilePhoto"
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                        isUploading={true}
                        prefix="profile-"
                        photoName={`profile-${values.ProfileID}.jpg`}
                        value={`https://gorgiasasia.blob.core.windows.net/images/profile-${values.ProfileID}.jpg`}
                        photoType="profile"
                        defaultCaption={`Drop Profile Photo here`}
                        uploadedCaption={`uploaded wow`}
                    />
                }
                right={
                    <CustomDropZone
                        error={errors.ProfileWebPhoto}
                        touched={touched.ProfileWebPhoto}
                        valueName="ProfileWebPhoto"
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                        isUploading={true}
                        prefix="mobile-"
                        photoName={`mobile-${values.ProfileID}`}
                        value={`https://gorgiasasia.blob.core.windows.net/images/mobile-${values.ProfileID}`}
                        photoType="profile"
                        defaultCaption={`Drop Profile Web Photo here`}
                        uploadedCaption={`uploaded wow`}
                    />
                }
                margin={100}
            />

            <RowLayout
                left={
                    <CustomDropZone
                        error={errors.ProfileCoverPhoto}
                        touched={touched.ProfileCoverPhoto}
                        valueName="ProfileCoverPhoto"
                        onChange={setFieldValue}
                        onBlur={handleBlur}
                        isUploading={true}
                        value={`https://gorgiasasia.blob.core.windows.net/images/mobileprofile-${values.ProfileID}`}
                        prefix="mobileprofile-"
                        photoName={`mobileprofile-${values.ProfileID}`}
                        photoType="profile"
                        defaultCaption={`Drop Profile Cover Photo here`}
                        uploadedCaption={`uploaded wow`}
                    />

                }
                right={
                    null
                }
                margin={100}
            />

            <div
                style={{textAlign: 'center'}}>
                <Button
                    type="button"
                    className="reset modern-button-grey font-db-theme-3 bold"
                    onClick={handleReset}
                    style={{margin:"5px"}}
                >
                    Reset
                </Button>

                <Button
                    type="submit"
                    className="submit modern-button-pink font-db-theme-3 bold"
                    variant="raised"
                    color="primary"
                    disabled={isSubmitting}
                    style={{margin:"5px"}}
                >
                    Submit
                </Button>

                {/*<button*/}
                    {/*type="submit"*/}
                    {/*disabled={isSubmitting}*/}
                    {/*className="submit"*/}
                {/*>*/}
                    {/*Submit*/}
                {/*</button>*/}
            </div>
        </form>
    );
};

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        ProfileFullname: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('First name is required.'),
        ProfileFullnameEnglish: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('Last name is required.'),
        ProfileEmail: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        ProfileDescription: Yup.string()
            .min(70, "C'mon, your name is longer than that"),
        ProfileShortDescription: Yup.string()
            .min(70, "C'mon, your name is longer than that"),
        ProfileTypeID: Yup.number()
            .required('Subscription is required'),
        ProfilePhoto: Yup.string()
            .required('where is the photo'),
    }),

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

const ProfileForm = formikEnhancer(profileForm);
export default ProfileForm;
