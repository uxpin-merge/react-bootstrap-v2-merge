import React from "react";
import PropTypes from 'prop-types';
import { Tabs as ANTComponent } from "antd";
import TabPane from "./TabPane/TabPane";
/**
 * @uxpindocurl https://ant.design/components/Tabs/
 * @uxpindescription TODO
 */

const Tabs = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Tabs.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Current TabPane's key */
    activeKey: PropTypes.string,

    /** Customize add icon */
    addIcon: PropTypes.node,

    /** Whether to change tabs with animation */
    animated: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ inkBar: PropTypes.bool, tabPane: PropTypes.bool })
    ]),

    /** Centers tabs */
    centered: PropTypes.bool,

    /** Initial active TabPane's key, if activeKey is not set */
    defaultActiveKey: PropTypes.string,

    /** Hide plus icon or not. Only works while type='editable-card' */
    hideAdd: PropTypes.bool,

    /** Customize size and align of indicator */
    indicator: PropTypes.shape({
        size: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
        align: PropTypes.oneOf(['start', 'center', 'end'])
    }),

    /** Configure tab content */
    items: PropTypes.array,

    /** The custom icon of ellipsis */
    moreIcon: PropTypes.node,

    /** className for more dropdown */
    popupClassName: PropTypes.string,

    /** Replace the TabBar */
    renderTabBar: PropTypes.func,

    /** Preset tab bar size */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Extra content in tab bar */
    tabBarExtraContent: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.shape({ left: PropTypes.node, right: PropTypes.node })
    ]),

    /** The gap between tabs */
    tabBarGutter: PropTypes.number,

    /** Tab bar style object */
    tabBarStyle: PropTypes.object,

    /** Position of tabs */
    tabPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

    /** Whether destroy inactive TabPane when change tab */
    destroyInactiveTabPane: PropTypes.bool,

    /** Basic style of tabs */
    type: PropTypes.oneOf(['line', 'card', 'editable-card']),

    /** Callback executed when active tab is changed */
    onChange: PropTypes.func,

    /** Callback executed when tab is added or removed. Only works while type='editable-card' */
    onEdit: PropTypes.func,

    /** Callback executed when tab is clicked */
    onTabClick: PropTypes.func,

    /** Trigger when tab scroll */
    onTabScroll: PropTypes.func,
};

Tabs.defaultProps = {};

Tabs.TabPane = TabPane;

export default Tabs;