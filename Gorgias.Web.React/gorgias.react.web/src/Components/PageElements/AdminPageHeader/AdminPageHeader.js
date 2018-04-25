import React, {Component} from "react";
import CustomButton from "../Form/CustomButton";

class AdminPageHeader extends React.Component {
    constructor(args) {
        super(args);
    }

    render() {
        const {isLoading, headerTitle, newPageURL, newButtonCaption, hasButton = true} = this.props;
        return (
            !isLoading ?
                <div
                    className="column mcb-column one column_column" style={{marginBottom:"5px"}}>
                    <div className="column_attr clearfix">
                        <div
                            style={{float: 'left', marginRight: 7,}}>
                            <h3 className="font-db-theme-3 bold"
                                style={{marginTop:8}}>
                                {headerTitle}
                            </h3>
                        </div>
                        {hasButton ?
                        <div
                            style={{float: 'right'}}>
                            <CustomButton
                                newPageURL={newPageURL}
                                className={`button button-no-margin`}
                                buttonCaption={`${newButtonCaption}`}
                            />
                        </div> : null }
                    </div>
                </div>
                : null
        );
    }
}

export default AdminPageHeader;
