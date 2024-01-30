import React from "react";
import PropTypes from 'prop-types';
import { Cascader as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/cascader/
 * @uxpindescription Cascade selection box.
 * @uxpinnamespace Cascader
 */

const Option = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.Option {...props} />

    );
};

Option.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,


};

Option.defaultProps = {};

export default Option;