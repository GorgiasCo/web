import React from 'react';
import {withStyles} from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import MaterialToolbar from "../Toolbar";

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} style={{padding: 8 * 3}}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
});

class MaterialTab extends React.Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    handleChangeIndex = index => {
        this.setState({value: index});
    };

    render() {
        const {classes, theme, tabs, tabsContents} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <MaterialToolbar />
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        {tabs.map(
                            (item) => {
                                return <Tab key={item.header} label={item.header}/>;
                            }
                        )}
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    {tabs.map(
                        (item) => {
                            return  <TabContainer key={item.header} dir={theme.direction}>{item.container}</TabContainer>;
                        }
                    )}
                </SwipeableViews>
            </div>
        );
    }
}

MaterialTab.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(MaterialTab);
