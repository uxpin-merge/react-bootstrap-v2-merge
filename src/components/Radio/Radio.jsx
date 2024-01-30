import React from "react";
import PropTypes from 'prop-types';
import { Radio as ANTComponent } from "antd";
import Group from "./Group/Group";

/**
 * @uxpindocurl https://ant.design/components/radio/
 * @uxpindescription Radio component.
 */

const Radio = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Radio.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


/** Whether to get focus when the component is mounted */ autoFocus: PropTypes.bool,
/** Specifies whether the radio is selected */ checked: PropTypes.bool,
/** Specifies the initial state: whether or not the radio is selected */ defaultChecked: PropTypes.bool,
/** Disable radio */ disabled: PropTypes.bool,
/** According to value for comparison, to determine whether the selected */     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

};

Radio.defaultProps = {};

Radio.Group = Group;

export default Radio;