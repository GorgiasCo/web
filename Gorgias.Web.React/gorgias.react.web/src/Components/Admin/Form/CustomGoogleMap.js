/**
 * Created by odenza on 19/02/2018.
 */

import React, {Component} from "react";
// import Geocode from "react-geocode";

let DEBUG = false;
let API_KEY = "AIzaSyAjU94_y64Gh4mCZgDi4Ccdadaw8YRxqek";
const GOOGLE_API = "https://maps.google.com/maps/api/geocode/json";

export default class CustomGoogleMap extends React.Component {

    constructor(props){
        super(props);


    }

    async handleUrl(url) {
        const response = await fetch(url).catch(error =>
            Promise.reject(new Error("Error fetching data"))
        );

        const json = await response.json().catch(() => {
            console.log("Error parsing server response");
            return Promise.reject(new Error("Error parsing server response"));
        });

        if (json.status === "OK") {
            console.log(json);
            return json;
        }
        console.log(`Server returned status code ${json.status}`, true);
        return Promise.reject(
            new Error(`Server returned status code ${json.status}`)
        );
    }


    async fromAddress(address: string, apiKey: string): Promise {
        if (!address) {
            console.log("Provided address is invalid", true);
            return Promise.reject(new Error("Provided address is invalid"));
        }

        let url = `${GOOGLE_API}?address=${encodeURI(address)}`;

        if (apiKey || API_KEY) {
            API_KEY = apiKey || API_KEY;
            url += `&key=${API_KEY}`;
        }

        console.log(url);
        return this.handleUrl(url);
    }

    handleFormSubmit = (submitEvent) => {
        submitEvent.preventDefault();

    }

    componentDidMount() {
//         // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
//         Geocode.setApiKey("AIzaSyCfhlnaCgbGf9GlcYpKdi_q-b-hoziWD_Y");
//
// // Enable or disable logs. Its optional.
//         Geocode.enableDebug();
// Get address from latidude & longitude.
//         Geocode.fromLatLng("48.8583701", "2.2922926").then(
//             response => {
//                 const address = response.results[0].formatted_address;
//                 console.log(address);
//             },
//             error => {
//                 console.error(error);
//             }
//         );

// Get latidude & longitude from address.
        this.fromAddress("A15,09, the heritage, seri kembangan, selangor, malaysia, 43300",API_KEY).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log('address la',lat, lng);
            },
            error => {
                console.error(error);
            }
        );
    }

    setSearchInputElementReference = (inputReference) => {
        this.searchInputElement = inputReference;
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-sm-12">

                        <form className="form-inline" onSubmit={this.handleFormSubmit}>
                            <div className="row">
                                <div className="col-xs-8 col-sm-10">

                                    <div className="form-group">
                                        <label className="sr-only" htmlFor="address">Address</label>
                                        <input type="text" className="form-control input-lg" id="address"
                                               placeholder="London, United Kingdom"
                                               ref={this.setSearchInputElementReference} required/>
                                    </div>

                                </div>
                                <div className="col-xs-4 col-sm-2">

                                    <button type="submit" className="btn btn-default btn-lg">
                                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                                    </button>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">



                    </div>
                </div>
            </div>
        );
    };
}