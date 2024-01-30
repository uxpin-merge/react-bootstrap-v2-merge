import React from "react";
import PropTypes from 'prop-types';
import { FloatButton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/FloatButton/
 * @uxpindescription TODO
 */
/**
 * @uxpinnamespace FloatButton
 */
const BackTop = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.BackTop {...props} />

    );
};

BackTop.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /**
 * Time to return to top in milliseconds.
 */
    duration: PropTypes.number,

    /**
     * Specifies the scrollable area DOM node.
     */
    target: PropTypes.func, // () => HTMLElement

    /**
     * The BackTop button will not show until the scroll height reaches this value.
     */
    visibilityHeight: PropTypes.number,


    /** The style properties of the component */
    style: PropTypes.object,

    /**
     * A callback function, which can be executed when you click the button.
     */
    onClick: PropTypes.func, // () => void
};

BackTop.defaultProps = {};

export default BackTop;