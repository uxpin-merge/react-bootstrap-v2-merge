import React from 'react';
import PropTypes from 'prop-types';
import { Spinner as SpinnerM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Spinner
* @uxpindescription TODO
*/


const Spinner = (props) => {
  return <SpinnerM {...props} />;
};

Spinner.propTypes = {
  children: PropTypes.node,
/** Changes the animation style of the spinner.@default true */
  animation: PropTypes.string,
  /** @default div */
  as: PropTypes.string,
  /** @default 'spinner' */
  bsPrefix: PropTypes.string,
  /** The visual color style of the spinner */
  variant: PropTypes.string,
  /** Component size variations. */
  size: PropTypes.string,
  /** An ARIA accessible role applied to the Menu component. This should generally be set to 'status' */
  role: PropTypes.string,
};

export default Spinner;