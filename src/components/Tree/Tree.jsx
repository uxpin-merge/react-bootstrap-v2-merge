import React from "react";
import PropTypes from 'prop-types';
import { Tree as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/Tree/
 * @uxpindescription A hierarchical list structure component.
*/

const Tree = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent  {...props} />
    );
};

Tree.propTypes = {

    /** The content of the component. */
    children: PropTypes.node,


    /** The style properties of the component */
    style: PropTypes.object,

    /** Whether to allow dropping on the node */
    allowDrop: PropTypes.func,

    /** Whether to automatically expand a parent treeNode */
    autoExpandParent: PropTypes.bool,

    /** Whether treeNode fill remaining horizontal space */
    blockNode: PropTypes.bool,

    /** Add a Checkbox before the treeNodes */
    checkable: PropTypes.bool,

    /** Specifies the keys of the checked treeNodes */
    checkedKeys: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.shape({
            checked: PropTypes.arrayOf(PropTypes.string),
            halfChecked: PropTypes.arrayOf(PropTypes.string)
        })
    ]),

    /** Check treeNode precisely; parent treeNode and children treeNodes are not associated */
    checkStrictly: PropTypes.bool,

    /** The content of the component. */
    children: PropTypes.node,

    /** Specifies the keys of the default checked treeNodes */
    defaultCheckedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Whether to expand all treeNodes by default */
    defaultExpandAll: PropTypes.bool,

    /** Specify the keys of the default expanded treeNodes */
    defaultExpandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** If auto-expand parent treeNodes when init */
    defaultExpandParent: PropTypes.bool,

    /** Specifies the keys of the default selected treeNodes */
    defaultSelectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Whether disabled the tree */
    disabled: PropTypes.bool,

    /** Specifies whether this Tree or the node is draggable */
    draggable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
        PropTypes.shape({
            icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
            nodeDraggable: PropTypes.func
        })
    ]),

    /** Specifies the keys of the expanded treeNodes */
    expandedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Customize node title, key, children field name */
    fieldNames: PropTypes.object,

    /** Defines a function to filter (highlight) treeNodes */
    filterTreeNode: PropTypes.func,

    /** Config virtual scroll height */
    height: PropTypes.number,

    /** Customize treeNode icon */
    icon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]),

    /** Load data asynchronously */
    loadData: PropTypes.func,

    /** Set loaded tree nodes */
    loadedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Allows selecting multiple treeNodes */
    multiple: PropTypes.bool,

    /** Callback for when the onCheck event occurs */
    onCheck: PropTypes.func,

    /** Callback for when the onDragEnd event occurs */
    onDragEnd: PropTypes.func,

    /** Callback for when the onDragEnter event occurs */
    onDragEnter: PropTypes.func,

    /** Callback for when the onDragLeave event occurs */
    onDragLeave: PropTypes.func,

    /** Callback for when the onDragOver event occurs */
    onDragOver: PropTypes.func,

    /** Callback for when the onDragStart event occurs */
    onDragStart: PropTypes.func,

    /** Callback for when the onDrop event occurs */
    onDrop: PropTypes.func,

    /** Callback for when a treeNode is expanded or collapsed */
    onExpand: PropTypes.func,

    /** Callback for when a treeNode is loaded */
    onLoad: PropTypes.func,

    /** Callback for when the user right clicks a treeNode */
    onRightClick: PropTypes.func,

    /** Callback for when the user clicks a treeNode */
    onSelect: PropTypes.func,

    /** Style on the root element */
    rootStyle: PropTypes.object, // CSSProperties

    /** Whether can be selected */
    selectable: PropTypes.bool,

    /** Specifies the keys of the selected treeNodes */
    selectedKeys: PropTypes.arrayOf(PropTypes.string),

    /** Shows the icon before a TreeNode's title */
    showIcon: PropTypes.bool,

    /** Shows a connecting line */
    showLine: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({ showLeafIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.node, PropTypes.func]) })
    ]),

    /** The style properties of the component */
    style: PropTypes.object,

    /** Customize collapse/expand icon of tree node */
    switcherIcon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func
    ]),

    /** Customize tree node title render */
    titleRender: PropTypes.func,

    /** The treeNodes data Array */
    treeData: PropTypes.arrayOf(PropTypes.object),

    /** Disable virtual scroll */
    virtual: PropTypes.bool

};

Tree.defaultProps = {};

export default Tree;