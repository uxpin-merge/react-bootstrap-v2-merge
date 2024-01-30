import React from "react";
import PropTypes from 'prop-types';
import { Badge as ANTComponent } from "antd";
import Ribbon from "./Ribbon/Ribbon";
/**
 * @uxpindocurl https://ant.design/components/Badge/
 * @uxpindescription Small numerical value or status descriptor for UI elements.
 */

const Badge = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Badge.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /** Customize Badge dot color */
    color: PropTypes.string,

    /** Number to show in badge */
    count: PropTypes.node,

    /** Semantic DOM class */
    classNames: PropTypes.objectOf(PropTypes.string), // Since 5.7.0

    /** Whether to display a red dot instead of count */
    dot: PropTypes.bool,

    /** Set offset of the badge dot */
    offset: PropTypes.arrayOf(PropTypes.number),

    /** Max count to show */
    overflowCount: PropTypes.number,

    /** Whether to show badge when count is zero */
    showZero: PropTypes.bool,

    /** If count is set, size sets the size of badge */
    size: PropTypes.oneOf(['default', 'small']),

    /** Set Badge as a status dot */
    status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']),

    /** Semantic DOM style */
    styles: PropTypes.object, // Since 5.7.0

    /** If status is set, text sets the display text of the status dot */
    text: PropTypes.node,

    /** Text to show when hovering over the badge */
    title: PropTypes.string,
};

Badge.defaultProps = {};

Badge.Ribbon = Ribbon;

export default Badge;