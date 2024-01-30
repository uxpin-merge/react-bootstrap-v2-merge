import React from "react";
import PropTypes from 'prop-types';
import { Avatar as ANTComponent } from "antd";
import Group from "./Group/Group";

/**
 * @uxpindocurl https://ant.design/components/Avatar/
 * @uxpindescription Avatars can be used to represent people or objects. It supports images, Icons, or letters.
 */

const Avatar = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Avatar.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** This attribute defines the alternative text describing the image */
    alt: PropTypes.string,
    /** Letter type unit distance between left and right sides */
    gap: PropTypes.number,
    /** Custom icon type for an icon avatar */
    icon: PropTypes.node,
    /** The shape of avatar */
    shape: PropTypes.oneOf(['circle', 'square']),
    /** The size of the avatar: number, 'small', 'large'*/
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The address of the image for an image avatar or image element */
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A list of sources to use for different screen resolutions */
    srcSet: PropTypes.string,
    /** The style properties of the component */
    style: PropTypes.object,
    /** Whether the picture is allowed to be dragged */
    draggable: PropTypes.bool,
    /** CORS settings attributes */
    crossOrigin: PropTypes.oneOf(['anonymous', 'use-credentials']),
    /** Handler when img load error, return false to prevent default fallback behavior */
    onError: PropTypes.func,

};

Avatar.defaultProps = {};

Avatar.Group = Group;

export default Avatar;