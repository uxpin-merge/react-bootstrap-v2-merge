import React from "react";
import PropTypes from 'prop-types';
import { Timeline as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Timeline/
 * @uxpindescription TODO
 * @uxpinnamespace Timeline
*/

const Item = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Item {...props} />

    );
};

Item.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,
    /** Set the content */
    children: PropTypes.node,

    /** Set the circle's color to blue, red, green, gray or other custom colors */
    color: PropTypes.string,

    /** Customize timeline dot */
    dot: PropTypes.node,

    /** Set the label */
    label: PropTypes.node,

    /** Customize node position */
    position: PropTypes.oneOf(['left', 'right']),

};

Item.defaultProps = {};

export default Item;