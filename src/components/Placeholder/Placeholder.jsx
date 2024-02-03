import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder as PlaceholderM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Placeholder
* @uxpindescription TODO
*/


const Placeholder = (props) => {
  return <PlaceholderM {...props} />;
};

Placeholder.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  /** @default 'placeholder' */
  bsPrefix: PropTypes.string,
  /** Changes the animation of the placeholder.@type ('glow'|'wave') */
  animation: PropTypes.string,
  /** Change the background color of the placeholder. */
  bg: PropTypes.string,
  /** Component size variations.@type ('xs'|'sm'|'lg') */
  size: PropTypes.string,
};

export default Placeholder;