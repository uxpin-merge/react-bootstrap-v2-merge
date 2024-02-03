import React from 'react';
import PropTypes from 'prop-types';
import { AccordionButton as AccordionButtonM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionButton
* @uxpindescription TODO
*/


const AccordionButton = (props) => {
  return <AccordionButtonM {...props} />;
};

AccordionButton.propTypes = {
  children: PropTypes.node,
/** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion-button' */
  bsPrefix: PropTypes.string,
  /** A callback function for when this component is clicked */
  onClick: PropTypes.func,
};

export default AccordionButton;