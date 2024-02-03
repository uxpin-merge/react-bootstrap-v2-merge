import React from 'react';
import PropTypes from 'prop-types';
import { CarouselCaption as CarouselCaptionM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CarouselCaption
* @uxpindescription TODO
*/


const CarouselCaption = (props) => {
  return <CarouselCaptionM {...props} />;
};

CarouselCaption.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CarouselCaption;