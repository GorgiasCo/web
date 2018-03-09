/**
 * Created by odenza on 19/02/2018.
 */
import React, {Component} from "react";

const RowLayout = ({
                       left,
                       right,
                       margin = 49
                   }) => {
    return (
        <div
            style={{float: 'left', width: '100%', marginBottom: 13,}}>
            <div
                style={{float: 'left', width: `${margin}%`, marginBottom: 13,}}>
                {left}
            </div>
            <div
                style={{float: 'right', width: `${margin}%`, marginBottom: 13,}}>
                {right}
            </div>
        </div>
    );
};

export default RowLayout;