import React from "react";
import PropTypes from 'prop-types';
import { Row as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/grid/
 * @uxpindescription In the grid system, we define the frame outside the information area based on row and column, to ensure that every area can have stable arrangement.
 */

const Row = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />
    );
};

Row.propTypes = {
    /** Vertical alignment of the flex layout */
    align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),

    /** The content of the component. */
    children: PropTypes.node,

    /** Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}. Or you can use array to make horizontal and vertical spacing work at the same time [horizontal, vertical]	 */
    gutter: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.object,
    ]),

    /** Horizontal alignment of the flex layout */
    justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']),

    /** Custom CSS class for the row */
    className: PropTypes.string,

    /** Whether to wrap grid items */
    wrap: PropTypes.bool,

    /** Custom style for the row */
    style: PropTypes.object,

};

Row.defaultProps = {};

export default Row;