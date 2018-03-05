/**
 * Created by yasser on 1/26/2018.
 */
import React from "react";
import PropTypes from "prop-types";

const StoryRow = ({data}) => (
    <div key={data.AlbumID} className="column mcb-column one-third column_column" style={{margin: 1 + "% " + 1 + "%",}}>
        <div className="column_attr align_center tkPanels">
            <div className="image_frame image_item no_link scale-with-grid alignnone no_border">
                <div className="image_wrapper">
                    <img className="scale-with-grid" src={data.cdnAlbumCover} alt=""/>
                </div>
            </div>
            <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
            <h4 className="tkFont-Bold tkFont-Theme"><a
                href={`admin/story/${data.AlbumID}`}>{data.AlbumName}</a></h4>
            {/*<p style={{minHeight: 100 + "px"}}>*/}
                {/*{data.AlbumName}*/}
            {/*</p>*/}
        </div>
    </div>
)

StoryRow.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StoryRow;

