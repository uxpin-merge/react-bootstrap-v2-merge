import React from 'react';
import PropTypes from 'prop-types';
import { Switch as SwitchM } from 'react-bootstrap';

const Switch = (props) => {
  return <SwitchM {...props} />;
};

Switch.propTypes = {
  children: PropTypes.node,

};

export default Switch;