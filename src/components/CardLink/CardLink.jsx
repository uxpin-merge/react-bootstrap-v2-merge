import React from 'react';
import PropTypes from 'prop-types';
import { CardLink as CardLinkM } from 'react-bootstrap';

const CardLink = (props) => {
  return <CardLinkM {...props} />;
};

CardLink.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardLink;