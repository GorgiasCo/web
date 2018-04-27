import React from "react";
import {slide as Menu} from "react-burger-menu";
import {confirmAlert} from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Coursol from "../PageElements/Coursol";
import List from "../PageElements/List/";
import ContentManagerProfileRow from "../Admin/ContentManager/List/ContentManagerProfileRow";


export default class AdminBurgerHeader extends React.Component {

    prepareAccountProfilesModal = () => {
        confirmAlert({
            customUI: ({onClose}) => {
                return (
                    <div className='custom-ui' style={{textAlign: 'center',}}>
                        <div
                            style={{
                                margin: 1 + "% " + 1 + "%",
                                width:'90%',
                                overflow:'both',
                                height:'400px'
                            }}>
                            {/*<Coursol*/}
                                {/*items={this.props.prepareProfileAccountLists.payload}*/}
                                {/*dots={true}*/}
                                {/*renderCoursolItem={(item) => this.prepareContentManagerProfileRow(item, onClose)}*/}
                            {/*/>*/}
                            <List
                            isLoading={false}
                            items={this.props.prepareProfileAccountLists.payload}
                            prepareListRow={(item) => this.prepareContentManagerProfileRow(item, onClose)}
                            />
                          <button className={`reset button-mini-x icon-cancel`} onClick={onClose}></button>
                        </div>
                    </div>
                )
            }
        })
    }

    prepareMenu = () => {
        return (
            <Menu
              width={ 100 }
              isOpen={true}
              customCrossIcon={false}
               styles={styles}>
                <div className="dashboard-image-container">
                  <img className="dashboard-image" onClick={this.prepareAccountProfilesModal}
                       src={this.props.profileAccountSetting.ProfileImage}
                       style={{
                           width: "100%",
                           /*height: 75,*/
                           display: '',
                           borderBottomRightRadius: 25,
                           borderTopLeftRadius: 25, borderTopRightRadius: 25,
                           borderBottomLeftRadius: 25,
                       }}/>
                    <div className="middle-overlay" onClick={this.prepareAccountProfilesModal}>
                      <div className="text icon-pencil"></div>
                    </div>
                  </div>

                    <a id="Dashboard" className="menu-item font-hamburger-nav" href="/admin/">
                      <span><i className="icon-desktop-line icon-larger "></i><br></br></span>Dashboard</a>
                    <a id="profile" className="menu-item font-hamburger-nav" href="/admin/profile">
                      <span><i className="icon-user icon-larger "></i><br></br></span>Profile</a>
                    <a id="story" className="menu-item font-hamburger-nav" href="/admin/story">
                      <span><i className="icon-docs icon-larger "></i><br></br></span>Story</a>
                    <a id="contact" className="menu-item font-hamburger-nav" href="/admin/contact">
                      <span><i className="icon-call icon-larger "></i><br></br></span>Contact</a>
                    <a id="follower" className="menu-item font-hamburger-nav" href="/admin/follower">
                      <span><i className="icon-users icon-larger "></i><br></br></span>Followers</a>
                    <a id="contentmanager" className="menu-item font-hamburger-nav" href="/admin/content/manager">
                      <span><i className="icon-user-add icon-larger "></i><br></br></span>Content<br></br>Managers</a>

                    <br></br>

                    <a id="home" className="menu-item font-hamburger-nav" href="/">
                      <span><i className="icon-home icon-larger "></i><br></br></span>Home</a>

                {/*<a id="contact" className="menu-item font-hamburger-nav" onClick={this.props.logout}>
                  <span><i className="icon-back"></i><br></br></span>logout</a>*/}
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
        //backgroundColor: 'rgba(0,0,0,0.8)',
        backgroundColor: '#222222',
        // background: 'rgba(0,0,0,0.8) url(https://gorgiasasia.blob.core.windows.net/images/profile-1011.jpg) no-repeat center top',

        //padding: '2.5em 1.5em 0',
        padding: '50px 15px 5px',
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
        /*padding: '0.8em'*/
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}
