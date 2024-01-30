import * as React from 'react';
import Option from '../Option/Option';
import Mentions from "../Mentions"

export default (
  <Mentions defaultValue="@afc163" uxpId="Mentions-1">
    <Option
      uxpId="mention-1"
      value="afc163"
    >
      afc163
    </Option>
    <Option
      uxpId="mention-2"
      value="zombieJ"
    >
      zombieJ
    </Option>
    <Option
      uxpId="mention-3"
      value="yesmeck"
    >
      yesmeck
    </Option>

  </Mentions>
);