import React from "react";
import PropTypes from 'prop-types';
import { Badge as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Space/
 * @uxpindescription Small numerical value or status descriptor for UI elements.
 * @uxpinnamespace Badge
 */

const Ribbon = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Ribbon {...props} />

    );
};

Ribbon.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /** Customize Ribbon color */
    color: PropTypes.string,

    /** The placement of the Ribbon, 'start' and 'end' follow text direction (RTL or LTR) */
    placement: PropTypes.oneOf(['start', 'end']),
    /** The style properties of the component */
    style: PropTypes.object,
    /** Content inside the Ribbon */
    text: PropTypes.node,
};

Ribbon.defaultProps = {};

export default Ribbon;