import React from "react";
import PropTypes from 'prop-types';
import { Carousel as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/carousel/
 * @uxpindescription A carousel component. Scales with its container.
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */

const Carousel = (props) => {
    // Component logic
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        // Your component JSX
        <ANTComponent {...props} afterChange={onChange} />

    );
};

Carousel.propTypes = {

    /** Callback function called after the current index changes */
    afterChange: PropTypes.func,

    /** Whether to scroll automatically */
    autoplay: PropTypes.bool,

    /** Delay between each auto scroll (in milliseconds) */
    autoplaySpeed: PropTypes.number,

    /** Callback function called before the current index changes */
    beforeChange: PropTypes.func,

    /** Set the component that will be rendered */
    children: PropTypes.node,

    /** Dot position: top, bottom, left, or right */
    dotPosition: PropTypes.string,

    /** Whether to show the dots at the bottom of the gallery, object for dotsClass and any others */
    dots: PropTypes.bool,

    /** Transition effect: scrollx or fade */
    effect: PropTypes.oneOf(['scrollx', 'fade']),

    /** Transition interpolation function name */
    easing: PropTypes.string,

    /** Whether to use fade transition */
    fade: PropTypes.bool,

    /** Infinitely wrap around contents */
    infinite: PropTypes.bool,

    /** Animation speed in milliseconds */
    speed: PropTypes.number,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether to wait for the animation when switching */
    waitForAnimate: PropTypes.bool,
};

Carousel.defaultProps = {};

export default Carousel;