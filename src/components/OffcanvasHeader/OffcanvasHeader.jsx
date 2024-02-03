import React from 'react';
import PropTypes from 'prop-types';
import { OffcanvasHeader as OffcanvasHeaderM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/OffcanvasHeader
* @uxpindescription TODO
*/


const OffcanvasHeader = (props) => {
  return <OffcanvasHeaderM {...props} />;
};

OffcanvasHeader.propTypes = {
  children: PropTypes.node,
/** Provides an accessible label for the closebutton. It is used for Assistive Technology when the label text is notreadable. */
  closeLabel: PropTypes.string,
  /** Specify whether the Component should contain a close button */
  closeButton: PropTypes.bool,
  /** @default 'offcanvas-header' */
  bsPrefix: PropTypes.string,
  /** Sets the variant for close button. */
  closeVariant: PropTypes.string,
  /** A Callback fired when the close button is clicked. If used directly insidea Offcanvas component, the onHide will automatically be propagated up to theparent Offcanvas `onHide`. */
  onHide: PropTypes.func,
};

export default OffcanvasHeader;