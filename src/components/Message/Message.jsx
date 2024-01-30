import React from "react";
import PropTypes from 'prop-types';
import { message as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Message/
 * @uxpindescription TODO
 */

const Message = (props) => {
    // Component logic

    return (
        // Your component JSX
        message.info('This is a normal message')

    );
};

// Message.propTypes = {
//     /** The content of the component. */
//     // children: PropTypes.node,

//     /** The style properties of the component */
//     style: PropTypes.object,

//     /** Customized CSS class */ className: PropTypes.string, /** The content of the message */ content: PropTypes.node, /** Time (seconds) before auto-dismiss, don't dismiss if set to 0 */ duration: PropTypes.number, /** Customized Icon */ icon: PropTypes.node, /** The unique identifier of the Message */ key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), /** Customized inline style */ style: PropTypes.object, /** Specify a function that will be called when the message is clicked */ onClick: PropTypes.func, /** Specify a function that will be called when the message is closed */ onClose: PropTypes.func,

// };

Message.defaultProps = {};

export default Message;