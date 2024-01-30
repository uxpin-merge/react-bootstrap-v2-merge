import React from "react";
import PropTypes from 'prop-types';
import { Select as ANTComponent } from "antd";
import Option from "./Option/Option";

/**
 * @uxpindocurl https://ant.design/components/select/
 * @uxpindescription Select component to select value from options.
 */

const Select = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Select.propTypes = {

    /** Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags */
    autoClearSearchValue: PropTypes.bool,

    /** Get focus by default */
    autoFocus: PropTypes.bool,

    /** Whether active first option by default */
    defaultActiveFirstOption: PropTypes.bool,

    /** Initial open state of dropdown */
    defaultOpen: PropTypes.bool,

    /** Initial selected option */
    defaultValue: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /** Whether disabled select */
    disabled: PropTypes.bool,

    /** The style of dropdown menu */
    dropdownRender: PropTypes.func,

    /** Customize dropdown content */
    dropdownStyle: PropTypes.object,

    /** If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded */
    filterOption: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),

    /** Sort function for search options sorting, see Array.sort's compareFunction */
    filterSort: PropTypes.func,

    /** Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative. */
    getPopupContainer: PropTypes.func,

    /** Whether to embed label in value, turn the format of value from string to { value: string, label: ReactNode } */
    labelInValue: PropTypes.bool,

    /** Config popup height */
    listHeight: PropTypes.number,

    /** Indicate loading state */
    loading: PropTypes.bool,

    /** The max number of items can be selected, only applies when mode is multiple or tags */
    maxCount: PropTypes.number,

    /** Max tag count to show. responsive will cost render performance */
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.shape({
            xs: PropTypes.number,
            sm: PropTypes.number,
            md: PropTypes.number,
            lg: PropTypes.number,
            xl: PropTypes.number
        })
    ]),

    /** Placeholder for not showing tags */
    maxTagPlaceholder: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]),

    /** Max tag text length to show */
    maxTagTextLength: PropTypes.number,

    /** The custom menuItemSelected icon with multiple options */
    menuItemSelectedIcon: PropTypes.node,

    /** Set mode of Select */
    mode: PropTypes.oneOf(['multiple', 'tags']),

    /** Specify content to show when no result matches */
    notFoundContent: PropTypes.node,

    /** Controlled open state of dropdown */
    open: PropTypes.bool,

    /** Which prop value of option will be used for filter if filterOption is true. If options is set, it should be set to label */
    optionFilterProp: PropTypes.string,

    /** Which prop value of option will render as content of select. Example */
    optionLabelProp: PropTypes.string,

    /** Select options. Will get better perf than jsx definition */
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.node,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    })),

    /** Customize the rendering dropdown options */
    optionRender: PropTypes.func,

    /** Placeholder of select */
    placeholder: PropTypes.node,

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** The className of dropdown menu */
    popupClassName: PropTypes.string,

    /** Determine whether the popup menu and the select input are the same width. Default set min-width same as input. Will ignore when value less than select width. false will disable virtual scroll */
    popupMatchSelectWidth: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),

    /** The custom remove icon */
    removeIcon: PropTypes.node,

    /** The current input "search" text */
    searchValue: PropTypes.string,

    /** Whether select is searchable */
    showSearch: PropTypes.bool,

    /** Size of Select input */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** The custom suffix icon. Customize icon will not response click open to avoid icon designed to do other interactive. You can use pointer-events: none style to bypass */
    suffixIcon: PropTypes.node,

    /** Customize tag render, only applies when mode is set to multiple or tags */
    tagRender: PropTypes.func,

    /** Separator used to tokenize, only applies when mode="tags" */
    tokenSeparators: PropTypes.arrayOf(PropTypes.string),

    /** Current selected option (considered as an immutable array) */
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /** Variants of selector */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Disable virtual scroll when set to false */
    virtual: PropTypes.bool,

    /** Called when blur */
    onBlur: PropTypes.func,

    /** Called when select an option or input value changes */
    onChange: PropTypes.func,

    /** Called when clear */
    onClear: PropTypes.func,

    /** Called when an option is deselected, param is the selected option's value. Only called for multiple or tags, effective in multiple or tags mode only */
    onDeselect: PropTypes.func,

    /** Called when dropdown open */
    onDropdownVisibleChange: PropTypes.func,

    /** Called when focus */
    onFocus: PropTypes.func,

    /** Called when key pressed down */
    onInputKeyDown: PropTypes.func,

    /** Called when mouse enter */
    onMouseEnter: PropTypes.func,

    /** Called when mouse leave */
    onMouseLeave: PropTypes.func,

    /** Called when dropdown scrolls */
    onPopupScroll: PropTypes.func,

    /** Callback function that is fired when input changed */
    onSearch: PropTypes.func,

    /** Called when an option is selected, the params are option's value (or key) and option instance */
    onSelect: PropTypes.func,

    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,
};

Select.defaultProps = {};

Select.Option = Option;

export default Select;