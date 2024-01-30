import React from "react";
import PropTypes from 'prop-types';
import { Divider as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Divider/
 * @uxpindescription A divider line separates different content.
 */

const Divider = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Divider.propTypes = {
    /** Text inside the divider */
    children: PropTypes.node,

    /** Custom CSS class for the divider */
    className: PropTypes.string,

    /** Whether the divider is dashed */
    dashed: PropTypes.bool,

    /** Orientation of divider text */
    orientation: PropTypes.oneOf(['left', 'right', 'center']),

    /** Custom plain style */
    plain: PropTypes.bool,

    /** Custom style for the divider */
    style: PropTypes.object,

    /** Type of the divider line */
    type: PropTypes.oneOf(['horizontal', 'vertical']),
};

Divider.defaultProps = {};

export default Divider;