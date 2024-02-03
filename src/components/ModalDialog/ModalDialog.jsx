import React from 'react';
import PropTypes from 'prop-types';
import { ModalDialog as ModalDialogM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ModalDialog
* @uxpindescription TODO
*/


const ModalDialog = (props) => {
  return <ModalDialogM {...props} />;
};

ModalDialog.propTypes = {
  children: PropTypes.node,
/** @default 'modal' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Render a large, extra large or small modal.@type ('sm'|'lg'|'xl') */
  size: PropTypes.string,
  /** Renders a fullscreen modal. Specifying a breakpoint will render the modalas fullscreen __below__ the breakpoint size.@type (true|'sm-down'|'md-down'|'lg-down'|'xl-down'|'xxl-down') */
  fullscreen: PropTypes.string,
  /** Specify whether the Component should be vertically centered */
  centered: PropTypes.bool,
  /** Allows scrolling the `<Modal.Body>` instead of the entire Modal when overflowing. */
  scrollable: PropTypes.bool,
  contentClassName: PropTypes.string,
};

export default ModalDialog;