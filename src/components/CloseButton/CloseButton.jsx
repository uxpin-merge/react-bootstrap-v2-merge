import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton as CloseButtonM } from 'react-bootstrap';

const CloseButton = (props) => {
  return <CloseButtonM {...props} />;
};

CloseButton.propTypes = {
  children: PropTypes.node,
/** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": PropTypes.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: PropTypes.func,
  /** Render different color variant for the button.Omitting this will render the default dark color. */
  variant: PropTypes.string,
};

export default CloseButton;