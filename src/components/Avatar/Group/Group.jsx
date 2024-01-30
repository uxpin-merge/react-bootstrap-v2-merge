import React from "react";
import PropTypes from 'prop-types';
import { Avatar as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Avatar/
 * @uxpindescription Avatars can be used to represent people or objects. It supports images, Icons, or letters.
 * @uxpinnamespace Avatar
*/

const Group = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Group {...props} />

    );
};

Group.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /** Max avatars to show */
    maxCount: PropTypes.number,

    /** The placement of excess avatar Popover ('top' or 'bottom') */
    maxPopoverPlacement: PropTypes.oneOf(['top', 'bottom']),

    /** Set the trigger of excess avatar Popover ('hover', 'focus', 'click') */
    maxPopoverTrigger: PropTypes.oneOf(['hover', 'focus', 'click']), // Since 4.17.0

    /** The style of excess avatar */
    maxStyle: PropTypes.object, // CSSProperties

    /** The size of the avatar (number, 'large', 'small', 'default', or an object for responsive sizes) */
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['large', 'small', 'default']),
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            // Add other breakpoints if needed
        }),
    ]), // Since 4.8.0

    /** The shape of the avatar ('circle' or 'square') */
    shape: PropTypes.oneOf(['circle', 'square']), // Since 5.8.0

};

Group.defaultProps = {};

export default Group;