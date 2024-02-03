import React from 'react';
import PropTypes from 'prop-types';
import { CardText as CardTextM } from 'react-bootstrap';

const CardText = (props) => {
  return <CardTextM {...props} />;
};

CardText.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardText;