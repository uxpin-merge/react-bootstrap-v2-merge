import React from "react";
import PropTypes from 'prop-types';
import { Radio as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/Checkbox/
 * @uxpindescription Generate a group of Radios.
  * @uxpinnamespace Radio
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

    /** The style type of radio button */
    buttonStyle: PropTypes.oneOf(['outline', 'solid']),

    /** Default selected value */
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

    /** Disable all radio buttons */
    disabled: PropTypes.bool,

    /** The name property of all input[type="radio"] children */
    name: PropTypes.string,

    /** Set children optional */
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.string,
            disabled: PropTypes.bool,
        }))
    ]),

    /** Set Radio optionType */
    optionType: PropTypes.oneOf(['default', 'button']),

    /** The size of radio button style */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Used for setting the currently selected value
    * @ onChange 0.target.value
    */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

    /** The callback function that is triggered when the state changes */
    onChange: PropTypes.func,

};

Group.defaultProps = {};

export default Group;