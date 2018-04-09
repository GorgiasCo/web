/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
import Label from "./Label";
import InputFeedback from "./InputFeedback";
import classnames from "classnames";
import TextField from 'material-ui/TextField';

const CustomTextInput = ({
                             type,
                             id,
                             label,
                             error,
                             value,
                             onChange,
                             className,
                             isTextArea = false,
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
            {!isTextArea ?
                <TextField
                    id={id}
                    className="text-input"
                    type={type}
                    value={value !== null ? value : ''}
                    onChange={onChange}
                    margin="normal"
                    label={label}
                    placeholder="Placeholder"
                    {...props}
                />
                // <input
                //     id={id}
                //     className="text-input"
                //     type={type}
                //     value={value !== null ? value : ''}
                //     onChange={onChange}
                //     {...props}
                // />
                :
                <textarea
                    rows="4"
                    cols="50"
                    id={id}
                    className="text-input"
                    value={value !== null ? value : ''}
                    onChange={onChange}
                    {...props}
                />
            }
            <InputFeedback error={error}/>
        </div>
    );
};

export default CustomTextInput;
