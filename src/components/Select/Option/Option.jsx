import React from "react";
import PropTypes from 'prop-types';
import { Select as ANTComponent } from "antd";


/**
 * @uxpindocurl https://ant.design/components/Select/
 * @uxpindescription Generate a group of Radios.
  * @uxpinnamespace Select
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

    /** Set value of mentions
    */
    value: PropTypes.string,

    /** The style properties of the component */
    style: PropTypes.object,

    /** Title of the option */
    label: PropTypes.node,

    /** If the option is disabled */
    disabled: PropTypes.bool,

    /** className for the option */
    className: PropTypes.string,

};

Option.defaultProps = {};

export default Option;