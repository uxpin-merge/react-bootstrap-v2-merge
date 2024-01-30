import React from "react";
import PropTypes from 'prop-types';
import { Segmented as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/segmented/
 * @uxpindescription Segmented Controls. When displaying multiple options and user can select a single option; When switching the selected option, the content of the associated area changes.
 */

const Segmented = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Segmented.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Option to fit width to its parent's width */
    block: PropTypes.bool,

    /** Default selected value */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

    /** Disable all segments */
    disabled: PropTypes.bool,

    /** The callback function that is triggered when the state changes */
    onChange: PropTypes.func,

    /** Set children optional */
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.node,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            icon: PropTypes.node,
            disabled: PropTypes.bool,
            className: PropTypes.string,
        })),
    ]),

    /** The size of the Segmented */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Currently selected value */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),

};

Segmented.defaultProps = {};

export default Segmented;