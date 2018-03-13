import React from "react";
import {slide as Menu} from "react-burger-menu";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import List from "../PageElements/List/List";
import ContentManagerProfileRow from "../Admin/ContentManager/List/ContentManagerProfileRow";


export default class AdminBurgerHeader extends React.Component {

    prepareAccountProfilesModal = () => {
        confirmAlert({
            customUI: ({onClose}) => {
                return (
                    <div className='custom-ui' style={{textAlign: 'center'}}>
                        <List
                            isLoading={false}
                            items={this.props.prepareProfileAccountLists.payload}
                            prepareListRow={(item) => this.prepareContentManagerProfileRow(item, onClose)}
                        />
                        <button className={`reset`} onClick={onClose}>close</button>
                    </div>
                )
            }
        })
    }

    prepareMenu = () => {
        return (
            <Menu customCrossIcon={false} styles={styles}>
                <img onClick={this.prepareAccountProfilesModal}
                     src={this.props.profileAccountSetting.ProfileImage}
                     style={{
                         width: 130, height: 130, display: '',
                         borderBottomRightRadius: 15,
                         borderTopLeftRadius: 15, borderTopRightRadius: 15,
                         borderBottomLeftRadius: 15,
                     }}/>
                <a id="home" className="menu-item" href="/admin/">Home</a>
                <a id="profile" className="menu-item" href="/admin/profile">Profile</a>
                <a id="story" className="menu-item" href="/admin/story">Story</a>
                <a id="contact" className="menu-item" href="/admin/contact">Contact</a>
                <a id="follower" className="menu-item" href="/admin/follower">Followers</a>
                <a id="contentmanager" className="menu-item" href="/admin/content/manager">Content Managers</a>
                <a id="contact" className="menu-item" onClick={this.props.logout}>logout</a>
            </Menu>
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

    onPress = (item, onClose) => {
        this.props.onPressProfileAccount(item.ProfileID);
        this.props.router.history.push('/admin/');
        onClose();
        console.log(item, 'onPress item profile account');
    }

    prepareContentManagerProfileRow = (item, onClose) => {
        return <ContentManagerProfileRow key={item.ProfileID} onPress={() => this.onPress(item, onClose)} data={item}/>
    }

    render() {
        console.log(this.props.prepareProfileAccountLists, 'this.props.prepareProfileAccountLists');
        return (
            !this.props.profileAccountss ?
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
        background: '#ffffff'
    },
    bmMenu: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        // background: 'rgba(0,0,0,0.8) url(https://gorgiasasia.blob.core.windows.net/images/profile-1011.jpg) no-repeat center top',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        lineHeight: '32px',
        textAlign: 'center',
        overflow: 'none',
    },
    bmmenuwrap: {},
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