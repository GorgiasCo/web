import React from 'react';
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
  NavLink
  // etc.
} from 'react-router-dom';
import Dropzone from 'react-dropzone'

// import { createStore } from 'redux'
import * as storyAction from '../Actions/story/action';

import { connect } from 'react-redux';
import * as todoActions from '../Actions/ToDo/Action';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;


class ContentTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut',
            isGoing: true,
            numberOfGuests: 2,
            fruit: 'lime',
            files: [],
            center: { lat: 40.7446790, lng: -73.9485420 },
            zoom: 11
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount(){
        let x = this.props.storyAction();
        console.log(x,'x');
    }

    onDrop(files) {


        var image  = new Image();

        image.addEventListener('load', function () {
            console.log(image.height, image.width, image.size);
            if (image.width > 300) {
                console.log('This image must be exactly 2500 pixels wide.');
                this.setState({
                    // files: [...files, files],
                    files: [...this.state.files, ...files],
                });
            } else if (image.height !== 3000) {
                console.log('This image must be exactly 3000 pixels wide.');
            }

            // display errors or do success thing
            // if (errors.length >= 0) {
            //     alert(errors.join(', '));
            // } else {
            //     alert('client side validations passed');
            // }
        }.bind(this));

        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                const fileAsBinaryString = reader.result;
                console.log(file, 'file ;)');


                image.src = file.preview;
                this.props.addTodo(file.preview);

                // do whatever you want with the file content
            };
            reader.onabort = () => console.log('file reading was aborted');
            reader.onerror = () => console.log('file reading has failed');

            reader.readAsBinaryString(file);
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.fruit);
        console.log(this.state, 'state ;)');
        event.preventDefault();
        // alert(
        //     `Selected file - ${
        //         this.fileInput.files[0].name
        //         }`
        // );
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        console.log(this.props.books,'files state wow');
        if (!this.props.storyLoading){
            return (
                <div id="Content" style={{backgroundColor: "#292929"}}>
                    <div className="content_wrapper clearfix">
                        <div className="sections_group">
                            <div className="entry-content">
                                <div className="section mcb-section tkSection-padding bg-color-1" style={{paddingTop:150+"px"}}>
                                    <div className="section_wrapper mcb-section-inner">
                                        <div className="wrap mcb-wrap one  valign-top clearfix tkAutoAlignCenter">
                                            <div className="mcb-wrap-inner">
                                                <div className="column mcb-column one column_column">
                                                    <div className="column_attr clearfix">

                                                        <form onSubmit={this.handleSubmit}>
                                                            <label>
                                                                Pick your favorite La Croix flavor:
                                                                <select name="fruit" value={this.state.fruit} onChange={this.handleInputChange}>
                                                                    <option value="grapefruit">Grapefruit</option>
                                                                    <option value="lime">Lime</option>
                                                                    <option value="coconut">Coconut</option>
                                                                    <option value="mango">Mango</option>
                                                                </select>
                                                            </label>
                                                            <label>
                                                                Upload file:
                                                                <input
                                                                    type="file"
                                                                    ref={input => {
                                                                        this.fileInput = input;
                                                                    }}
                                                                />
                                                            </label>
                                                            <label>
                                                                Is going:
                                                                <input
                                                                    name="isGoing"
                                                                    type="checkbox"
                                                                    checked={this.state.isGoing}
                                                                    onChange={this.handleInputChange} />
                                                            </label>
                                                            <br />
                                                            <label>
                                                                Number of guests:
                                                                <input
                                                                    name="numberOfGuests"
                                                                    type="number"
                                                                    value={this.state.numberOfGuests}
                                                                    onChange={this.handleInputChange} />
                                                            </label>
                                                            <section>
                                                                <div className="dropzone">
                                                                    <Dropzone
                                                                        multiple={true}
                                                                        onDrop={this.onDrop.bind(this)}>
                                                                        <p>Try dropping some files here, or click to select files to upload.</p>
                                                                    </Dropzone>
                                                                </div>
                                                                {this.props.books !== undefined ?
                                                                    <aside>
                                                                        <h2>Dropped files</h2>

                                                                        <ul>
                                                                            {
                                                                                this.props.books.map(f => <li key={f.text}>{f.text}</li>)
                                                                            }
                                                                        </ul>
                                                                        <div>{this.props.books.map((file) => <img key={file.text} src={file.text} /> )}</div>

                                                                    </aside>
                                                                    : null }
                                                            </section>
                                                            <div style={{width:600,backgroundColor: "#000000", height:500}}>
                                                                <GoogleMapReact
                                                                    defaultCenter={ this.state.center }
                                                                    defaultZoom={ this.state.zoom }>
                                                                    <AnyReactComponent
                                                                        lat={ 40.7473310 }
                                                                        lng={ -73.8517440 }
                                                                        text={ 'Where Waldo?' }
                                                                    />
                                                                </GoogleMapReact>
                                                            </div>
                                                            <input type="submit" value="Submit" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    Loading....
                </div>
            );
        }
    }
}

// ContentTest = connect()(ContentTest)
// export default ContentTest;

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
    console.log(state, 'mapStateToProps');
    return {
        // You can now say this.props.books
        books: state.todoApp.todos,
        stories: state.story.stories,
        storyLoading: state.story.loading,
    }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        addTodo: book => dispatch(todoActions.addTodo(book)),
        storyAction: stories =>  dispatch(storyAction.getStories(123))
    }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(ContentTest);

{/*<div  style={{backgroundColor: "#292929"}}>
 <h1>Tasst Page</h1>
 <div id="Header_creative">
 <a href="#" className="creative-menu-toggle"><i className="icon-menu"></i></a>

 <ul className="social creative-social"></ul>
 <div className="creative-wrapper">

 <div id="Top_bar">
 <div className="one">
 <div className="top_bar_left">

 <div className="logo">
 <NavLink exact to={"/"} activeStyle={{textDecoration:"none"}}>
 <h3 style={{color:"white",marginTop: 10+"px"}}>Gorgias</h3>
 </NavLink>
 </div>

 <div className="menu_wrapper">
 <nav id="menu">
 <ul id="menu-main-menu" className="menu">
 <li className="current_page_item">
 <a href="index-story.html"><span>Home</span></a>
 </li>
 <li>
 <a href="content/story/photos.html"><span>Photos</span></a>
 </li>
 <li>
 <a href="content/story/about-me.html"><span>About me</span></a>
 </li>
 <li>
 <a href="content/story/what-i-do.html"><span>What I do</span></a>
 </li>
 <li>
 <a href="content/story/contact.html"><span>Contact</span></a>
 </li>
 </ul>
 </nav><a className="responsive-menu-toggle" href="#"><i className="icon-menu"></i></a>
 </div>

 <div className="search_wrapper">
 <form method="get" action="#">
 <i className="icon_search icon-search"></i><a href="#" className="icon_close"><i className="icon-cancel"></i></a>
 <input type="text" className="field" name="s" placeholder="Enter your search" />
 <input type="submit" className="submit flv_disp_none" value="" />
 </form>
 </div>
 </div>

 <div className="banner_wrapper"></div>
 </div>
 </div>

 <div id="Action_bar">

 <ul className="social"></ul>
 </div>
 </div>
 </div>

 </div>*/}