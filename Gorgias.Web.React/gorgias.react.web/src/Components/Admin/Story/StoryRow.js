/**
 * Created by yasser on 1/26/2018.
 */
import React from "react";
import PropTypes from "prop-types";

const StoryRow = ({data}) => (
    <div className="track">
        <a href={data.permalink_url} target="_blank">
            <img src={data.cdnAlbumCover} width="300" height="500"/>
            <p className="title">{data.AlbumTitle}</p>
        </a>
    </div>
)

StoryRow.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StoryRow;

