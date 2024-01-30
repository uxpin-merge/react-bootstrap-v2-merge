import React from "react";
import PropTypes from 'prop-types';
import { Switch as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/Switch/
 * @uxpindescription A Slider component for displaying current value and intervals in range.
 */

const Switch = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Switch.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


    /** Whether get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** Determine whether the Switch is checked
     * @uxpinbind onChange 0
    */
    checked: PropTypes.bool,

    /** The content to be shown when the state is checked */
    checkedChildren: PropTypes.node,

    /** The additional class to Switch */
    className: PropTypes.string,

    /** Whether to set the initial state */
    defaultChecked: PropTypes.bool,

    /** Alias for defaultChecked */
    defaultValue: PropTypes.bool, // Since 5.12.0

    /** Disable switch */
    disabled: PropTypes.bool,

    /** Loading state of switch */
    loading: PropTypes.bool,

    /** Trigger when the checked state is changing */
    onChange: PropTypes.func,

    /** Trigger when clicked */
    onClick: PropTypes.func,

    /** The size of the Switch, options: default small */
    size: PropTypes.string,

    /** The content to be shown when the state is unchecked */
    unCheckedChildren: PropTypes.node,

    /** Alias for checked
    */
    value: PropTypes.bool, // Since 5.12.0

};

Switch.defaultProps = {};

export default Switch;