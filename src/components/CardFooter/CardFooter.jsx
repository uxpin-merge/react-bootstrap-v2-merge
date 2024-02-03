import React from 'react';
import PropTypes from 'prop-types';
import { CardFooter as CardFooterM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CardFooter
* @uxpindescription TODO
*/


const CardFooter = (props) => {
  return <CardFooterM {...props} />;
};

CardFooter.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardFooter;