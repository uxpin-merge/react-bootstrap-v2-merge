import React from "react";
import PropTypes from 'prop-types';
import { Calendar as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Calendar/
 * @uxpindescription TODO
 */

const Calendar = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Calendar.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Customize the display of the date cell, the returned content will be appended to the cell */ dateCellRender: PropTypes.func, /** Customize the display of the date cell, the returned content will override the cell */ dateFullCellRender: PropTypes.func, /** The date selected by default */ defaultValue: PropTypes.object, /** Function that specifies the dates that cannot be selected, currentDate is the same dayjs object as the value prop which you shouldn't mutate */ disabledDate: PropTypes.func, /** Whether to display in full-screen */ fullscreen: PropTypes.bool, /** Render custom header in panel */ headerRender: PropTypes.func, /** The calendar's locale */ locale: PropTypes.object, /** The display mode of the calendar */ mode: PropTypes.oneOf(['month', 'year']), /** Customize the display of the month cell, the returned content will be appended to the cell */ monthCellRender: PropTypes.func, /** Customize the display of the month cell, the returned content will override the cell */ monthFullCellRender: PropTypes.func, /** To set valid range */ validRange: PropTypes.arrayOf(PropTypes.object), /** The current selected date */ value: PropTypes.object, /** Callback for when date changes */ onChange: PropTypes.func, /** Callback for when panel changes */ onPanelChange: PropTypes.func, /** Callback for when a date is selected, include source info */ onSelect: PropTypes.func,
    
};

Calendar.defaultProps = {};

export default Calendar;