/**
 * Created by yasser on 2/23/2018.
 */
import React, {Component} from "react";
const CoursolItem = ({
                     ...props, children
                 }) => {
    return (
        <label className="label" {...props}>
            {children}
        </label>
    );
};

export default CoursolItem;