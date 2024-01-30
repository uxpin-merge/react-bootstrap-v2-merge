import React from "react";
import PropTypes from 'prop-types';
import { Notification as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Notification/
 * @uxpindescription TODO
 */

const Notification = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}/>

    );
};

Notification.propTypes = { 
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Customized close button */ btn: PropTypes.node, /** Customized CSS class */ className: PropTypes.string, /** Custom close icon. 5.7.0: close button will be hidden when setting to null or false */ closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]), /** The content of notification box (required) */ description: PropTypes.node.isRequired, /** Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically */ duration: PropTypes.number, /** Customized icon */ icon: PropTypes.node, /** The unique identifier of the Notification */ key: PropTypes.string, /** The title of notification box (required) */ message: PropTypes.node.isRequired, /** Position of Notification, can be one of topLeft topRight bottomLeft bottomRight */ placement: PropTypes.string, /** Customized inline style */ style: PropTypes.object, /** The semantics of notification content recognized by screen readers. The default value is alert. */ role: PropTypes.oneOf(['alert', 'status']), /** Specify a function that will be called when the notification is clicked */ onClick: PropTypes.func, /** Trigger when notification closed */ onClose: PropTypes.func, props: PropTypes.object,
    
};

Notification.defaultProps = {};

export default Notification;