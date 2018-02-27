/**
 * Created by odenza on 27/02/2018.
 */
import React, {Component} from "react";

export default class FollowerRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Content Manager Row')
        return (
            <div className="column mcb-column one-third column_column" style={{margin: 1 + "% " + 1 + "%"}}>
                <div className="column_attr align_center tkPanels">
                    <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                        <div className="image_wrapper">
                            <img className="scale-with-grid" src="tkImages/1_Discover_Gorgias.png" alt="" width="123"
                                 height="100"/>
                        </div>
                    </div>
                    <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
                    <h4 className="tkFont-Bold tkFont-Theme"><a
                        href={`admin/content/manager/${this.props.data.ProfileID}`}>{this.props.data.ProfileFullname}</a></h4>
                    {/*<p style={{minHeight: 100 + "px"}}>*/}
                        {/*{this.props.data.AddressAddress}*/}
                    {/*</p>*/}
                </div>
            </div>
        );
    }
}

