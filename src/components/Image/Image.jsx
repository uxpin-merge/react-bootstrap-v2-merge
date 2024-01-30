import React from "react";
import PropTypes from 'prop-types';
import { Image as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Image/
 * @uxpindescription TODO
 */

const Image = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Image.propTypes = {
    /** The content of the component. */
    // children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Image description */ alt: PropTypes.string,

 /** Load failure fault-tolerant src */ fallback: PropTypes.string,

 /** Image height */ height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

 /** Load placeholder, use default placeholder when set true */ placeholder: PropTypes.node,

 /** Preview config, disabled when false */ preview: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

 /** Image path */ src: PropTypes.string,

 /** Image width */ width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

 /** Load failed callback */ onError: PropTypes.func,

};

Image.defaultProps = {};

export default Image;