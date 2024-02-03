import React from 'react';
import PropTypes from 'prop-types';
import { CardGroup as CardGroupM } from 'react-bootstrap';

const CardGroup = (props) => {
  return <CardGroupM {...props} />;
};

CardGroup.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardGroup;