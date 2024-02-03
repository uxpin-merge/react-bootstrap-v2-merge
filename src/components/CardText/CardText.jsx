import React from 'react';
import PropTypes from 'prop-types';
import { CardText as CardTextM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CardText
* @uxpindescription TODO
*/


const CardText = (props) => {
  return <CardTextM {...props} />;
};

CardText.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardText;