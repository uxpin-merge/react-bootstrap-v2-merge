import React from "react";
import PropTypes from 'prop-types';
import { Layout as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Layout/
 * @uxpindescription The top layout with the default style, in which any element can be nested, and must be placed in Layout
 * @uxpinnamespace Layout
 */

const Header = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Header {...props} />

    );
};

Header.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** Whether the layout has a `Sider` in its children */
    // hasSider: PropTypes.bool,

    /** Custom class name for the layout */
    className: PropTypes.string,

    /** Custom style for the layout */
    style: PropTypes.object,


};

Header.defaultProps = {};

export default Header;