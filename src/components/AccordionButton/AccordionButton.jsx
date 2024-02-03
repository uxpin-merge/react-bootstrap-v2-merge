import React from 'react';
import PropTypes from 'prop-types';
import { AccordionButton as AccordionButtonM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionButton
* @uxpindescription TODO
* @uxpinnamespace Accordion
*/


const Button = (props) => {
  return <AccordionButtonM {...props} />;
};

Button.propTypes = {
  children: PropTypes.node,
/** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion-button' */
  bsPrefix: PropTypes.string,
  /** A callback function for when this component is clicked */
  onClick: PropTypes.func,
};

export default Button;
