import React from "react";
import PropTypes from 'prop-types';
import { Spin as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Spin/
 * @uxpindescription A spinner for displaying loading state of a page or a section.
 */

const Spin = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props}
        />

    );
};

Spin.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Specifies a delay in milliseconds for loading state (prevent flush) */
    delay: PropTypes.number,

    /** React node of the spinning indicator */
    indicator: PropTypes.node,

    /** The size of Spin, options: small, default, and large */
    size: PropTypes.oneOf(['small', 'default', 'large']),

    /** Whether Spin is visible */
    spinning: PropTypes.bool,

    /** Customize description content when Spin has children */
    tip: PropTypes.node,

    /** The className of the wrapper when Spin has children */
    wrapperClassName: PropTypes.string,

    /** Display a backdrop with the Spin component */
    fullscreen: PropTypes.bool
};

Spin.defaultProps = {};

export default Spin;