import React from 'react';
import PropTypes from 'prop-types';
import { AbstractModalHeader as AbstractModalHeaderM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AbstractModalHeader
* @uxpindescription TODO
*/


const AbstractModalHeader = (props) => {
  return <AbstractModalHeaderM {...props} />;
};

AbstractModalHeader.propTypes = {
  children: PropTypes.node,
/** Provides an accessible label for the closebutton. It is used for Assistive Technology when the label text is notreadable. */
  closeLabel: PropTypes.string,
  /** Specify whether the Component should contain a close button */
  closeButton: PropTypes.bool,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** A Callback fired when the close button is clicked. If used directly insidea ModalContext, the onHide will automatically be propagated upto the parent `onHide`. */
  onHide: PropTypes.func,
};

export default AbstractModalHeader;