import React from "react";
import PropTypes from 'prop-types';
import { Checkbox as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/Checkbox/
 * @uxpindescription Generate a group of checkboxes.
  * @uxpinnamespace Checkbox
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


    /** The style properties of the component */
    style: PropTypes.object,

    /** Default selected value */
    defaultValue: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])),

    /** If disable all checkboxes */
    disabled: PropTypes.bool,

    /** The name property of all input[type='checkbox'] children */
    name: PropTypes.string,

    /** Specifies options */
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            disabled: PropTypes.bool,
        }))
    ]),

    /** The callback function that is triggered when the state changes */
    onChange: PropTypes.func,

    /** Used for setting the currently selected value
   * @uxpinbind onChange 0.target.value
     */
    value: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ])),

};

Group.defaultProps = {};

export default Group;