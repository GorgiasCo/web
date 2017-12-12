import React from 'react';
import RevSlider, {Slide, Caption} from 'react-rev-slider';

const config = {
    sliderType: "standard",
    sliderLayout: "fullwidth", //fullwidth
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
            v_offset: 180,
            // h_align: "right",
            // v_align: "bottom",
            // h_offset: 80,
            // v_offset: 50,
            space: 5,
            tmp: '<span class="tp-bullet-image" style="visibility:hidden;top:80% !important;"></span><span class="tp-bullet-imageoverlay" style="visibility:hidden;"></span><span class="tp-bullet-title" style="visibility:hidden;">{{title}}</span>'
        }
    },
    // autoHeight:"on",
    responsiveLevels: [1240, 1024, 778, 480],
    gridwidth: [1080, 1024, 778, 480],
    gridheight: [1200, 768, 960, 720],
    lazyType: "none",
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
        disable_onmobile: "on"
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "on",
    stopAfterLoops: 0,
    stopAtSlide: 1,
    shuffle: "off",
    autoHeight: "off",
    fullScreenAlignForce: "off",
    fullScreenOffsetContainer: "",
    fullScreenOffset: "60px",
    disableProgressBar: "on",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
    }

};

export default class FeaturedSlider extends React.Component {
    render() {
        return (

            <div id="Featured">
            <RevSlider config={config} className="rev_slider_wrapper fullscreen-container" data-alias="scroll-effect76" style={{backgroundColor:"#ff0080",padding:"0", zIndex:"19!important"}}>
                <Slide
                    src="https://gorgiasasia.blob.core.windows.net/images/webcover-4125?timestamp=676"
                    alt="slidebg1"
                    data-bgfit="cover"
                    data-bgposition="center"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "fade",
                        'data-slotamount': "7",
                        'data-masterspeed': "1000"
                    }}>

                    <Caption
                       class="tp-caption Photography-Subline tp-resizeme"
                       data-x="['left','left','center','center']" data-hoffset="['110','80','0','0']"
                       data-y="['center','top','top','top']"
                       data-voffset="['-90','330','400','310']" data-fontsize="['60','60','60','30']"
                       data-lineheight="['75','30','30','26']" data-width="none" data-height="none"
                       data-whitespace="nowrap"
                       data-transform_idle="o:1;"
                       data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                       data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"

                        data-start="500" data-splitin="none" data-splitout="none" data-basealign="slide"
                        data-responsive_offset="on" data-speed="900" data-easing="Power4.easeOut"
                        style={{zIndex:5, whiteSpace: "nowrap",color:"#999999",padding: "0px 10px",color:"rgba(255, 255, 255, 0.5)",letterSpacing:"2px"}}
                      >
                      Miki C SZEe
                    </Caption>

                    <Caption
                       class="tp-caption Photography-Subline tp-resizeme"
                       data-x="['left','left','center','center']" data-hoffset="['110','80','0','0']"
                       data-y="['center','top','top','top']"
                       data-voffset="['-40','390','475','375']" data-fontsize="['20','20','20','17']"
                       data-lineheight="['30','30','30','26']" data-width="none" data-height="none"
                       data-whitespace="nowrap"
                       data-transform_idle="o:1;"
                       data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                       data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"

                       data-start="750" data-splitin="none" data-splitout="none" data-basealign="slide"
                       data-responsive_offset="on" data-speed="900" data-easing="Power4.easeOut"
                       style={{zIndex:6, whiteSpace: "nowrap",color:"#999999",padding: "0px 10px",backgroundColor:"rgba(238, 238, 238, 0.7)"}}
                    >
                        PHOTOGRAPHY
                    </Caption>
                    <Caption
                        class="tp-caption Photography-Subline tp-resizeme"
                        data-x="['left','left','center','center']"
                        data-hoffset="['110','80','0','6']"
                        data-y="['center','top','center','bottom']"
                        data-voffset="['90','480','150','130']" data-fontsize="['20','20','20','0']"
                        data-lineheight="['30','30','30','26']"
                        data-width="['490','492','500','400']" data-height="['auto']"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                        data-transform_out="x:[-100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000" data-splitin="none" data-splitout="none" data-basealign="slide" data-responsive_offset="on"
                        data-speed="500"
                        data-easing="Power4.easeOut"
                        style={{zIndex:7, minWidth:"490px", maxWidth: "490px",whiteSpace: "normal", fontSize:"14px",}}
                    >
                        And I always had this idea for making a movie about a femme fatale, because I like these characters. They're a lot of fun, they're sexy, they're manipulative, they're dangerous.
                    </Caption>
                </Slide>

                <Slide
                    src="https://gorgiasasia.blob.core.windows.net/images/webcover-2664?timestamp=46"
                    alt="slidebg2"
                    data-bgfit="cover"
                    data-bgposition="center"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "slidingoverlayleft",
                        'data-slotamount': "7",
                        'data-masterspeed': "1000"
                    }}>
                    <Caption
                       class="tp-caption Photography-Subline tp-resizeme"
                       data-x="['left','left','center','center']" data-hoffset="['110','80','0','0']"
                       data-y="['center','top','top','top']"
                       data-voffset="['-90','330','400','310']" data-fontsize="['60','60','60','30']"
                       data-lineheight="['75','30','30','26']" data-width="none" data-height="none"
                       data-whitespace="nowrap"
                       data-transform_idle="o:1;"
                       data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                       data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"

                        data-start="500" data-splitin="none" data-splitout="none" data-basealign="slide"
                        data-responsive_offset="on" data-speed="900" data-easing="Power4.easeOut"
                        style={{zIndex:5, whiteSpace: "nowrap",color:"#999999",padding: "0px 10px",color:"rgba(255, 255, 255, 0.5)",letterSpacing:"2px"}}
                      >
                      Ruby 狄妃
                    </Caption>

                    <Caption
                       class="tp-caption Photography-Subline tp-resizeme"
                       data-x="['left','left','center','center']" data-hoffset="['110','80','0','0']"
                       data-y="['center','top','top','top']"
                       data-voffset="['-40','390','475','375']" data-fontsize="['20','20','20','17']"
                       data-lineheight="['30','30','30','26']" data-width="none" data-height="none"
                       data-whitespace="nowrap"
                       data-transform_idle="o:1;"
                       data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                       data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"

                       data-start="750" data-splitin="none" data-splitout="none" data-basealign="slide"
                       data-responsive_offset="on" data-speed="900" data-easing="Power4.easeOut"
                       style={{zIndex:6, whiteSpace: "nowrap",color:"#999999",padding: "0px 10px",backgroundColor:"rgba(238, 238, 238, 0.7)"}}
                    >
                        ACTRESS / SINGER
                    </Caption>
                    <Caption
                        class="tp-caption Photography-Subline tp-resizeme"
                        data-x="['left','left','center','center']"
                        data-hoffset="['110','80','0','6']"
                        data-y="['center','top','center','bottom']"
                        data-voffset="['90','480','150','130']" data-fontsize="['20','20','20','0']"
                        data-lineheight="['30','30','30','26']"
                        data-width="['490','492','500','400']" data-height="['auto']"
                        data-whitespace="normal"
                        data-transform_idle="o:1;"
                        data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                        data-transform_out="x:[-100%];s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                        data-start="1000" data-splitin="none" data-splitout="none" data-basealign="slide" data-responsive_offset="on"
                        data-speed="500"
                        data-easing="Power4.easeOut"
                        style={{zIndex:7, minWidth:"490px", maxWidth: "490px",whiteSpace: "normal", fontSize:"14px",}}
                    >
                        马来西亚艺人 - 演员，歌手，主持人 好萊塢國際電影展2017最佳女配角 美国景深国际电影節競賽2017卓越女配角..
                    </Caption>
                </Slide>

                <Slide
                    src="https://gorgiasasia.blob.core.windows.net/images/webcover-2863?timestamp=454"
                    alt="slidebg3"
                    data-bgfit="cover"
                    data-bgposition="center top"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "fadefromleft",
                        'data-slotamount': "7",
                        'data-masterspeed': "1000"
                    }}>
                    <Caption
                        class="tp-caption skewfromrightshort fadeout"
                        data-x="85"
                        data-y="224"
                        data-speed="500"
                        data-start="1200"
                        data-easing="Power4.easeOut"
                    >
                        This is second caption
                    </Caption>
                </Slide>

                <Slide
                    src="https://gorgiasasia.blob.core.windows.net/images/webcover-5035?timestamp=524"
                    alt="slidebg4"
                    data-bgfit="cover"
                    data-bgposition="center"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "fade",
                        'data-slotamount': "7",
                        'data-masterspeed': "1000"
                    }}>
                    <Caption
                        class="tp-caption skewfromrightshort fadeout"
                        data-x="85"
                        data-y="224"
                        data-speed="500"
                        data-start="1000"
                        data-easing="Power4.easeOut"
                    >
                        This is third
                    </Caption>
                </Slide>

                <Slide
                    src="https://gorgiasasia.blob.core.windows.net/images/webcover-2796?timestamp=155"
                    alt="slidebg5"
                    data-bgfit="cover"
                    data-bgposition="center"
                    data-bgrepeat="no-repeat"
                    slideProperties={{
                        'data-transition': "fade",
                        'data-slotamount': "7",
                        'data-masterspeed': "1500"
                    }}>
                    <Caption
                        class="tp-caption skewfromrightshort fadeout"
                        data-x="85"
                        data-y="224"
                        data-speed="500"
                        data-start="1200"
                        data-easing="Power4.easeOut"
                    >
                        fourth fourth fourth fourth
                    </Caption>
                </Slide>
            </RevSlider>
            </div>

        )
    }
}
