import React from 'react';
import PropTypes from 'prop-types';
import { ModalFooter as ModalFooterM } from 'react-bootstrap';

const ModalFooter = (props) => {
  return <ModalFooterM {...props} />;
};

ModalFooter.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ModalFooter;