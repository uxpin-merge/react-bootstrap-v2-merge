import React from "react";
import PropTypes from 'prop-types';
import { Popover as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Popover/
 * @uxpindescription The floating card popped by clicking or hovering.


 */

const Popover = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Popover.propTypes = {
    /** This value will be merged into placement's config */
    align: PropTypes.object,

    /** Change arrow's visible state and whether the arrow is pointed at the center of target */
    arrow: PropTypes.bool, // Default is true from version 5.2.0

    /** Whether to adjust popup placement automatically when popup is off screen */
    autoAdjustOverflow: PropTypes.bool,

    /** The background color */
    color: PropTypes.string, // Since version 4.3.0

    /** The content in the popover. */
    content: PropTypes.node,

    /** The content of the component. */
    children: PropTypes.node,

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

    /** Style of the tooltip inner content */
    overlayInnerStyle: PropTypes.object,

    /** Style of the tooltip card */
    overlayStyle: PropTypes.object,

    /** Whether the floating tooltip card is open */
    open: PropTypes.bool, // Since version 4.23.0

    /** Callback executed when visibility of the tooltip card is changed */
    onOpenChange: PropTypes.func, // Since version 4.23.0

    /** The position of the tooltip relative to the target */
    placement: PropTypes.oneOf([
        "Left",
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

    /** The style properties of the component */
    style: PropTypes.object,

    /** The title shown in the popover. */
    title: PropTypes.node,

    /** Tooltip trigger mode */
    trigger: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** Config z-index of Tooltip */
    zIndex: PropTypes.number,

};

Popover.defaultProps = {};

export default Popover;