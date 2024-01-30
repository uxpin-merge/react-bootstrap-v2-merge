import React from "react";
import PropTypes from 'prop-types';
import { Col as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Col/
 * @uxpindescription TODO
 */

const Col = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Col.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /** Raster number of cells to occupy, 0 corresponds to display: none */
    span: PropTypes.number,

    /** Flex layout style */
    flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /** Raster order */
    order: PropTypes.number,

    /** The number of cells to offset Col from the left */
    offset: PropTypes.number,

    /** The number of cells that raster is moved to the left */
    pull: PropTypes.number,

    /** The number of cells that raster is moved to the right */
    push: PropTypes.number,

    /** Screen < 576px and also default setting, could be a span value or an object containing above props */
    xs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** Screen ≥ 576px, could be a span value or an object containing above props */
    sm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** Screen ≥ 768px, could be a span value or an object containing above props */
    md: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** Screen ≥ 992px, could be a span value or an object containing above props */
    lg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** Screen ≥ 1200px, could be a span value or an object containing above props */
    xl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** Screen ≥ 1600px, could be a span value or an object containing above props */
    xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

    /** The style properties of the component */
    style: PropTypes.object,

};

Col.defaultProps = {};

export default Col;