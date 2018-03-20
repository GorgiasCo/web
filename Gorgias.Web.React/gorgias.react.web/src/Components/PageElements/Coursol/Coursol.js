/**
 * Created by yasser on 2/23/2018.
 */
import React from "react";
import OwlCarousel from "react-owl-carousel";

export default class Coursol extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    renderCoursolItem(item) {
        return (
            <div onClick={(event) => this.props.onPress(item, event)}
                 key={item[this.props.keyID]}
                 className=""
                 style={{textAlign: "center", padding:13, height:65,}}>
                {item[this.props.keyName]}
            </div>
        )
    }

    render() {
        return (
            <OwlCarousel
                className="owl-theme"
                autoWidth={false}
                mergeFit={true}
                loop={false}
                center={true}
                margin={10}
                nav={false}
                dots={this.props.dots !== undefined ? this.props.dots : false}
                autoplay={false}
                autoplayTimeout={1000}
                items={3}
                autoplayHoverPause={true}
                responsiveClass={false}
                responsive={{
                    0: {
                        items: 2,
                        nav: false,
                        margin: 10,
                        center: true,
                    },
                    400: {
                        items: 2,
                        nav: false,
                        margin: 10,
                        center: true,
                    },
                    600: {
                        items: 1,
                        nav: false,
                        margin: 15,
                    },
                    1000: {
                        items: 3,
                        nav: false,
                        loop: false,
                        margin: 15,
                    },
                    1200: {
                        items: 3,
                        nav: false,
                        loop: false,
                        margin: 15,
                    },
                    1366: {
                        items:3,
                        nav: false,
                        loop: false,
                        margin: 15,
                    },

                    1920: {
                        items:3,
                        nav: false,
                        loop: false,
                        margin: 15,
                    },
                    2560: {
                        items: 3,
                        nav: false,
                        loop: false,
                        margin: 15,
                    }
                }}
            >
                {this.props.items.map(item => this.props.renderCoursolItem === undefined ? this.renderCoursolItem(item) : this.props.renderCoursolItem(item))}
            </OwlCarousel>
        );
    }
}
