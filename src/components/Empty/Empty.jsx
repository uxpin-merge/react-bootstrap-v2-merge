import React from "react";
import PropTypes from 'prop-types';
import { Empty as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Empty/
 * @uxpindescription Empty state placeholder.
 */

const Empty = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Empty.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Customize description */ description: PropTypes.node, /** Customize image. Will treat as image URL when a string is provided */ image: PropTypes.node, /** The style of the image */ imageStyle: PropTypes.object,

};

Empty.defaultProps = {};

export default Empty;