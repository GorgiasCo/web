/**
 * Created by odenza on 27/02/2018.
 */
import React, {Component} from "react";
import ReactImageFallback from "react-image-fallback";

export default class ContentManagerProfileRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Content Manager Row')
        return (
            <div className="column mcb-column one-third column_column" style={{margin: 1 + "% " + 1 + "%"}}>
                <div onClick={() => this.props.onPress(this.props.data)} className="column_attr align_center tkPanels">
                    <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                        <div className="image_wrapper">
                            <ReactImageFallback
                                src={this.props.data.ProfileImage}
                                fallbackImage="tkImages/1_Discover_Gorgias.png"
                                initialImage="tkImages/1_Discover_Gorgias.png"
                                alt="cool image should be here"
                                width="130"
                                height="130"
                                className="wp-post-image fixed-grid"/>
                        </div>
                    </div>
                    <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
                    <h4 className="tkFont-Bold tkFont-Theme"><a
                    >{this.props.data.ProfileFullname}</a></h4>
                    {/*<button onClick={() => this.props.onPress(this.props.data)}>Delete</button>*/}
                </div>
            </div>
        );
    }
}

