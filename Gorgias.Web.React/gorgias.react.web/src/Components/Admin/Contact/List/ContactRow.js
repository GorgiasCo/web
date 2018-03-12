/**
 * Created by odenza on 22/02/2018.
 */
// import PropTypes from "prop-types";

import React, {Component} from "react";
import ReactImageFallback from "react-image-fallback";

export default class ContactRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Story Row Component')
        return (
            <div className="column mcb-column one-third column_column" style={{margin: 1 + "% " + 1 + "%"}}>
                <div className="column_attr align_center tkPanels">
                    <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                        <div className="image_wrapper">
                            <ReactImageFallback
                                src={`https://gorgiasasia.blob.core.windows.net/images/address-${this.props.data.AddressID}.jpg`}
                                fallbackImage="tkImages/iconMap.png"
                                initialImage="tkImages/iconMap.png"
                                alt="cool image should be here"
                                width="130"
                                height="130"
                                className="wp-post-image fixed-grid"/>
                        </div>
                    </div>
                    <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
                    <h4 className="tkFont-Bold tkFont-Theme"><a
                        href={`admin/contact/${this.props.data.AddressID}`}>{this.props.data.AddressName}</a></h4>
                    <p style={{minHeight: 100 + "px"}}>
                        {this.props.data.AddressAddress}
                    </p>
                    <button className={``} onClick={() => this.props.onPress(this.props.data)}>Delete</button>
                </div>
            </div>
        );
    }
}

