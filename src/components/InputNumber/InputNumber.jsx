import React from "react";
import PropTypes from 'prop-types';
import { InputNumber as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/InputNumber/
 * @uxpindescription Enter a number within certain range with the mouse or keyboard.
 */

const InputNumber = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

InputNumber.propTypes = {

    /** The content of the component. */
    // children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


/** The label text displayed after (on the right side of) the input field */ addonAfter: PropTypes.node,
/** The label text displayed before (on the left side of) the input field */ addonBefore: PropTypes.node,
/** If get focus when component mounted */ autoFocus: PropTypes.bool,
/** Trigger onChange when blur. e.g. reset value in range by blur */ changeOnBlur: PropTypes.bool,
/** Whether to show +- controls, or set custom arrows icon */ upIcon: PropTypes.node, downIcon: PropTypes.node,
/** Decimal separator */ decimalSeparator: PropTypes.string,
/** Placeholder */ placeholder: PropTypes.string,
/** The initial value */ defaultValue: PropTypes.number,
/** If disable the input */ disabled: PropTypes.bool,
/** Specifies the format of the value presented */ formatter: PropTypes.func,
/** If enable keyboard behavior */ keyboard: PropTypes.bool,
/** The max value */ max: PropTypes.number,
/** The min value */ min: PropTypes.number,
/** Specifies the value extracted from formatter */ parser: PropTypes.func,
/** The precision of input value. Will use formatter when config of formatter */ precision: PropTypes.number,
/** If readonly the input */ readOnly: PropTypes.bool,
/** Set validation status */ status: PropTypes.oneOf(['error', 'warning']),
/** The prefix icon for the Input */ prefix: PropTypes.node,
/** The height of input box */ size: PropTypes.oneOf(['large', 'middle', 'small']),
/** The number to which the current value is increased or decreased. It can be an integer or decimal */ step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
/** Set value as string to support high precision decimals. Will return string value by onChange */ stringMode: PropTypes.bool,
/** The current value
* @uxpinbind onChange 0
*/ value: PropTypes.number,
/** Variants of Input */ variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),
/** The callback triggered when the value is changed */ onChange: PropTypes.func,
/** The callback function that is triggered when Enter key is pressed */ onPressEnter: PropTypes.func,
/** The callback function that is triggered when click up or down buttons */ onStep: PropTypes.func,

};

InputNumber.defaultProps = {};

export default InputNumber;