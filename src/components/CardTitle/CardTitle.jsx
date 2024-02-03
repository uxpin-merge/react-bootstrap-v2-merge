import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle as CardTitleM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CardTitle
* @uxpindescription TODO
*/


const CardTitle = (props) => {
  return <CardTitleM {...props} />;
};

CardTitle.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardTitle;