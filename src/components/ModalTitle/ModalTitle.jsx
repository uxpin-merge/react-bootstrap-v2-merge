import React from 'react';
import PropTypes from 'prop-types';
import { ModalTitle as ModalTitleM } from 'react-bootstrap';

const ModalTitle = (props) => {
  return <ModalTitleM {...props} />;
};

ModalTitle.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default ModalTitle;