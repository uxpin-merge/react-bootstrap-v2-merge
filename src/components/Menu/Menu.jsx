import React from "react";
import PropTypes from 'prop-types';
import { Menu as ANTComponent } from "antd";
import Item from "./Item/Item";
import SubMenu from "./SubMenu/SubMenu";

/**
 * @uxpindocurl https://ant.design/components/Menu/
 * @uxpindescription A versatile menu for navigation.
 */


const Menu = (props) => {
    // Component logic

    return (
        // Your component JSX
        <div>
            <ANTComponent {...props} />
        </div>

    );
};

Menu.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Array with the keys of default opened sub menus */
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string),

    /** Array with the keys of default selected menu items */
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Custom expand icon of submenu */
    expandIcon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func // function with props: SubMenuProps & { isSubMenu: boolean }
    ]),

    /** Render submenu into DOM before it becomes visible */
    forceSubMenuRender: PropTypes.bool,

    /** Specifies the collapsed status when menu is in inline mode */
    inlineCollapsed: PropTypes.bool,

    /** Indent (in pixels) of inline menu items on each level */
    inlineIndent: PropTypes.number,

    /** Menu item content */
    items: PropTypes.arrayOf(PropTypes.object), // ItemType[]

    /** Type of menu */
    mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),

    /** Allows selection of multiple items */
    multiple: PropTypes.bool,

    /** Array with the keys of currently opened sub-menus */
    openKeys: PropTypes.arrayOf(PropTypes.string),

    /** Customized the ellipsis icon when menu is collapsed horizontally */
    overflowedIndicator: PropTypes.node,

    /** Allows selecting menu items */
    selectable: PropTypes.bool,

    /** Array with the keys of currently selected menu items
    * @uxpinbind onSelect 0.selectedKeys
    */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Style of the root node */
    style: PropTypes.object, // CSSProperties

    /** Delay time to hide submenu when mouse leaves (in seconds) */
    subMenuCloseDelay: PropTypes.number,

    /** Delay time to show submenu when mouse enters (in seconds) */
    subMenuOpenDelay: PropTypes.number,

    /** Color theme of the menu */
    theme: PropTypes.oneOf(['light', 'dark']),

    /** Which action can trigger submenu open/close */
    triggerSubMenuAction: PropTypes.oneOf(['hover', 'click']),

    /** Called when a menu item is clicked */
    onClick: PropTypes.func, // function({ item, key, keyPath, domEvent })

    /** Called when a menu item is deselected (multiple mode only) */
    onDeselect: PropTypes.func, // function({ item, key, keyPath, selectedKeys, domEvent })

    /** Called when sub-menus are opened or closed */
    onOpenChange: PropTypes.func, // function(openKeys: string[])

    /** Called when a menu item is selected */
    onSelect: PropTypes.func, // function({ item, key, keyPath, selectedKeys
};

Menu.defaultProps = {};

Menu.Item = Item;

Menu.SubMenu = SubMenu;

export default Menu;