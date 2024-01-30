import React from "react";
import PropTypes from 'prop-types';
import { Tag as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tag/
 * @uxpindescription TODO
 */

const Tag = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Tag.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Custom close icon. 5.7.0: close button will be hidden when setting to null or false */ closeIcon: PropTypes.bool, /** Color of the Tag */ color: PropTypes.string, /** Set the icon of tag */ icon: PropTypes.node, /** Whether has border style */ bordered: PropTypes.bool, /** Callback executed when tag is closed */ onClose: PropTypes.func,

};

Tag.defaultProps = {};

export default Tag;