import React from 'react';
import PropTypes from 'prop-types';
import { CardTitle as CardTitleM } from 'react-bootstrap';

const CardTitle = (props) => {
  return <CardTitleM {...props} />;
};

CardTitle.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardTitle;