import React from "react";
import PropTypes from 'prop-types';
import { Progress as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Progress/
 * @uxpindescription Display the current progress of an operation flow.
 */

const Progress = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Progress.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** The template function of the content */
    format: PropTypes.func,
    /** The color of circular progress, render gradient when passing an object */
    gapDegree: PropTypes.number,
    /** The gap position, options: top, bottom, left, right */
    gapPosition: PropTypes.string,
    /** The color of circular progress, render gradient when passing an object */
    percent: PropTypes.number,
    /** The total step count */
    showInfo: PropTypes.bool,
    /** The gap degree of half circle, 0 ~ 295 */
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.string]),
    /** To set the status of the Progress, options: success, exception, normal, active(line only) */
    status: PropTypes.oneOf(['success', 'exception', 'normal', 'active']),
    /** Configs of successfully progress bar */
    steps: PropTypes.number,
    /** The color of circular progress, render gradient when passing an object */
    from: PropTypes.string, to: PropTypes.string, direction: PropTypes.string,
    /** The style of the progress linecap, options: round, butt, square */
    strokeLinecap: PropTypes.oneOf(['round', 'butt', 'square']),
    /** To set the type, options: line, circle, dashboard */
    strokeWidth: PropTypes.number,
    /** The color of progress bar */
    percent: PropTypes.number, strokeColor: PropTypes.string,
    /** The color of unfilled part */
    trailColor: PropTypes.string,
    /** Progress size */
    type: PropTypes.oneOf(['line', 'circle', 'dashboard']),

};

Progress.defaultProps = {};

export default Progress;