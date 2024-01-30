import * as React from 'react';
import Cascader from '../Cascader';
// import Option from '../Option/Option';
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

export default (
    <Cascader uxpId="cascader-1"
        options={options}
        placeholder="Please select"
    >

        {/* <Option
            label="Parent"
            value="parent"
            uxpId="option-1"
        >
            <Option
                label="Sub-Parent"
                value="subparent"
                uxpId="option-2"
            >

                <Option
                    label="Leaf 1"
                    value="Leaf 1"
                    uxpId="option-3"
                />
                <Option
                    label="Leaf 2"
                    value="Leaf 2"
                    uxpId="option-4"
                />
            </Option>




        </Option> */}

    </Cascader>
);