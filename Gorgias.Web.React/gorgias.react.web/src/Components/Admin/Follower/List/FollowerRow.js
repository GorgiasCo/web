/**
 * Created by odenza on 27/02/2018.
 */
import React, {Component} from "react";
import ReactImageFallback from "react-image-fallback";
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

export default class FollowerRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Content Manager Row')
        const classes = this.props;
        return (
            <Card
                style={{maxWidth: 210, float:'left', marginRight:11, marginBottom:11,}}>
                <CardMedia
                    src={`https://gorgiasasia.blob.core.windows.net/images/profile-1011.jpg`}
                    title="Contemplative Reptile"
                    style={{height: 200, width:'100%'}}
                >
                    {/*<ReactImageFallback*/}
                        {/*src={this.props.data.ProfileImage}*/}
                        {/*fallbackImage="tkImages/1_Discover_Gorgias.png"*/}
                        {/*initialImage="tkImages/1_Discover_Gorgias.png"*/}
                        {/*alt="cool image should be here"*/}
                        {/*width="130"*/}
                        {/*height="130"*/}
                        {/*className="wp-post-image fixed-grid"/>*/}
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.data.ProfileFullname}
                    </Typography>
                    <Typography component="p">

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            // <div className="column mcb-column one-third column_column" style={{margin: 1 + "% " + 1 + "%"}}>
            //     <div className="column_attr align_center tkPanels">
            //         <div className="image_frame image_item no_link alignnone no_border">
            //             <div className="image_wrapper">
            //                 <ReactImageFallback
            //                     src={this.props.data.ProfileImage}
            //                     fallbackImage="tkImages/1_Discover_Gorgias.png"
            //                     initialImage="tkImages/1_Discover_Gorgias.png"
            //                     alt="cool image should be here"
            //                     width="130"
            //                     height="130"
            //                     className="wp-post-image fixed-grid"/>
            //             </div>
            //         </div>
            //         <hr className="no_line" style={{margin: 0 + " auto " + 10 + "px"}}/>
            //         <h4 className="tkFont-Bold tkFont-Theme" style={{
            //             textOverflow: 'ellipsis',
            //             whiteSpace: 'nowrap',
            //             width:'200px',
            //         }}>{this.props.data.ProfileFullname}</h4>
            //     </div>
            // </div>
        );
    }
}

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
};
