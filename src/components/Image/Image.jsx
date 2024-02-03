import React from 'react';
import PropTypes from 'prop-types';
import { Image as ImageM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Image
* @uxpindescription TODO
*/


const Image = (props) => {
  return <ImageM {...props} />;
};

Image.propTypes = {
  children: PropTypes.node,
/** Sets image as fluid image. */
  fluid: PropTypes.bool,
  /** Sets image shape as rounded. */
  rounded: PropTypes.bool,
  /** Sets image shape as circle. */
  roundedCircle: PropTypes.bool,
  /** Sets image shape as thumbnail. */
  thumbnail: PropTypes.bool,
  /** @default 'img' */
  bsPrefix: PropTypes.string,
};

export default Image;