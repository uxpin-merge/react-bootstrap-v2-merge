import React from "react";
import PropTypes from 'prop-types';
import { Space as ANTComponent } from "antd";
import Compact from './Compact/Compact';

/**
 * @uxpindocurl https://ant.design/components/Space/
 * @uxpindescription TODO
 */

const Space = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Space.propTypes = {
    /** Alignment of items in the space */
    align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),

    /** React elements within space */
    children: PropTypes.node,

    /** Custom class names for the space container */
    className: PropTypes.string,

    /** The direction of space */
    direction: PropTypes.oneOf(['vertical', 'horizontal']),

    /** Size of the space, can be an array to set horizontal and vertical spacing */
    size: PropTypes.oneOf(['small', 'middle', 'large']),

    /** Custom style for the space container */
    style: PropTypes.object,

    /** Split the space with a specific separator */
    split: PropTypes.node,

    /** Whether to wrap items */
    wrap: PropTypes.bool,
};

Space.defaultProps = {};

Space.Compact = Compact;

export default Space;