import React from "react";
import PropTypes from 'prop-types';
import { Layout as ANTComponent } from "antd";
import Sider from './Sider/Sider';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";


/**
 * @uxpindocurl https://ant.design/components/Layout/
 * @uxpindescription  layout wrapper, in which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container.
 */

const Layout = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Layout.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** Whether the layout has a `Sider` in its children */
    hasSider: PropTypes.bool,

    /** Custom class name for the layout */
    className: PropTypes.string,

    /** Custom style for the layout */
    style: PropTypes.object,

};

Layout.defaultProps = {};
Layout.Sider = Sider;
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;