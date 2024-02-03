import React from 'react';
import PropTypes from 'prop-types';
import { CardImgOverlay as CardImgOverlayM } from 'react-bootstrap';

const CardImgOverlay = (props) => {
  return <CardImgOverlayM {...props} />;
};

CardImgOverlay.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardImgOverlay;