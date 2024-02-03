import React from 'react';
import PropTypes from 'prop-types';
import { ModalBody as ModalBodyM } from 'react-bootstrap';

const ModalBody = (props) => {
  return <ModalBodyM {...props} />;
};

ModalBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ModalBody;