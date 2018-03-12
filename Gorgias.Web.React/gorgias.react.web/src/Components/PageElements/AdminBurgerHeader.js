import React from "react";
import {slide as Menu} from "react-burger-menu";

export default class AdminBurgerHeader extends React.Component {

    prepareMenu = () => {
        return (
            <div>
                <Menu id="stack" styles={styles}>
                    <img src={`https://gorgiasasia.blob.core.windows.net/images/profile-1011.jpg`}
                         style={{
                             width: 130, height: 130, display: '',
                             borderBottomRightRadius: 15,
                             borderTopLeftRadius: 15, borderTopRightRadius: 15,
                             borderBottomLeftRadius:15,
                         }}/>
                    <a id="home" className="menu-item" href="/admin/">Home</a>
                    <a id="profile" className="menu-item" href="/admin/profile">Profile</a>
                    <a id="story" className="menu-item" href="/admin/story">Story</a>
                    <a id="contact" className="menu-item" href="/admin/contact">Contact</a>
                    <a id="follower" className="menu-item" href="/admin/follower">Followers</a>
                    <a id="contentmanager" className="menu-item" href="/admin/content/manager">Content Managers</a>
                    {/*<a id="about" className="menu-item" onClick={this.props.prepareProfileAccounts}>About</a>*/}
                    <a id="contact" className="menu-item" onClick={this.props.logout}>logout</a>
                    {/*<a className="menu-item--mall" href="">Settings</a>*/}
                </Menu>
            </div>
        );
    };

    prepareProfileAccounts = () => {
        return (
            <div>
                <Menu id="stack" styles={styles}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" onClick={this.props.prepareProfileAccounts}>About</a>
                </Menu>
            </div>
        );
    }

    render() {
        return (
            !this.props.profileAccounts ?
                this.prepareMenu() : this.prepareProfileAccounts()
        );
    }
}

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px',
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
        background: '#373a47 !important'
    },
    bmCross: {
        background: '#373a47'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        lineHeight: '32px',
        textAlign: 'center',
        overflow: 'none',
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}