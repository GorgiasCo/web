/**
 * Created by yasser on 1/26/2018.
 */
import React, {Component} from "react";

export default class StoryRowComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Story Row Component')
        return (
            <div className="track">
                <a href={this.props.data.permalink_url} target="_blank">
                    <img src={this.props.data.cdnAlbumCover} width="300" height="500"/>
                    <p className="title">{this.props.data.AlbumTitle}</p>
                </a>
            </div>
        );
    }
}

