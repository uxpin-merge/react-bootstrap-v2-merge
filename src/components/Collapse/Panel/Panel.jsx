import React from "react";
import PropTypes from 'prop-types';
import { Collapse as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/collapse/
 * @uxpindescription A content area which can be collapsed and expanded.
 * Can be used to group or hide complex regions to keep the page clean.
 * Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.
 * @uxpinnamespace Collapse
 */

const Panel = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Panel {...props} />

    );
};

Panel.propTypes = {


    /** The content of the component. */
    children: PropTypes.node,

    /** Specify whether the panel be collapsible or the trigger area of collapsible */
    collapsible: PropTypes.oneOf(['header', 'icon', 'disabled']),

    /** The extra element in the corner */
    extra: PropTypes.node,

    /** Forced render of content on panel, instead of lazy rendering after clicking on header */
    forceRender: PropTypes.bool,

    /** Title of the panel */
    header: PropTypes.node,

    /** Unique key identifying the panel from among its siblings */
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** If false, panel will not show arrow icon. If false, collapsible can't be set as icon */
    showArrow: PropTypes.bool,

    /** The style properties of the component */
    style: PropTypes.object,
};

Panel.defaultProps = {};

export default Panel;