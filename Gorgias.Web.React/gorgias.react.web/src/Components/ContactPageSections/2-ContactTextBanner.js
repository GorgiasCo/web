import React from 'react';


export default class ContactTextBanner extends React.Component {
    render() {
        return (
            <div className="section tkSection-padding bg-color-1">
                <div className="section_wrapper clearfix tkSection-padding">
                    <div className="items_group clearfix">
                        <div className="column one column_column ">
                            <div className="column_attr align_center">
                                <h3 className="tkFont1" style={{color: "black", fontSize: " x-large"}}>WE'D <span><img
                                    src="tkImages/3_Touch_For_Love.png" height="42" alt="love" width="42"/></span> TO
                                    HELP</h3>
                                <h3 className="tkFont1" style={{color: "black"}}>CALL US IF YOU HAVE A QUESTION AT</h3>
                                <h3 className="themecolor tkFont-Bold tkFont-Theme">+61 (0) 7 9180 3458</h3>
                                <h3 className="tkFont1" style={{color: "black"}}>OR WRITE US ON <a
                                    className="themecolor" href="#">email@gorgias.com</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
