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

            <RowLayout
                left={
                    <CustomTextInput
                        id="AddressName"
                        type="text"
                        label="Location Name"
                        placeholder="Gorgias Office"
                        error={touched.AddressName && errors.AddressName}
                        value={values.AddressName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
                right={
                    <CustomTextInput
                        id="AddressTel"
                        type="text"
                        label="Tel"
                        placeholder="Tel"
                        error={touched.AddressTel && errors.AddressTel}
                        value={values.AddressTel}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
            />

            <RowLayout
                left={
                    <CustomTextInput
                        id="AddressFax"
                        type="text"
                        label="Fax"
                        placeholder="Fax"
                        error={touched.AddressFax && errors.AddressFax}
                        value={values.AddressFax}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
                right={
                    <CustomTextInput
                        id="AddressZipCode"
                        type="text"
                        label="ZipCode"
                        placeholder="ZipCode"
                        error={touched.AddressZipCode && errors.AddressZipCode}
                        value={values.AddressZipCode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
            />

            <RowLayout
                margin={100}
                left={
                    <CustomTextInput
                        id="AddressEmail"
                        type="email"
                        label="Email"
                        placeholder="Email"
                        error={touched.AddressEmail && errors.AddressEmail}
                        value={values.AddressEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />}
                right={
                    <CustomTextInput
                        id="AddressAddress"
                        type="text"
                        label="Address"
                        placeholder="Address"
                        error={touched.AddressAddress && errors.AddressAddress}
                        value={values.AddressAddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                }
            />

            <RowLayout
                left={
                    <CustomSelect
                        valueName="AddressTypeID"
                        value={values.AddressTypeID}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        error={errors.AddressTypeID}
                        touched={touched.AddressTypeID}
                        disabled={false}
                        matchProp="AddressTypeID"
                        valueKey="AddressTypeID"
                        labelKey="AddressTypeName"
                        label="Location Type"
                        options={props.optionsProfileTypes}
                    />
                }
                right={
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
                        label="Country"
                        url="https://gorgiasapp-v4.azurewebsites.net/api/Mobile/V2/Cities/"
                    />
                }
            />

            <RowLayout
                margin={100}
                left={
                    <CustomDropZone
                        error={errors.AddressImage}
                        touched={touched.AddressImage}
                        valueName="AddressImage"
                        value={`https://gorgiasasia.blob.core.windows.net/albums/address-${values.AddressID}.jpg`}
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                        isUploading={false}
                    />
                }
                right={null}
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
                <button className={`submit`} type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </div>

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
            .min(4, "C'mon, your name is longer than that")
            .nullable(),
        CityID: Yup.number()
            .required('Subscription is required'),
        AddressTypeID: Yup.number()
            .required('Address type is required'),
        AddressAddress: Yup.string()
            .min(20, "need correct address")
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