import * as React from 'react';
import Tabs from '../Tabs';
import TabPane from '../TabPane/TabPane';



export default (
  <Tabs uxpId="tabs-1" animated >
    <TabPane uxpId="tab-pane-1" tab='Tab 1' key="1">Content of Tab Pane 1</TabPane>
    <TabPane uxpId="tab-pane-2" tab='Tab 2' key="2">Content of Tab Pane 2</TabPane>
    <TabPane uxpId="tab-pane-3" tab='Tab 3' key="3">Content of Tab Pane 3</TabPane>

  </Tabs>
);