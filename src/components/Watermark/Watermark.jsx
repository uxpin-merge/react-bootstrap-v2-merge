import React from "react";
import PropTypes from 'prop-types';
import { Watermark as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Watermark/
 * @uxpindescription Add specific text or patterns to the page
 */

const Watermark = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} style={{ minWidth: '300px', minHeight: '300px', width: '100%', height: '100%' }}
        />

    );
};

Watermark.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Watermark text content */ content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]), /** Watermark text style */ /** Font color */ color: PropTypes.string, /** Font size */ fontSize: PropTypes.number, /** Font weight */ fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), /** Font family */ fontFamily: PropTypes.string, /** Font style */ fontStyle: PropTypes.oneOf(['none', 'normal', 'italic', 'oblique']), /** Text alignment direction */ textAlign: PropTypes.oneOf(['start', 'end', 'left', 'right', 'center']), /** The spacing between watermarks */ gap: PropTypes.arrayOf(PropTypes.number), /** The height of the watermark, the default value of content is its own height */ height: PropTypes.number, /** Pass the watermark to the pop-up component such as Modal, Drawer */ inherit: PropTypes.bool, /** Image source, it is recommended to export 2x or 3x image, high priority (support base64 format) */ image: PropTypes.string, /** The offset of the watermark from the upper left corner of the container. The default is gap/2 */ offset: PropTypes.arrayOf(PropTypes.number), /** The rotation Angle when the watermark is drawn, unit ° */ rotate: PropTypes.number, /** The width of the watermark, the default value of content is its own width */ width: PropTypes.number, /** The z-index of the appended watermark element */ zIndex: PropTypes.number,

};

Watermark.defaultProps = {};

export default Watermark;