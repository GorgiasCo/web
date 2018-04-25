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
            <div className="column mcb-column one-second column_column">
                {left}
            </div>
            <div className="column mcb-column one-second column_column">
                {right}
            </div>
        </div>
    );
};

export default RowLayout;
