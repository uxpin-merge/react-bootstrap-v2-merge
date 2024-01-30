import React from "react";
import PropTypes from 'prop-types';
import { Mentions as ANTComponent } from "antd";
import Option from "./Option/Option";

/**
 * @uxpindocurl https://ant.design/components/Mentions/
 * @uxpindescription Radio component.
 */

const Mentions = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Mentions.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,

    /** Show clear button */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node })
    ]),

    /** Auto get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** Textarea height autosize feature */
    autoSize: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object // { minRows: 2, maxRows: 6 }
    ]),

    /** Default value */
    defaultValue: PropTypes.string,

    /** Customize filter option logic */
    filterOption: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),

    /** Set the mount HTML node for suggestions */
    getPopupContainer: PropTypes.func,

    /** Set mentions content when not match */
    notFoundContent: PropTypes.node,

    /** Set popup placement */
    placement: PropTypes.oneOf(['top', 'bottom']),

    /** Set trigger prefix keyword */
    prefix: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** Set split string before and after selected mention */
    split: PropTypes.string,

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning', 'success', 'validating']),

    /** Customize trigger search logic */
    validateSearch: PropTypes.func,

    /** Set value of mentions
     * @uxpinbind onChange 0.target.value
    */
    value: PropTypes.string,

    /** Variants of Input */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Trigger when mentions lose focus */
    onBlur: PropTypes.func,

    /** Trigger when value changed */
    onChange: PropTypes.func,

    /** Trigger when mentions get focus */
    onFocus: PropTypes.func,

    /** The callback function that is triggered when textarea resize */
    onResize: PropTypes.func,

    /** Trigger when prefix hit */
    onSearch: PropTypes.func,

    /** Trigger when user select the option */
    onSelect: PropTypes.func,

    /** Option Configuration */
    options: PropTypes.array, // Assuming Options is an array type
};

Mentions.defaultProps = {};

Mentions.Option = Option;

export default Mentions;