import React from 'react';
import PropTypes from 'prop-types';
import { CardFooter as CardFooterM } from 'react-bootstrap';

const CardFooter = (props) => {
  return <CardFooterM {...props} />;
};

CardFooter.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardFooter;