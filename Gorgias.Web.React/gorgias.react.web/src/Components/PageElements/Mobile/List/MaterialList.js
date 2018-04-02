import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

class MaterialList extends React.Component {
    state = {
        checked: [1],
    };

    handleToggle = value => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <List>
                {[0, 1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10, 11, 12, 13].map(value => (
                    <ListItem key={value} dense button className={classes.listItem}>
                        <Avatar alt="Remy Sharp" src="https://gorgiascdn.azureedge.net/albums/hottest-412da108-9ddb-4bb5-b488-240dbf8e6427.jpg"/>
                        <ListItemText primary={`Line item ${value + 1}`}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                onChange={this.handleToggle(value)}
                                checked={this.state.checked.indexOf(value) !== -1}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        );
    }
}

MaterialList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialList);
