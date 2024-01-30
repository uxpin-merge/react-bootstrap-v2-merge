import * as React from 'react';
import Upload from '../Upload';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

export default (
  <Upload uxpId="upload-1">
    <Button icon={<Icon
      icon="UploadOutlined"
      style={{ fontSize: '', color: '' }}
      uxpId="icon-1"
    />}
      uxpId="button-1">Click to Upload</Button>
  </Upload>
);