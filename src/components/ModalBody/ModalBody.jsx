import React from 'react';
import PropTypes from 'prop-types';
import { ModalBody as ModalBodyM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ModalBody
* @uxpindescription TODO
*/


const ModalBody = (props) => {
  return <ModalBodyM {...props} />;
};

ModalBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ModalBody;