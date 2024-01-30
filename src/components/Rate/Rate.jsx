import React from "react";
import PropTypes from 'prop-types';
import { Rate as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/Rate/
 * @uxpindescription Rate component
 */

const Rate = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Rate.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


/** Whether to allow clear when click again */ allowClear: PropTypes.bool,
/** Whether to allow semi selection */ allowHalf: PropTypes.bool,
/** If get focus when component mounted */ autoFocus: PropTypes.bool,
/** The custom character of rate */ character: PropTypes.node,
/** The custom class name of rate */ className: PropTypes.string,
/** Star count */ count: PropTypes.number,
/** The default value */ defaultValue: PropTypes.number,
/** If read-only, unable to interact */ disabled: PropTypes.bool,
/** The custom style object of rate */ style: PropTypes.object,
/** Customize tooltip by each character */ tooltips: PropTypes.arrayOf(PropTypes.string),
/** The current value
 * @uxpinbind onChange 0
*/ value: PropTypes.number,
/** Callback when the component loses focus */ onBlur: PropTypes.func,
/** Callback when selecting a value */ onChange: PropTypes.func,
/** Callback when the component gets focus */ onFocus: PropTypes.func,
/** Callback when hovering over an item */ onHoverChange: PropTypes.func,
/** Callback when a key is pressed down on the component */ onKeyDown: PropTypes.func,

};

Rate.defaultProps = {};

export default Rate;