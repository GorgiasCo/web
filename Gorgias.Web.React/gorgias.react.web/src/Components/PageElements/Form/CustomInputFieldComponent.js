/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import classnames from "classnames";

const CustomInputFieldComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
                                                                                         field, // { name, value, onChange, onBlur }
                                                                                         form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                                                                         ...props
                                                                                     }) => {
    const classes = classnames(
        'input-group',
        {
            'animated shake error': !!errors,
        }
    );
    return (
        <div className={classes}>
            <input
                type="text"
                {...field}
                {...props}
            />
            {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    )
};

export default CustomInputFieldComponent;
