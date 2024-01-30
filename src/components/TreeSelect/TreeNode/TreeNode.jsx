import React from "react";
import PropTypes from 'prop-types';
import { TreeSelect as ANTComponent } from "antd";

/**
 * @uxpindocurl https://ant.design/components/tree-select/
 * @uxpindescription Tree selection control.
 * @uxpinnamespace TreeSelect
 */

const TreeNode = (props) => {
    // Component logic

    return (
        // Your component JSX
        <ANTComponent.TreeNode {...props} />

    );
};

TreeNode.propTypes = {
    /** The content of the component. */
    children: PropTypes.node,

    /** The style properties of the component */
    style: PropTypes.object,

    /** When Tree is checkable, set TreeNode display Checkbox or not */
    checkable: PropTypes.bool,

    /** Disables the checkbox of the treeNode */
    disableCheckbox: PropTypes.bool,

    /** Disabled or not */
    disabled: PropTypes.bool,

    /** Leaf node or not */
    isLeaf: PropTypes.bool,

    /** Required property (unless using treeDataSimpleMode), should be unique in the tree */
    key: PropTypes.string,

    /** Whether can be selected */
    selectable: PropTypes.bool,

    /** Content showed on the treeNodes */
    title: PropTypes.node,

    /** Will be treated as treeNodeFilterProp by default, should be unique in the tree */
    value: PropTypes.string,
};

TreeNode.defaultProps = {};

export default TreeNode;