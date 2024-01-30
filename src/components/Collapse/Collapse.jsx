import React from "react";
import PropTypes from 'prop-types';
import { Collapse as ANTComponent } from "antd";
import Panel from "./Panel/Panel";

/**
 * @uxpindocurl https://ant.design/components/collapse/
 * @uxpindescription A content area which can be collapsed and expanded.
 * Can be used to group or hide complex regions to keep the page clean.
 * Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.
 */

const Collapse = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Collapse.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** If true, Collapse renders as Accordion */
    accordion: PropTypes.bool,

    /** Key of the active panel
    * @uxpinbind onChange 
    */
    activeKey: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ]),

    /** Toggles rendering of the border around the collapse block */
    bordered: PropTypes.bool,

    /** Specify whether the panels of children be collapsible or the trigger area of collapsible */
    collapsible: PropTypes.oneOf(['header', 'icon', 'disabled']),

    /** Key of the initial active panel
    */
    defaultActiveKey: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ]),

    /** Destroy Inactive Panel */
    destroyInactivePanel: PropTypes.bool,

    /** Allow to customize collapse icon */
    expandIcon: PropTypes.func,

    /** Set expand icon position */
    expandIconPosition: PropTypes.oneOf(['start', 'end']),

    /** Make the collapse borderless and its background transparent */
    ghost: PropTypes.bool,

    /** Set the size of collapse */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Callback function executed when active panel is changed */
    onChange: PropTypes.func,

    /** collapse items content */
    items: PropTypes.array, // Assuming ItemType is an array type    
};

Collapse.defaultProps = {};

Collapse.Panel = Panel;

export default Collapse;