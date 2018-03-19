/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
const Label = ({
                   error,
                   className,
                   children,
                   ...props
               }) => {
    return (
        <label className="label" {...props}>
            <i>{children}</i>
        </label>
    );
};

export default Label;