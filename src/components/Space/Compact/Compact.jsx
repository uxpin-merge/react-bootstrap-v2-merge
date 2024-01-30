import React from "react";
import PropTypes from 'prop-types';
import { Space as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Space/
 * @uxpindescription TODO
 * @uxpinnamespace Space
 */

const Compact = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Compact {...props} />

    );
};

Compact.propTypes = {

    /** Option to fit width to its parent's width */
    block: PropTypes.bool,

    /** The content of the component. */
    children: PropTypes.node,

    /** Set direction of layout */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    /** Set child component size */
    size: PropTypes.oneOf(['large', 'middle', 'small']),


    /** The style properties of the component */
    style: PropTypes.object,
};

Compact.defaultProps = {};

export default Compact;