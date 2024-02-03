import React from 'react';
import PropTypes from 'prop-types';
import { ModalTitle as ModalTitleM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ModalTitle
* @uxpindescription TODO
*/


const ModalTitle = (props) => {
  return <ModalTitleM {...props} />;
};

ModalTitle.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ModalTitle;