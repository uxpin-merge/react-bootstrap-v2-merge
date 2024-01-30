import React from "react";
import PropTypes from 'prop-types';
import { ColorPicker as ANTComponent } from "antd";



/**
 * @uxpindocurl https://ant.design/components/ColorPicker/
 * @uxpindescription Components providing color selection
 */

const ColorPicker = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

ColorPicker.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


/** Allow clearing color selected */ allowClear: PropTypes.bool,
/** Configuration for popup arrow */
/** Trigger of ColorPicker */ children: PropTypes.node,
/** Default value of color*/ defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
/** Default format of color */ defaultFormat: PropTypes.oneOf(['rgb', 'hex', 'hsb']),
/** Disable ColorPicker */ disabled: PropTypes.bool,
/** Disable Alpha */ disabledAlpha: PropTypes.bool,
/** Whether destroy popover when hidden */ destroyTooltipOnHide: PropTypes.bool,
/** Format of color */ format: PropTypes.oneOf(['rgb', 'hex', 'hsb']),
/** Whether to show popup */ open: PropTypes.bool,
/** Preset colors */ label: PropTypes.node, colors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])), defaultOpen: PropTypes.bool,
/** Placement of popup */ placement: PropTypes.oneOf(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight']),
/** Custom Render Panel */ panelRender: PropTypes.func,
/** Show color text */ showText: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
/** Setting the trigger size */ size: PropTypes.oneOf(['large', 'middle', 'small']),
/** ColorPicker trigger mode */ trigger: PropTypes.oneOf(['hover', 'click']),
/** Value of color
 * @uxpinbind onChange 1
*/ value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
/** Callback when value is changed */ onChange: PropTypes.func,
/** Called when color pick ends */ onChangeComplete: PropTypes.func,
/** Callback when format is changed */ onFormatChange: PropTypes.func,
/** Callback when open is changed */ onOpenChange: PropTypes.func,
/** Called when clear */ onClear: PropTypes.func,

};

ColorPicker.defaultProps = {};

export default ColorPicker;