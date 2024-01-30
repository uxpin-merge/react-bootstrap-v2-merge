import React from "react";
import PropTypes from 'prop-types';
import { Checkbox as ANTComponent } from "antd";
import Group from "./Group/Group";


/**
 * @uxpindocurl https://ant.design/components/Checkbox/
 * @uxpindescription Checkbox component.
 */

const Checkbox = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Checkbox.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,

    /**
     * If `true`, the component is checked.
    * @uxpinbind onChange 0.target.checked
     */
    checked: PropTypes.bool,

    /** Initial value whether the Checkbox is checked */
    defaultChecked: PropTypes.bool,
    /** Disable the Checkbox */
    disabled: PropTypes.bool,
    /** Callback function when the state changes */
    onChange: PropTypes.func,
    /** Value of the Checkbox, used when inside a Checkbox.Group */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
    /** Additional CSS class for the Checkbox */
    className: PropTypes.string,
    /** Inline style to apply to the Checkbox */
    style: PropTypes.object,


};

Checkbox.defaultProps = {};

Checkbox.Group = Group;

export default Checkbox;