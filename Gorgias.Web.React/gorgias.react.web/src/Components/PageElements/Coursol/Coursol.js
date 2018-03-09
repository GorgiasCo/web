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
            <div onClick={(event) => this.props.onPress(item, event)} key={item[this.props.keyID]} className="" style={{textAlign: "center"}}>
                {item[this.props.keyName]}
            </div>
        )
    }

    render() {
        return (
            <OwlCarousel
                className="owl-theme"
                autoWidth={false}
                loop={false}
                margin={10}
                nav={false}
                dots={false}
                autoplay={false}
                autoplayTimeout={1000}
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
                        items: 3,
                        nav: false,
                        margin: 15,
                    },

                    1000: {
                        items: 4,
                        nav: false,
                        loop: false,
                        margin: 15,

                    },

                    1200: {
                        items: 5,
                        nav: false,
                        loop: false,
                        margin: 15,

                    },

                    1366: {
                        items: 5,
                        nav: false,
                        loop: false,
                        margin: 15,
                    },

                    1920: {
                        items: 6,
                        nav: false,
                        loop: false,
                        margin: 15,
                    },

                    2560: {
                        items: 8,
                        nav: false,
                        loop: false,
                        margin: 15,
                    }
                }}
            >
                {this.props.items.map(item => this.renderCoursolItem(item))}
            </OwlCarousel>
        );
    }
}
