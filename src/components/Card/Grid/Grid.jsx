import React from "react";
import PropTypes from 'prop-types';
import { Card as ANTComponent, Flex } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Card/
 * @uxpindescription Grid cards as children of Card. Must be a child of Card.
  * @uxpinnamespace Card
*/

const Grid = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Grid {...props} />
    );
};

Grid.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,
    /** The className of container */
    className: PropTypes.string,

    /** Lift up when hovering card grid */
    hoverable: PropTypes.bool,

    /** The style object of container */
    style: PropTypes.object, // CSSProperties

};

Grid.defaultProps = {};

export default Grid;