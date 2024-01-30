import React from "react";
import PropTypes from 'prop-types';
import { FloatButton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/FloatButton/
 * @uxpindescription TODO
 */

const FloatButton = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

FloatButton.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /**
     * Set the icon component of button.
     */
    icon: PropTypes.node, // ReactNode

    /**
     * Text and other elements for description.
     */
    description: PropTypes.node, // ReactNode

    /**
     * The text shown in the tooltip. Can be a ReactNode or a function returning a ReactNode.
     */
    tooltip: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func // () => ReactNode
    ]),

    /**
     * Setting button type. Values are 'default' or 'primary'.
     */
    type: PropTypes.oneOf(['default', 'primary']),

    /**
     * Setting button shape. Values are 'circle' or 'square'.
     */
    shape: PropTypes.oneOf(['circle', 'square']),

    /**
     * Set the handler to handle click event.
     */
    onClick: PropTypes.func, // (event) => void


    /** The style properties of the component */
    style: PropTypes.object,

    /**
     * The target of hyperlink.
     */
    href: PropTypes.string,

    /**
     * Specifies where to display the linked URL.
     */
    target: PropTypes.string,

    /**
     * Attach Badge to FloatButton. status and other props related are not supported.
     * Version: 5.4.0
     */
    badge: PropTypes.object, // BadgeProps
};

FloatButton.defaultProps = {};

export default FloatButton;