import React from "react";
import PropTypes from 'prop-types';
import { Cascader as ANTComponent } from "antd";
import Option from "./Option/Option";



/**
 * @uxpindocurl https://ant.design/components/cascader/
 * @uxpindescription Cascade selection box.
*/

const Cascader = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

Cascader.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,

    /** Show clear button */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node })
    ]),

    /** Whether the current search will be cleared on selecting an item */
    autoClearSearchValue: PropTypes.bool,

    /** If get focus when component mounted */
    autoFocus: PropTypes.bool,

    /** Change value on each selection if set to true */
    changeOnSelect: PropTypes.bool,

    /** The additional css class */
    className: PropTypes.string,

    /** Initial selected value */
    defaultValue: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /** Whether disabled select */
    disabled: PropTypes.bool,

    /** The render function of displaying selected options */
    displayRender: PropTypes.func,

    /** Custom render function for tags in multiple mode */
    tagRender: PropTypes.func,

    /** The additional className of popup overlay */
    popupClassName: PropTypes.string,

    /** Customize dropdown content */
    dropdownRender: PropTypes.func,

    /** Customize the current item expand icon */
    expandIcon: PropTypes.node,

    /** Expand current item when click or hover */
    expandTrigger: PropTypes.string,

    /** Custom field name for label and value and children */
    fieldNames: PropTypes.object,

    /** Parent Node which the selector should be rendered to */
    getPopupContainer: PropTypes.func,

    /** To load option lazily */
    loadData: PropTypes.func,

    /** Max tag count to show */
    maxTagCount: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['responsive'])
    ]),

    /** Placeholder for not showing tags */
    maxTagPlaceholder: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]),

    /** Max tag text length to show */
    maxTagTextLength: PropTypes.number,

    /** Specify content to show when no result matches */
    notFoundContent: PropTypes.string,

    /** Set visible of cascader popup */
    open: PropTypes.bool,

    /** The data options of cascade */
    options: PropTypes.array,

    /** The input placeholder */
    placeholder: PropTypes.string,

    /** Use preset popup align config from builtinPlacements */
    placement: PropTypes.oneOf(['bottomLeft', 'bottomRight', 'topLeft', 'topRight']),

    /** Whether show search input in single mode */
    showSearch: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),

    /** The input size */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** The additional style */
    style: PropTypes.object,

    /** The custom suffix icon */
    suffixIcon: PropTypes.node,

    /** The selected value */
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number)
    ]),

    /** Variants of selector */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Callback when finishing cascader select */
    onChange: PropTypes.func,

    /** Callback when popup shown or hidden */
    onDropdownVisibleChange: PropTypes.func,

    /** Support multiple or not */
    multiple: PropTypes.bool,

    /** The custom remove icon */
    removeIcon: PropTypes.node,

    /** The way show selected item in box */
    showCheckedStrategy: PropTypes.oneOf([
        PropTypes.string // Should be one of the specific string constants like Cascader.SHOW_PARENT
    ]),

    /** Set search value */
    searchValue: PropTypes.string,

    /** The callback function triggered when input changed */
    onSearch: PropTypes.func,

    /** The style of the drop-down menu column */
    dropdownMenuColumnStyle: PropTypes.object,

    /** The appearance of lazy loading */
    loadingIcon: PropTypes.node,

    /** The function for filtering options */
    showSearchFilter: PropTypes.func,

    /** Set the count of filtered items */
    showSearchLimit: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool
    ]),

    /** Whether the width of list matches input */
    showSearchMatchInputWidth: PropTypes.bool,

    /** Used to render filtered options */
    showSearchRender: PropTypes.func,

    /** Used to sort filtered options */
    showSearchSort: PropTypes.func,
};

Cascader.defaultProps = {};

Cascader.Option = Option;

export default Cascader;