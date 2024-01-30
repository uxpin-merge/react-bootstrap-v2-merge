import React from "react";
import PropTypes from 'prop-types';
import { Tabs as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tabs/
 * @uxpindescription TODO
  * @uxpinnamespace Tabs
 */

const TabPane = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.TabPane {...props} />

    );
};

TabPane.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /** current tab's title corresponding to current tabPane*/
    tab: PropTypes.node,
    /** The style properties of the component */
    style: PropTypes.object,


    /** Whether a close (x) button is visible, Only works while type='editable-card' */
    closable: PropTypes.bool,

    /** Customize close icon in TabPane's head. Only works while type='editable-card'. 5.7.0: close button will be hidden when setting to null or false */
    closeIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),

    /** Whether destroy inactive TabPane when change tab */
    destroyInactiveTabPane: PropTypes.bool,

    /** Set TabPane disabled */
    disabled: PropTypes.bool,

    /** Forced render of content in tabs, not lazy render after clicking on tabs */
    forceRender: PropTypes.bool,

    /** TabPane's head display icon */
    icon: PropTypes.node,

    /** TabPane's key */
    key: PropTypes.string,

    /** TabPane's head display text */
    label: PropTypes.node,
};

TabPane.defaultProps = {};

export default TabPane;