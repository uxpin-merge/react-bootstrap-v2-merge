import React from "react";
import PropTypes from 'prop-types';
import { Skeleton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Skeleton/
 * @uxpindescription Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.
  * @uxpinnamespace Skeleton
 */

const Input = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Input {...props} />

    );
};

Input.propTypes = {
    /** Show animation effect */
    active: PropTypes.bool,

    /** Set the size of input */
    size: PropTypes.oneOf(['large', 'small', 'default'])
};

Input.defaultProps = {};

export default Input;