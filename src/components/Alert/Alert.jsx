import React from "react";
import PropTypes from 'prop-types';
import { Alert as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Alert/
 * @uxpindescription Alert component for feedback.
 */

const Alert = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Alert.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** The action of Alert */ action: PropTypes.node, /** Called when close animation is finished */ afterClose: PropTypes.func, /** Whether to show as banner */ banner: PropTypes.bool, /** Custom close icon, >=5.7.0: close button will be hidden when setting to null or false */ closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]), /** Additional content of Alert */ description: PropTypes.node, /** Custom icon, effective when showIcon is true */ icon: PropTypes.node, /** Content of Alert */ message: PropTypes.node, /** Whether to show icon */ showIcon: PropTypes.bool, /** Type of Alert styles, options: success, info, warning, error */ type: PropTypes.string, /** Callback when Alert is closed */ onClose: PropTypes.func,

};

Alert.defaultProps = {};

export default Alert;