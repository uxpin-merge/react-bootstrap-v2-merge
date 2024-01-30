import React from "react";
import PropTypes from 'prop-types';
import { TreeSelect as ANTComponent } from "antd";
import TreeNode from "./TreeNode/TreeNode";



/**
 * @uxpindocurl https://ant.design/components/tree-select/
 * @uxpindescription Tree selection control.
*/

const TreeSelect = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent {...props} />

    );
};

TreeSelect.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,


    /** Customize clear icon */
    allowClear: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ clearIcon: PropTypes.node })
    ]),

    /** If auto clear search input value when multiple select is selected/deselected */
    autoClearSearchValue: PropTypes.bool,

    /** Default selected treeNode(s) */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** Disabled or not */
    disabled: PropTypes.bool,

    /** Customize dropdown content */
    dropdownRender: PropTypes.func,

    /** To set the style of the dropdown menu */
    dropdownStyle: PropTypes.object,

    /** Customize node label, value, children field name */
    fieldNames: PropTypes.object,

    /** Whether to filter treeNodes by input value */
    filterTreeNode: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),

    /** To set the container of the dropdown menu */
    getPopupContainer: PropTypes.func,

    /** Whether to embed label in value */
    labelInValue: PropTypes.bool,

    /** Config popup height */
    listHeight: PropTypes.number,

    /** Load data asynchronously */
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

    /** Support multiple or not */
    multiple: PropTypes.bool,

    /** Specify content to show when no result matches */
    notFoundContent: PropTypes.node,

    /** Placeholder of the select input */
    placeholder: PropTypes.string,

    /** The position where the selection box pops up */
    placement: PropTypes.oneOf([
        'bottomLeft', 'bottomRight', 'topLeft', 'topRight'
    ]),

    /** Work with onSearch to make search value controlled */
    searchValue: PropTypes.string,

    /** The way show selected item in box when treeCheckable set */
    showCheckedStrategy: PropTypes.oneOf([
        'SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD'
    ]),

    /** Support search or not */
    showSearch: PropTypes.bool,

    /** To set the size of the select input */
    size: PropTypes.oneOf(['large', 'middle', 'small']),

    /** Set validation status */
    status: PropTypes.oneOf(['error', 'warning']),

    /** The custom suffix icon */
    suffixIcon: PropTypes.node,

    /** Customize collapse/expand icon of tree node */
    switcherIcon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]),

    /** Customize tag render when multiple */
    tagRender: PropTypes.func,

    /** Whether to show checkbox on the treeNodes */
    treeCheckable: PropTypes.bool,

    /** Whether to check nodes precisely */
    treeCheckStrictly: PropTypes.bool,

    /** Data of the treeNodes */
    treeData: PropTypes.arrayOf(PropTypes.object),

    /** Enable simple mode of treeData */
    treeDataSimpleMode: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),

    /** Whether to expand all treeNodes by default */
    treeDefaultExpandAll: PropTypes.bool,

    /** Default expanded treeNodes */
    treeDefaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Tree title open logic when click */
    treeExpandAction: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['click', 'doubleClick'])
    ]),

    /** Set expanded keys */
    treeExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Shows the icon before a TreeNode's title */
    treeIcon: PropTypes.bool,

    /** Set loaded tree nodes */
    treeLoadedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Show the line */
    treeLine: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),

    /** Will be used for filtering if filterTreeNode returns true */
    treeNodeFilterProp: PropTypes.string,

    /** Will render as content of select */
    treeNodeLabelProp: PropTypes.string,

    /** To set the current selected treeNode(s) */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]),

    /** Variants of selector */
    variant: PropTypes.oneOf(['outlined', 'borderless', 'filled']),

    /** Disable virtual scroll */
    virtual: PropTypes.bool,

    /** Callback function when selected treeNodes or input value change */
    onChange: PropTypes.func,

    /** Called when dropdown open */
    onDropdownVisibleChange: PropTypes.func,

    /** Callback function when the search input changes */
    onSearch: PropTypes.func,

    /** Callback function when you select a treeNode */
    onSelect: PropTypes.func,

    /** Callback function when treeNode expanded */
    onTreeExpand: PropTypes.func,
};

TreeSelect.defaultProps = {};

TreeSelect.TreeNode = TreeNode;

export default TreeSelect;