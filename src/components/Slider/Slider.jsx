import React from "react";
import PropTypes from 'prop-types';
import { Slider as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/Slider/
 * @uxpindescription A Slider component for displaying current value and intervals in range.
 */

const Slider = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Slider.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


/** Whether to automatically adjust the popup position */ autoAdjustOverflow: PropTypes.bool,
/** Whether get focus when component mounted */ autoFocus: PropTypes.bool,
/** The default value of slider. When range is false, use number, otherwise, use [number, number] */ defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
/** If true, the slider will not be interactable */ disabled: PropTypes.bool,
/** Support using keyboard to move handlers */ keyboard: PropTypes.bool,
/** Whether the thumb can drag over tick only */ dots: PropTypes.bool,
/** Make effect when marks not null, true means containment and false means coordinative */ included: PropTypes.bool,
/** Tick mark of Slider, type of key must be number, and must in the closed interval [min, max], each mark can declare its own style */ marks: PropTypes.oneOfType([PropTypes.node, PropTypes.shape({ style: PropTypes.object, label: PropTypes.node })]),
/** The maximum value the slider can slide to */ max: PropTypes.number,
/** The minimum value the slider can slide to */ min: PropTypes.number,
/** Dual thumb mode */ range: PropTypes.bool,
/** Reverse the component */ reverse: PropTypes.bool,
/** The granularity the slider can step through values. Must be greater than 0 and be divided by (max - min). When marks not null, step can be null */ step: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
/** The tooltip related props */ tooltip: PropTypes.object,
/** The value of slider. When range is false, use number, otherwise, use [number, number]
 * @uxpinbind onChange 0
*/ value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
/** If true, the slider will be vertical */ vertical: PropTypes.bool,
/** Fire when mouseup or keyup is fired */ onChangeComplete: PropTypes.func,
/** Callback function that is fired when the user changes the slider's value */ onChange: PropTypes.func,

};

Slider.defaultProps = {};

export default Slider;