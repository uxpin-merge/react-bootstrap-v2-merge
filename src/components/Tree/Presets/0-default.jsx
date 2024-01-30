import * as React from 'react';
import Tree from '../Tree';

const treeData = [
    {
        title: 'Tree',
        key: '0-0',
        children: [
            {
                title: 'Parent 1',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'Parent 2',
                key: '0-0-1',
                children: [
                    {
                        title: "leaf",
                        key: '0-0-1-0',
                    },
                ],
            },
        ],
    },
];

export default (

    <Tree
        checkable
        defaultExpandAll
        treeData={treeData}
        uxpId="Tree-1"
    />
);