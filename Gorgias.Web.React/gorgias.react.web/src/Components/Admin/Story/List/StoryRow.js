/**
 * Created by yasser on 1/26/2018.
 */
import React from "react";
import PropTypes from "prop-types";

const StoryRow = ({data}) => (

    <div key={data.AlbumID+'d'} className="column mcb-column one-third column_column" style={{margin: 1 + "% " + 1 + "%"}}>

        <li className="floatr tklist content_slider_li" style={{float: "left"}}>

            <img width="287" height="339" className="tk fit2" src={data.cdnAlbumCover} alt={data.ProfileFullname}
                 style={{borderRadius: "9px"}}/>

            <div className="desc2" style={{
                position: "absolute",
                top: "70%",
                left: "16px",
                right:'16px',
                color: "white",
                zIndex: "1",
                overflow: 'hidden',
                height: '28%',
            }}>
                <p style={{fontSize: "12px"}}>{data.AlbumName}</p>
            </div>
            <a href={`/admin/story/${data.AlbumID}`} className="full-card-overlay gradient"
               style={{borderRadius: "9px", textDecoration:'none'}}>
                <div className="customButton">Edit</div>
            </a>
        </li>
    </div>
)

StoryRow.propTypes = {
    data: PropTypes.object.isRequired,
}

export default StoryRow;

{/*<div key={data.AlbumID} className="column mcb-column one-third column_column" style={{margin: 1 + "% " + 1 + "%",}}>*/
}
{/*<div className="column_attr align_center tkPanels">*/
}
{/*<div className="image_frame image_item no_link scale-with-grid alignnone no_border">*/
}
{/*<div className="image_wrapper">*/
}
{/*<img className="scale-with-grid" src={data.cdnAlbumCover} alt=""/>*/
}
{/*</div>*/
}
{/*</div>*/
}
{/*<hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>*/
}
{/*<h4 className="tkFont-Bold tkFont-Theme"><a*/
}
{/*href={`admin/story/${data.AlbumID}`}>{data.AlbumName}</a></h4>*/
}
{/*/!*<p style={{minHeight: 100 + "px"}}>*!/*/
}
{/*/!*{data.AlbumName}*!/*/
}
{/*/!*</p>*!/*/
}
{/*</div>*/
}
{/*</div>*/
}