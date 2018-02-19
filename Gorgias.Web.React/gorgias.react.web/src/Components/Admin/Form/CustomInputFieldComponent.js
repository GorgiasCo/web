/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
const CustomInputFieldComponent: React.SFC<FieldProps<Values> & CustomInputProps> = ({
    field, // { name, value, onChange, onBlur }
    form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
    <div>
        <input
            type="text"
            {...field}
            {...props}
        />
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </div>
)

export default CustomInputFieldComponent;