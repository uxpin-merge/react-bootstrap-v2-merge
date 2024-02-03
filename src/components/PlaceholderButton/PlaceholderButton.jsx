import React from 'react';
import PropTypes from 'prop-types';
import { PlaceholderButton as PlaceholderButtonM } from 'react-bootstrap';

const PlaceholderButton = (props) => {
  return <PlaceholderButtonM {...props} />;
};

PlaceholderButton.propTypes = {
  children: PropTypes.node,
/** @default 'placeholder' */
  bsPrefix: PropTypes.string,
  /** Changes the animation of the placeholder. */
  animation: PropTypes.string,
  size: PropTypes.string,
  /** Button variant. */
  variant: PropTypes.string,
};

export default PlaceholderButton;