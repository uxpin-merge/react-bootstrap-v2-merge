import React from 'react';
import PropTypes from 'prop-types';
import { ModalFooter as ModalFooterM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ModalFooter
* @uxpindescription TODO
*/


const ModalFooter = (props) => {
  return <ModalFooterM {...props} />;
};

ModalFooter.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ModalFooter;