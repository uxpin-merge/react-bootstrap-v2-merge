import React from "react";
import PropTypes from 'prop-types';
import { TimePicker as ANTComponent } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const timePickeronChange = (time, timeString) => {
    console.log(time, timeString);
    return time
};

/**
 * @uxpindocurl https://ant.design/components/TimePicker/
 * @uxpindescription To select/input a time.
 */

const TimePicker = (props) => {
    // Component logic

    return (
        <div>
            <ANTComponent {...props}
            // value={timePickeronChange()}
            // onChange={timePickeronChange}
            />
            {/* <p>{dayjs(props.value)}</p> */}
        </div>
    );
};

TimePicker.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


/** Customize clear icon */ clearIcon: PropTypes.node,
/** If get focus when the component is mounted */ autoFocus: PropTypes.bool,
/** Custom rendering function for picker cells */ cellRender: PropTypes.func,
/** Trigger change when blur. e.g. datetime picker no need click confirm button */ changeOnBlur: PropTypes.bool,
/** The className of picker */ className: PropTypes.string,
/** To set default time */ defaultValue: PropTypes.object, // Assuming dayjs object, you can adjust the type accordingly 
/** Determine whether the TimePicker is disabled */ disabled: PropTypes.bool,
/** To specify the time that cannot be selected */ disabledTime: PropTypes.object,
/** To set the time format */ format: PropTypes.string,
/** To set the container of the floating layer, while the default is to create a div element in body */ getPopupContainer: PropTypes.func,
/** Whether hide the options that can not be selected */ hideDisabledOptions: PropTypes.bool,
/** Interval between hours in picker */ hourStep: PropTypes.number,
/** Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices) */ inputReadOnly: PropTypes.bool,
/** Interval between minutes in picker */ minuteStep: PropTypes.number,
/** Whether to popup panel */ open: PropTypes.bool,
/** Display when there's no value */
/** The position where the selection box pops up */ placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),
/** The className of panel */ popupClassName: PropTypes.string,
/** The style of panel */ popupStyle: PropTypes.object,
/** Called from time picker panel to render some addon to its bottom */ renderExtraFooter: PropTypes.func,
/** Interval between seconds in picker */ secondStep: PropTypes.number,
/** Whether to show Now button on panel */ showNow: PropTypes.bool,
/** To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px */ size: PropTypes.oneOf(['large', 'middle', 'small']),
/** Set validation status */ status: PropTypes.oneOf(['error', 'warning', 'success', 'validating']),
/** The custom suffix icon */ suffixIcon: PropTypes.node,
/** Display as 12 hours format, with default format h:mm:ss a */ use12Hours: PropTypes.bool,
/** To set time
*/ value: PropTypes.object, // Assuming dayjs object, you can adjust the type accordingly 
/** Variants of picker */ variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),
/** A callback function, can be executed when the selected time is changing */ onChange: PropTypes.func,
/** A callback function which will be called while panel opening/closing */ onOpenChange: PropTypes.func,
/** A callback function, executes when a value is selected */ onSelect: PropTypes.func,

};

TimePicker.defaultProps = {};

export default TimePicker;