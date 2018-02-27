/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";
const InputFeedback = ({error}) =>
    error ? (
            <div className="input-feedback">{error}</div>
        ) : null;
export default InputFeedback;