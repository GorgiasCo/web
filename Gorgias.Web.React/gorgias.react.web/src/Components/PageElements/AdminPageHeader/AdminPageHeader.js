import React, {Component} from "react";
import CustomButton from "../Form/CustomButton";

class AdminPageHeader extends React.Component {
    constructor(args) {
        super(args);
    }

    render() {
        const {isLoading, headerTitle, newPageURL, newButtonCaption} = this.props;
        return (
            !isLoading ?
                <div
                    className="column mcb-column one column_column">
                    <div className="column_attr clearfix">
                        <div
                            style={{float: 'left', marginRight: 7,}}>
                            <h3
                                style={{fontStyle: 'italic', marginTop:8}}>
                                {headerTitle}
                            </h3>
                        </div>
                        <div
                            style={{float: 'right'}}>
                            <CustomButton
                                newPageURL={newPageURL}
                                className={`button button-no-margin`}
                                buttonCaption={`${newButtonCaption}`}
                            />
                        </div>
                    </div>
                </div>
                : null
        );
    }
}

export default AdminPageHeader;