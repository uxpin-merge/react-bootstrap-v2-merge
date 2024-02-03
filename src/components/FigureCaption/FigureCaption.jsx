import React from 'react';
import PropTypes from 'prop-types';
import { FigureCaption as FigureCaptionM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/FigureCaption
* @uxpindescription TODO
*/


const FigureCaption = (props) => {
  return <FigureCaptionM {...props} />;
};

FigureCaption.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default FigureCaption;