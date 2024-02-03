import React from 'react';
import PropTypes from 'prop-types';
import { Card as CardM } from 'react-bootstrap';

const Card = (props) => {
  return <CardM {...props} />;
};

Card.propTypes = {
  children: PropTypes.node,
/** When this prop is set, it creates a Card with a Card.Body insidepassing the children directly to it */
  body: PropTypes.bool,
  as: PropTypes.string,
  /** @default 'card' */
  bsPrefix: PropTypes.string,
  /** Sets card background */
  bg: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  /** Sets card text color */
  text: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'white', 'muted']),
  /** Sets card border color */
  border: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
};

export default Card;