import React from 'react';
import PropTypes from 'prop-types';
import { ToastHeader as ToastHeaderM } from 'react-bootstrap';

const ToastHeader = (props) => {
  return <ToastHeaderM {...props} />;
};

ToastHeader.propTypes = {
  children: PropTypes.node,
bsPrefix: PropTypes.string,
  /** Provides an accessible label for the closebutton. It is used for Assistive Technology when the label text is notreadable. */
  closeLabel: PropTypes.string,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** Specify whether the Component should contain a close button */
  closeButton: PropTypes.bool,
};

export default ToastHeader;