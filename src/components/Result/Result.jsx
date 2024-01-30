import React from "react";
import PropTypes from 'prop-types';
import { Result as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Result/
 * @uxpindescription Used to feed back the results of a series of operational tasks.
 */

const Result = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Result.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Operating area */
    extra: PropTypes.node,

    /** Custom back icon */
    icon: PropTypes.node,

    /** Result status, decide icons and colors */
    status: PropTypes.oneOf(['success', 'error', 'info', 'warning', '404', '403', '500']),

    /** The subTitle */
    subTitle: PropTypes.node,

    /** The title */
    title: PropTypes.node
};

Result.defaultProps = {};

export default Result;