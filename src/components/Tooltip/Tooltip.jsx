import React from "react";
import PropTypes from 'prop-types';
import { Tooltip as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tooltip/
 * @uxpindescription TODO
 */

const Tooltip = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Tooltip.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /** The text shown in the tooltip. */
    title: PropTypes.node,
    /** The text shown in the tooltip. */
    // content: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,
    /** This value will be merged into placement's config */
    align: PropTypes.object,

    /** Change arrow's visible state and whether the arrow is pointed at the center of target */
    arrow: PropTypes.bool, // Default is true from version 5.2.0

    /** Whether to adjust popup placement automatically when popup is off screen */
    autoAdjustOverflow: PropTypes.bool,

    /** The background color */
    color: PropTypes.string, // Since version 4.3.0

    /** Whether the floating tooltip card is open by default */
    defaultOpen: PropTypes.bool, // Default is false from version 4.23.0

    /** Whether destroy tooltip when hidden */
    destroyTooltipOnHide: PropTypes.bool,

    /** Tooltip will always keep updating, instead of caching content */
    fresh: PropTypes.bool, // Since version 5.10.0

    /** The DOM container of the tip */
    getPopupContainer: PropTypes.func,

    /** Delay before tooltip is shown on mouse enter */
    mouseEnterDelay: PropTypes.number,

    /** Delay before tooltip is hidden on mouse leave */
    mouseLeaveDelay: PropTypes.number,

    /** Class name of the tooltip card */
    overlayClassName: PropTypes.string,

    /** Style of the tooltip card */
    overlayStyle: PropTypes.object,

    /** Style of the tooltip inner content */
    overlayInnerStyle: PropTypes.object,

    /** The position of the tooltip relative to the target */
    placement: PropTypes.oneOf(["Left",
        "leftTop",
        "leftBottom",
        "top",
        "topLeft",
        "topRight",
        "bottom",
        "bottomLeft",
        "bottomRight",
        "right",
        "rightTop",
        "rightBottom",
    ]),

    /** Tooltip trigger mode */
    trigger: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** Whether the floating tooltip card is open */
    open: PropTypes.bool, // Since version 4.23.0

    /** Config z-index of Tooltip */
    zIndex: PropTypes.number,

    /** Callback executed when visibility of the tooltip card is changed */
    onOpenChange: PropTypes.func, // Since version 4.23.0

};

Tooltip.defaultProps = {};

export default Tooltip;