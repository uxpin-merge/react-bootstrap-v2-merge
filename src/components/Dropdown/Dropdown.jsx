import React from "react";
import PropTypes from 'prop-types';
import { Dropdown as ANTComponent } from "antd";
import Button from "./Button/Button";

/**
 * @uxpindocurl https://ant.design/components/Dropdown/
 * @uxpindescription A dropdown list.
 */

const Dropdown = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Dropdown.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether the dropdown arrow should be visible */
    arrow: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ pointAtCenter: PropTypes.bool })
    ]),

    /** Whether to adjust dropdown placement automatically when dropdown is off screen */
    autoAdjustOverflow: PropTypes.bool,

    /** Focus element in overlay when opened */
    autoFocus: PropTypes.bool,

    /** Whether the dropdown menu is disabled */
    disabled: PropTypes.bool,

    /** Whether destroy dropdown when hidden */
    destroyPopupOnHide: PropTypes.bool,

    /** Customize dropdown content */
    dropdownRender: PropTypes.func,

    /** To set the container of the dropdown menu */
    getPopupContainer: PropTypes.func,

    /** The menu props */
    menu: PropTypes.object, // MenuProps

    /** The class name of the dropdown root element */
    overlayClassName: PropTypes.string,

    /** The style of the dropdown root element */
    overlayStyle: PropTypes.object,

    /** Placement of popup menu */
    placement: PropTypes.string,

    /** The trigger mode which executes the dropdown action */
    trigger: PropTypes.arrayOf(PropTypes.oneOf(['click', 'hover', 'contextMenu'])),

    /** Whether the dropdown menu is currently open */
    open: PropTypes.bool,

    /** Called when the open state is changed */
    onOpenChange: PropTypes.func,
};

Dropdown.defaultProps = {};

Dropdown.Button = Button;

export default Dropdown;