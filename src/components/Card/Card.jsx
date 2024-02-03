import React from 'react';
import PropTypes from 'prop-types';
import { Card as CardM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Card
* @uxpindescription TODO
*/


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
  bg: PropTypes.string,
  /** Sets card text color */
  text: PropTypes.string,
  /** Sets card border color */
  border: PropTypes.string,
};

export default Card;