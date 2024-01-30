import React from "react";
import PropTypes from 'prop-types';
import { QRCode as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/qr-code
 * @uxpindescription Components that can convert text into QR codes, and support custom color and logo. 
 */

const QrCode = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

QrCode.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Scanned text */ value: PropTypes.string.isRequired, /** Render type: 'canvas' or 'svg' */ type: PropTypes.oneOf(['canvas', 'svg']), /** Include image URL (only image links are supported) */ icon: PropTypes.string, /** QRCode size */ size: PropTypes.number, /** Include image size */ iconSize: PropTypes.number, /** QRCode color */ color: PropTypes.string, /** QRCode background color */ bgColor: PropTypes.string, /** Whether it has border style */ bordered: PropTypes.bool, /** Error Code Level: 'L', 'M', 'Q', 'H' */ errorLevel: PropTypes.oneOf(['L', 'M', 'Q', 'H']), /** QRCode status: 'active', 'expired', 'loading', 'scanned' */ status: PropTypes.oneOf(['active', 'expired', 'loading', 'scanned']), /** Callback function when refreshing */ onRefresh: PropTypes.func,

};

QrCode.defaultProps = {};

export default QrCode;