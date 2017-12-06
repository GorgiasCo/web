import React from 'react';
import RevSlider, {Slide, Caption} from 'react-rev-slider';

const config = {
    sliderType: "standard",
    sliderLayout: "fullwidth",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        onHoverStop: "off",
        touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false
        },
        bullets: {
            enable: true,
            hide_onmobile: true,
            hide_under: 160,
            style: "zeus",
            style: "hermes",
            hide_onleave: false,
            direction: "horizontal",
            h_align: "center",
            v_align: "center",
            h_offset: 0,
            v_offset: 210,
            // h_align: "right",
            // v_align: "bottom",
            // h_offset: 80,
            // v_offset: 50,
            space: 5,
            tmp: '<span class="tp-bullet-image" style="visibility:hidden;top:80% !important;"></span><span class="tp-bullet-imageoverlay" style="visibility:hidden;"></span><span class="tp-bullet-title" style="visibility:hidden;">{{title}}</span>'
        }
    }
};

export default class FeaturedSlider extends React.Component {
    render() {
        return (
            <RevSlider config={config}>
                <Slide
                    src="https://i.ytimg.com/vi/dFnvYtPePRA/maxresdefault.jpg"
                    alt="slidebg1"
                    data-bgfit="cover"
                    data-bgposition="left top"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "fade",
                        'data-slotamount': "7",
                        'data-masterspeed': "1500"
                    }}
                >
                    <Caption
                        class="tp-caption skewfromrightshort fadeout"
                        data-x="85"
                        data-y="224"
                        data-speed="500"
                        data-start="1200"
                        data-easing="Power4.easeOut"
                    >
                        This is a caption
                    </Caption>
                </Slide>
                <Slide
                    src="https://i.ytimg.com/vi/0xe4H666drk/maxresdefault.jpg"
                    alt="slidebg1"
                    data-bgfit="cover"
                    data-bgposition="left top"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "fade",
                        'data-slotamount': "7",
                        'data-masterspeed': "1500"
                    }}
                >
                    <Caption
                        class="tp-caption skewfromrightshort fadeout"
                        data-x="85"
                        data-y="224"
                        data-speed="500"
                        data-start="1200"
                        data-easing="Power4.easeOut"
                    >
                        This is a caption
                    </Caption>
                </Slide>
            </RevSlider>
        )
    }
}