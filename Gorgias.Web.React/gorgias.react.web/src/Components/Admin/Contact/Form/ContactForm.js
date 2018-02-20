/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import {withFormik, Formik, Form, Field, FieldArray} from "formik";
import Yup from "yup";

import CustomSelect from "../../Form/CustomSelect";
import CustomAsyncSelect from "../../Form/CustomAsyncSelect";
import CustomTextInput from "../../Form/CustomTextInput";
import CustomInputFieldComponent from "../../Form/CustomInputFieldComponent";
import CustomDropZone from "../../Form/CustomDropZone";

const contactForm = props => {
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
            <CustomTextInput
                id="AddressName"
                type="text"
                label="AddressName"
                placeholder="John"
                error={touched.AddressName && errors.AddressName}
                value={values.AddressName}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <CustomTextInput
                id="AddressTel"
                type="text"
                label="AddressTel"
                placeholder="Doe"
                error={touched.AddressTel && errors.AddressTel}
                value={values.AddressTel}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <CustomTextInput
                id="AddressFax"
                type="text"
                label="AddressFax"
                placeholder="AddressFax"
                error={touched.AddressFax && errors.AddressFax}
                value={values.AddressFax}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <CustomTextInput
                id="AddressEmail"
                type="email"
                label="AddressEmail"
                placeholder="Bio"
                error={touched.AddressEmail && errors.AddressEmail}
                value={values.AddressEmail}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <CustomTextInput
                id="AddressZipCode"
                type="text"
                label="AddressZipCode"
                placeholder="AddressZipCode"
                error={touched.AddressZipCode && errors.AddressZipCode}
                value={values.AddressZipCode}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <CustomTextInput
                id="AddressAddress"
                type="text"
                label="AddressAddress"
                placeholder="AddressAddress"
                error={touched.AddressAddress && errors.AddressAddress}
                value={values.AddressAddress}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <CustomSelect
                valueName="AddressTypeID"
                value={values.AddressTypeID}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.AddressTypeID}
                touched={touched.AddressTypeID}
                disabled={false}
                matchProp="value"
                valueKey="value"
                labelKey="label"
                label="AddressTypeID"
                options={props.optionsProfileTypes}
            />
            <CustomAsyncSelect
                valueName="CityID"
                value={values.CityID}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.CityID}
                touched={touched.CityID}
                disabled={false}
                matchProp="KeyID"
                valueKey="KeyID"
                labelKey="KeyName"
                label="CityID"
                url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Countries/"
            />
            <CustomDropZone
                error={errors.AddressPhoto}
                touched={touched.AddressPhoto}
                valueName="AddressPhoto"
                onChange={setFieldValue}
                onBlur={setFieldTouched}
            >
            </CustomDropZone>

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
    validationSchema: Yup.object().shape({
        AddressName: Yup.string()
            .min(2, "C'mon, your name is longer than that")
            .required('First name is required.'),
        AddressTel: Yup.string()
            .min(10, "C'mon, your name is longer than that")
            .required('Last name is required.'),
        AddressFax: Yup.string()
            .min(10, "C'mon, your name is longer than that")
            .nullable(),
        AddressEmail: Yup.string()
            .email('Invalid email address')
            .nullable(),
        AddressZipCode: Yup.string()
            .min(4, "C'mon, your name is longer than that"),
        CityID: Yup.number()
            .required('Subscription is required'),
        AddressTypeID: Yup.number()
            .required('Address type is required'),
        AddressAddress: Yup.string()
            .min(40, "need correct address")
            .required("it is compulsory"),
    }),

    mapPropsToValues: ({data}) => ({
        ...data,
    }),

    handleSubmit: (payload, {setSubmitting, props}) => {
        console.log(payload, 'formikEnhancer');
        props.handleSubmit(payload);
        setSubmitting(false);
    },
    displayName: 'ContactForm',
});

const ContactForm = formikEnhancer(contactForm);
export default ContactForm;