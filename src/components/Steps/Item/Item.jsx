import React from "react";
import PropTypes from 'prop-types';
import { Step as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/StepItem/
 * @uxpindescription Steps is a navigation bar that guides users through the steps of a task.
  * @uxpinnamespace Steps
 */

const Item = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Item {...props} />

    );
};

Item.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Description of the step, optional property */
    description: PropTypes.node,

    /** Disable click */
    disabled: PropTypes.bool,

    /** Icon of the step, optional property */
    icon: PropTypes.node,

    /** Status of the step, automatically set by current of Steps if not configured */
    status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),

    /** Subtitle of the step */
    subTitle: PropTypes.node,

    /** Title of the step */
    title: PropTypes.node,
};

Item.defaultProps = {};

export default Item;