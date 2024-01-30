import * as React from 'react';
import Result from '../Result';
import Button from '../../Button/Button';

export default (
  <Result
    title="Your operation has been executed"
    status="success"
    extra={
      <Button type="primary" key="console" uxpId="button-1">
        Go Console
      </Button>
    }
    uxpId="result-1"
  />
);