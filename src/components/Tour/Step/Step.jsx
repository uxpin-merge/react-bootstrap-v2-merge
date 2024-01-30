import React from "react";
import PropTypes from 'prop-types';
import PurePanel from "antd/es/tour/PurePanel";

/**
 * @uxpindocurl https://ant.design/components/TourStep/
 * @uxpindescription A popup component for guiding users through a product
 * @uxpinnamespace Tour
 */

const Step = (props) => {
    // Component logic

    return (
        // Your component JSX
        <PurePanel {...props} />

    );
};

Step.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether to show the arrow, including the configuration whether to point to the center of the element */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ pointAtCenter: PropTypes.bool })
    ]),

    /** Close icon customization */
    closeIcon: PropTypes.node,

    /** Displayed pictures or videos */
    cover: PropTypes.node,

    /** Description of the step */
    description: PropTypes.node,

    /** Masking options */
    mask: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            style: PropTypes.object,
            color: PropTypes.string,
        })
    ]),

    /** Properties of the Next button */
    nextButtonProps: PropTypes.shape({
        children: PropTypes.node,
        onClick: PropTypes.func,
    }),

    /** Callback function on shutdown */
    onClose: PropTypes.func,

    /** Properties of the previous button */
    prevButtonProps: PropTypes.shape({
        children: PropTypes.node,
        onClick: PropTypes.func,
    }),

    /** Position of the guide card relative to the target element */
    placement: PropTypes.oneOf([
        'center', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom',
        'top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight'
    ]),

    /** Custom scrollIntoView options */
    scrollIntoViewOptions: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // ScrollIntoViewOptions
    ]),

    /** Get the element the guide card points to */
    target: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.instanceOf(HTMLElement)
    ]),

    /** Title of the step */
    title: PropTypes.node,

    /** Type, affects the background color and text color */
    type: PropTypes.oneOf(['default', 'primary']),
};

Step.defaultProps = {};

export default Step;