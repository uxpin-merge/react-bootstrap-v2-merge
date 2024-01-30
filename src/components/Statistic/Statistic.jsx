import React from "react";
import PropTypes from 'prop-types';
import { Statistic as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/statistic/
 * @uxpindescription Display statistic number.

 */

const Statistic = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Statistic.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** The decimal separator */ decimalSeparator: PropTypes.string, /** Customize value display logic */ formatter: PropTypes.func, /** The group separator */ groupSeparator: PropTypes.string, /** Loading status of Statistic */ loading: PropTypes.bool, /** The precision of input value */ precision: PropTypes.number, /** The prefix node of value */ prefix: PropTypes.node, /** The suffix node of value */ suffix: PropTypes.node, /** Display title */ title: PropTypes.node, /** Display value */ value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), /** Set value section style */ valueStyle: PropTypes.object,

};

Statistic.defaultProps = {};

export default Statistic;