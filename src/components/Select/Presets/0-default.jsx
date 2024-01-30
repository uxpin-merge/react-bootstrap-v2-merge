import * as React from 'react';
import Option from '../Option/Option';
import Select from "../Select"

export default (
  <Select placeholder="Select a person ..." uxpId="select-1" showSearch
  >
    <Option
      uxpId="option-1"
      value="Jack"
      label="Jack"
    />

    <Option
      uxpId="option-2"
      value="Lucy"
      label="Lucy"
    />
    <Option
      uxpId="option-3"
      value="Tom"
      label="Tom"
    />

  </Select>
);