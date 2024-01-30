import * as React from 'react';
import ConfigProvider from '../ConfigProvider';
import Button from '../../Button/Button';

export default (
  <ConfigProvider
    componentSize="large"
    theme={{ token: { colorPrimary: 'purple' } }}
    uxpId="config-provider-1"
  >
    <Button
      type="primary"
      uxpId="config-button-1"
    >
      Overwritten Primary Button
    </Button>

  </ConfigProvider>
);

