import * as React from 'react';
import Collapse from '../Collapse';
import Panel from '../Panel/Panel';
// const items = [
//   {
//     key: '1',
//     label: 'This is panel header 1',
//     children: "hello",
//   },
//   {
//     key: '2',
//     label: 'This is panel header 2',
//     children: "hello",
//   },
//   {
//     key: '3',
//     label: 'This is panel header 3',
//     children: "hello",
//   },
// ];

export default (
  <Collapse uxpId="collapse-1" activeKey={1}>
    <Panel header="This is panel header 1" key="1" uxpId="collapse-panel-1">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
    </Panel>
    <Panel header="This is panel header 2" key="2" uxpId="collapse-panel-2">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
    </Panel>
    <Panel header="This is panel header 3" key="3" uxpId="collapse-panel-3">A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
    </Panel>
  </Collapse>
);