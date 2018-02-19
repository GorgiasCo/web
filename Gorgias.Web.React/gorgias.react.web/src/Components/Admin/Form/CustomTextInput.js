/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Label from "../Form/Label";
import InputFeedback from "../Form/InputFeedback";
import classnames from "classnames";

const CustomTextInput = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
}) => {
    const classes = classnames(
        'input-group',
        {
            'animated shake error': !!error,
        },
        className
    );
    return (
        <div className={classes}>
            <Label htmlFor={id} error={error}>
                {label}
            </Label>
            <input
                id={id}
                className="text-input"
                type={type}
                value={value}
                onChange={onChange}
                {...props}
            />
            <InputFeedback error={error}/>
        </div>
    );
};

export default CustomTextInput;