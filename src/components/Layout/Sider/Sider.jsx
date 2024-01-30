import React from "react";
import PropTypes from 'prop-types';
import { Layout as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Layout/
 * @uxpindescription The sidebar with default style and basic functions, in which any element can be nested, and must be placed in Layout.
 * @uxpinnamespace Layout
 */

const Sider = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Sider {...props} />

    );
};

Sider.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** Children components inside the Sider */
    children: PropTypes.node,

    /** The breakpoint at which the Sider will automatically collapse */
    breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

    /** Whether the Sider is collapsible */
    collapsible: PropTypes.bool,

    /** Current collapse status of the Sider */
    collapsed: PropTypes.bool,

    /** Width of the Sider when it's collapsed */
    collapsedWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Custom class name for the sider */
    className: PropTypes.string,

    /** To set the default collapsed status */
    defaultCollapsed: PropTypes.bool,

    /** Triggered when the collapse status is changed */
    onCollapse: PropTypes.func,

    /** Reverse direction of arrow, for a collapsible sider */
    reverseArrow: PropTypes.bool,

    /** Custom style for the sider */
    style: PropTypes.object,

    /** The theme of the Sider */
    theme: PropTypes.oneOf(['light', 'dark']),

    /** Whether to render the trigger or not */
    trigger: PropTypes.node,

    /** Width of the Sider when it's unfolded */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Zero width trigger styling */
    zeroWidthTriggerStyle: PropTypes.object,
};

Sider.defaultProps = {};

export default Sider;