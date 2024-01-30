import React from "react";
import PropTypes from 'prop-types';
import { DatePicker as ANTComponent } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);
/**
 * @uxpindocurl https://ant.design/components/DatePicker/
 * @uxpindescription TODO
 */

const DatePicker = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

DatePicker.propTypes = {
    /** If get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** Customize clear button */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node })
    ]),

    /** Trigger change when blur (e.g., datetime picker no need click confirm button) */
    changeOnBlur: PropTypes.bool,

    /** Custom rendering function for picker cells */
    cellRender: PropTypes.func,

    /** The picker className */
    className: PropTypes.string,

    /** Custom rendering function for date cells (use cellRender instead for version >= 5.4.0) */
    dateRender: PropTypes.func,

    /** Determine whether the DatePicker is disabled */
    disabled: PropTypes.bool,

    /** Specify the date that cannot be selected */
    disabledDate: PropTypes.func,

    /** To set the date format, support multi-format matching when it's an array */
    format: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** To set the container of the floating layer */
    getPopupContainer: PropTypes.func,

    /** Set the readonly attribute of the input tag */
    inputReadOnly: PropTypes.bool,

    /** Localization configuration */
    locale: PropTypes.object,

    /** The picker panel mode */
    mode: PropTypes.oneOf(['time', 'date', 'month', 'year', 'decade']),

    /** The custom next icon */
    nextIcon: PropTypes.node,

    /** Callback function when the popup calendar is popped up or closed */
    onOpenChange: PropTypes.func,

    /** Callback when click ok button */
    onOk: PropTypes.func,

    /** Callback function for panel changing */
    onPanelChange: PropTypes.func,

    /** The open state of picker */
    open: PropTypes.bool,

    /** Customize panel render */
    panelRender: PropTypes.func,

    /** The placeholder of date input */
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** The custom prev icon */
    prevIcon: PropTypes.node,

    /** To customize the style of the popup calendar */
    popupStyle: PropTypes.object,

    /** The preset ranges for quick selection */
    presets: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    })),

    /** Set picker type */
    picker: PropTypes.oneOf(['date', 'week', 'month', 'quarter', 'year']),

    /** Render extra footer in panel */
    renderExtraFooter: PropTypes.func,

    /** Whether to show 'Now' button on panel when showTime is set */
    showNow: PropTypes.bool,

    /** To provide an additional time selection */
    showTime: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // TimePicker Options
    ]),

    /** To set default time of selected date */
    showTimeDefaultValue: PropTypes.object, // Assuming dayjs object, you can adjust the type accordingly 

    /** Whether to show Today button */
    showToday: PropTypes.bool,

    /** To determine the size of the input box */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** To customize the style of the input box */
    style: PropTypes.object,

    /** The custom suffix icon */
    suffixIcon: PropTypes.node,

    /** The custom super next icon */
    superNextIcon: PropTypes.node,

    /** The custom super prev icon */
    superPrevIcon: PropTypes.node,

    /** Variants of picker */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** To set date */
    value: PropTypes.object, // Assuming dayjs object, you can adjust the type accordingly 
};

DatePicker.defaultProps = {};

export default DatePicker;