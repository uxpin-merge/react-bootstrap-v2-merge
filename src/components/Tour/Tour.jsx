import React from "react";
import PropTypes from 'prop-types';
import { Tour as ANTComponent } from "antd";
// import Step from "./Step/Step";

/**
 * @uxpindocurl https://ant.design/components/Tour/
 * @uxpindescription A popup component for guiding users through a product
 * @uxpinuseportal
 */

const Tour = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Tour.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether to show the arrow, including the configuration whether to point to the center of the element */ /** Customize close icon */ closeIcon: PropTypes.node, /** Disable interaction on highlighted area */ disabledInteraction: PropTypes.bool, /** Position of the guide card relative to the target element */ /** Callback function on shutdown */ onClose: PropTypes.func, /** Whether to enable masking, change mask style and fill color by pass custom props */ style: PropTypes.object, color: PropTypes.string, /** Type, affects the background color and text color */ type: PropTypes.string, /** Open tour */ open: PropTypes.bool, /** Callback when the step changes. Current is the previous step */ onChange: PropTypes.func, /** What is the current step */ current: PropTypes.number, /** Support passing custom scrollIntoView options */ /** Custom indicator */ indicatorsRender: PropTypes.func, /** Tour's zIndex */ zIndex: PropTypes.number, /** Set the rendering node of Tour floating layer */ getPopupContainer: PropTypes.func, /** Tour's zIndex */ steps: PropTypes.array,

};

Tour.defaultProps = {};

// Tour.Step = Step;

export default Tour;