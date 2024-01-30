import React from "react";
import PropTypes from 'prop-types';
import { Skeleton as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Skeleton/
 * @uxpindescription Provide a placeholder while you wait for content to load, or to visualize content that doesn't exist yet.
  * @uxpinnamespace Skeleton
 */

const Button = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Button {...props} />

    );
};

Button.propTypes = {
    /** Show animation effect */
    active: PropTypes.bool,

    /** Option to fit button width to its parent width */
    block: PropTypes.bool,

    /** Set the shape of button */
    shape: PropTypes.oneOf(['circle', 'round', 'square', 'default']),

    /** Set the size of button */
    size: PropTypes.oneOf(['large', 'small', 'default'])
};

Button.defaultProps = {};

export default Button;