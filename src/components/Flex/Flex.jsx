import React from "react";
import PropTypes from 'prop-types';
import { Flex as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Flex/
 * @uxpindescription Flex is used to set the layout of block-level elements. It does not add a wrapper element. Suitable for layout of child elements in vertical or horizontal direction, and provides more flexibility and control.
 */

const Flex = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Flex.propTypes = {
    /** Sets the alignment of elements in the direction of the cross axis */
    align: PropTypes.oneOf([
        'normal',
        'stretch',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'self-start',
        'self-end',
        'baseline',
        'inherit',
        'initial',
        'revert',
        'revert-layer',
        'unset',
    ]),

    /** The content of the component. */
    children: PropTypes.node,

    /** custom element type */
    component: PropTypes.elementType,

    /** Sets the flex CSS shorthand properties */
    flex: PropTypes.string,

    /** Sets the gap between grids: number+unit (30px), 'small', 'middle', 'large' */
    gap: PropTypes.oneOfType([
        PropTypes.oneOf(['small', 'middle', 'large']),
        PropTypes.string,
        PropTypes.number
    ]),

    /** Sets the alignment of elements in the direction of the main axis */
    justify: PropTypes.oneOf(['center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'left',
        'right',
        'normal',
        'space-between',
        'space-around',
        'space-evenly',
        'stretch',
        'inherit',
        'initial',
        'revert',
        'revert-layer',
        'unset']),

    /** The style properties of the component */
    style: PropTypes.object,

    /** Sets whether the element is displayed in a single line or in multiple lines */
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse', 'inherit', 'initial', 'revert', 'revert-layer', 'unset']),

    /** Is direction of the flex vertical, use flex-direction: column */
    vertical: PropTypes.bool,
};

Flex.defaultProps = {};

export default Flex;