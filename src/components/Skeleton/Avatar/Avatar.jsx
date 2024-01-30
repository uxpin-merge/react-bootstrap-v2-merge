import React from "react";
import PropTypes from 'prop-types';
import { Skeleton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Skeleton/
 * @uxpindescription Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.
  * @uxpinnamespace Skeleton
 */

const Avatar = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Avatar {...props} />

    );
};

Avatar.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Show animation effect, only valid when used avatar independently */
    active: PropTypes.bool,

    /** Set the shape of avatar */
    shape: PropTypes.oneOf(['circle', 'square']),

    /** Set the size of avatar */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default'])
    ])

};

Avatar.defaultProps = {};

export default Avatar;