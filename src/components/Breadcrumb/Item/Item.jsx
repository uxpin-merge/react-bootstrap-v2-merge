import React from "react";
import PropTypes from 'prop-types';
import { Breadcrumb as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Breadcrumb/
 * @uxpindescription A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
 * @uxpinnamespace Breadcrumb
*/

const Item = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Item {...props} />

    );
};

Item.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The additional css class */
    className: PropTypes.string,

    /** The dropdown props */
    dropdownProps: PropTypes.object,

    /** Target of hyperlink. Can not work with path */
    href: PropTypes.string,

    /** The menu props */
    menu: PropTypes.node,

    /** Set the handler to handle click event */
    onClick: PropTypes.func,

    /** Connected path. Each path will connect with prev one. Can not work with href */
    path: PropTypes.string,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Item name */
    title: PropTypes.node,
};

Item.defaultProps = {};

export default Item;