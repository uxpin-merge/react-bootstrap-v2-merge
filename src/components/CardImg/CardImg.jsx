import React from 'react';
import PropTypes from 'prop-types';
import { CardImg as CardImgM } from 'react-bootstrap';

const CardImg = (props) => {
  return <CardImgM {...props} />;
};

CardImg.propTypes = {
  children: PropTypes.node,
/** @default 'card-img' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Defines image position insidethe card. */
  variant: PropTypes.string,
};

export default CardImg;