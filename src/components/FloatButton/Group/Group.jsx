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
const Group = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Group {...props} />

    );
};

Group.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /**
      * Setting button shape of children. Values are 'circle' or 'square'.
      */
    shape: PropTypes.oneOf(['circle', 'square']),

    /**
     * Which action can trigger menu open/close. Values are 'click' or 'hover'.
     */
    trigger: PropTypes.oneOf(['click', 'hover']),

    /**
     * Whether the menu is visible or not. This is used in conjunction with trigger.
     */
    open: PropTypes.bool,

    /** The style properties of the component */
    style: PropTypes.object,
    /**
     * Callback executed when active menu is changed. This is used in conjunction with trigger.
     */
    onOpenChange: PropTypes.func, // (open: boolean) => void
};

Group.defaultProps = {};

export default Group;