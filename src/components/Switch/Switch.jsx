import React from 'react';
import PropTypes from 'prop-types';
import { Switch as SwitchM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Switch
* @uxpindescription TODO
*/


const Switch = (props) => {
  return <SwitchM {...props} />;
};

Switch.propTypes = {
  children: PropTypes.node,

};

export default Switch;