import React from "react";
import PropTypes from 'prop-types';
import { Steps as ANTComponent } from "antd";
import Item from "./Item/Item"

/**
 * @uxpindocurl https://ant.design/components/Steps/
 * @uxpindescription Steps is a navigation bar that guides users through the steps of a task.
 */

const Steps = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Steps.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Additional class to Steps */
    className: PropTypes.string,

    /** To set the current step, counting from 0 */
    current: PropTypes.number,

    /** To specify the direction of the step bar, horizontal or vertical */
    direction: PropTypes.oneOf(['horizontal', 'vertical']),

    /** Set the initial step, counting from 0 */
    initial: PropTypes.number,

    /** StepItem content */
    items: PropTypes.array, // Assuming StepItem is an array type

    /** Place title and description with horizontal or vertical direction */
    labelPlacement: PropTypes.oneOf(['horizontal', 'vertical']),

    /** Trigger when Step is changed */
    onChange: PropTypes.func,

    /** Progress circle percentage of current step in process status */
    percent: PropTypes.number,

    /** Steps with progress dot style, customize the progress dot by setting it to a function */
    progressDot: PropTypes.bool,

    /** Change to vertical direction when screen width smaller than 532px */
    responsive: PropTypes.bool,

    /** To specify the size of the step bar */
    size: PropTypes.oneOf(['default', 'small']),

    /** To specify the status of current step */
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),

    /** Type of steps */
    type: PropTypes.oneOf(['default', 'navigation', 'inline']),
};

Steps.defaultProps = {};

Steps.Item = Item;

export default Steps;