import * as React from 'react';
import TreeSelect from '../TreeSelect';
import TreeNode from '../TreeNode/TreeNode';

export default (
    <TreeSelect uxpId="treeselect-1"
        showSearch
        style={{
            width: '100%',
        }}
        dropdownStyle={{
            maxHeight: 400,
            overflow: 'auto',
        }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        multiple
        treeCheckable
    >

        <TreeNode
            title="Parent"
            value="parent"
            uxpId="treenode-1"
        >
            <TreeNode
                title="Sub-Parent"
                value="subparent"
                uxpId="treenode-2"
            >

                <TreeNode
                    title="Leaf 1"
                    value="Leaf 1"
                    uxpId="treenode-3"
                />
                <TreeNode
                    title="Leaf 2"
                    value="Leaf 2"
                    uxpId="treenode-4"
                />
            </TreeNode>




        </TreeNode>

    </TreeSelect>
);