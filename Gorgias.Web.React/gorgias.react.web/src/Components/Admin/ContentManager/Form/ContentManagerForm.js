/**
 * Created by odenza on 27/02/2018.
 */
/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import {withFormik, Formik, Form, Field, FieldArray} from "formik";
import Yup from "yup";
import CustomAsyncSelect from "../../../PageElements/Form/CustomAsyncSelect";
import httpRequest from "../../../Global/HTTP/httpRequest";
import CustomAutocomplete from "../../../PageElements/Form/CustomAutocomplete";


const contentManagerForm = props => {
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
            <CustomAsyncSelect
                valueName="UserID"
                value={values.UserID}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.UserID}
                touched={touched.UserID}
                hasCaption={true}
                disabled={false}
                matchProp="UserID"
                valueKey="UserID"
                labelKey="ProfileInformation"
                label="Profile"
                url={httpRequest.ContentManager_Profile_AutoComplete_Endpoint}
            />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </form>
    );
};

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        UserID: Yup.number()
            .required('Subscription is required')
    }),

    mapPropsToValues: ({data}) => ({
        ...data,
    }),

    handleSubmit: (payload, {setSubmitting, props}) => {
        console.log(payload, 'formikEnhancer');
        props.handleSubmit(payload);
        setSubmitting(false);
    },
    displayName: 'ContentManagerForm',
});

const ContentManagerForm = formikEnhancer(contentManagerForm);
export default ContentManagerForm;