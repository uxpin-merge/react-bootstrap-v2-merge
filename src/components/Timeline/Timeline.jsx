import React from "react";
import PropTypes from 'prop-types';
import { Timeline as ANTComponent } from "antd";
import Item from "./Item/Item";

/**
 * @uxpindocurl https://ant.design/components/Timeline/
 * @uxpindescription TODO
 */

const Timeline = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Timeline.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,
    /** Each node of timeline */
    items: PropTypes.array, // Assuming Items[] is an array type

    /** By sending 'alternate', the timeline will distribute the nodes to the left and right */
    mode: PropTypes.oneOf(['left', 'alternate', 'right']),

    /** Set the last ghost node's existence or its content */
    pending: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** Set the dot of the last ghost node when pending is true */
    pendingDot: PropTypes.node,

    /** Whether to reverse nodes or not */
    reverse: PropTypes.bool,
};

Timeline.defaultProps = {};

Timeline.Item = Item;

export default Timeline;