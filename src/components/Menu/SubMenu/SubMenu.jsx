import React from "react";
import PropTypes from 'prop-types';
import { Menu as ANTComponent } from "antd";
// import MenuItem from "antd/es/menu/MenuItem";

/**
 * @uxpindocurl https://ant.design/components/MenuItemType/
 * @uxpindescription TODO
* @uxpinnamespace Menu
 */

const SubMenu = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.SubMenu {...props} />

    );
};

SubMenu.propTypes = {

    /** The style properties of the component */
    style: PropTypes.object,

    /** Sub-menus or sub-menu items */
    children: PropTypes.node, // ItemType[]

    /** Whether sub-menu is disabled */
    disabled: PropTypes.bool,

    /** Icon of sub menu */
    icon: PropTypes.node,

    /** Unique ID of the sub-menu */
    key: PropTypes.string,

    /** Menu label */
    label: PropTypes.node,

    /** Sub-menu class name, not working when mode="inline" */
    popupClassName: PropTypes.string,

    /** Sub-menu offset, not working when mode="inline" */
    popupOffset: PropTypes.arrayOf(PropTypes.number),

    /** Color theme of the SubMenu (inherits from Menu by default) */
    theme: PropTypes.oneOf(['light', 'dark']),

    /** Set display title for collapsed item */
    title: PropTypes.string,

    /** Callback executed when the sub-menu title is clicked */
    onTitleClick: PropTypes.func // function({ key, domEvent })
};

SubMenu.defaultProps = {};

export default SubMenu;