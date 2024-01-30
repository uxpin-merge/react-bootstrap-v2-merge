import React from "react";
import PropTypes from 'prop-types';
import { Menu as ANTComponent } from "antd";
/**
 * @uxpindocurl https://ant.design/components/MenuItemType/
 * @uxpindescription TODO
* @uxpinnamespace Menu
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

    /** The style properties of the component */
    style: PropTypes.object,

    /** Display the danger style */
    danger: PropTypes.bool,

    /** Whether menu item is disabled */
    disabled: PropTypes.bool,

    /** The icon of the menu item */
    icon: PropTypes.node,

    /** Unique ID of the menu item */
    key: PropTypes.string,

    /** Menu label */
    label: PropTypes.node,

    /** Set display title for collapsed item */
    title: PropTypes.string

};

Item.defaultProps = {};

export default Item;