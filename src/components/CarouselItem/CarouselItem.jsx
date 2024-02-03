import React from 'react';
import PropTypes from 'prop-types';
import { CarouselItem as CarouselItemM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CarouselItem
* @uxpindescription TODO
*/


const CarouselItem = (props) => {
  return <CarouselItemM {...props} />;
};

CarouselItem.propTypes = {
  children: PropTypes.node,
/** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'carousel-item' */
  bsPrefix: PropTypes.string,
  /** The amount of time to delay between automatically cycling this specific item. Will default to the Carousel's `interval` prop value if none is specified. */
  interval: PropTypes.number,
};

export default CarouselItem;