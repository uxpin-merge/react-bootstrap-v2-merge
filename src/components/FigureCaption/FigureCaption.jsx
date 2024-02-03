import React from 'react';
import PropTypes from 'prop-types';
import { FigureCaption as FigureCaptionM } from 'react-bootstrap';

const FigureCaption = (props) => {
  return <FigureCaptionM {...props} />;
};

FigureCaption.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default FigureCaption;