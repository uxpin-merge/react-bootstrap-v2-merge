import React from 'react';
import PropTypes from 'prop-types';
import { AccordionCollapse as AccordionCollapseM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionCollapse
* @uxpindescription TODO
*/


const AccordionCollapse = (props) => {
  return <AccordionCollapseM {...props} />;
};

AccordionCollapse.propTypes = {
  children: PropTypes.node,
/** Set a custom element for this component */
  as: PropTypes.string,
  /** A key that corresponds to the toggler that triggers this collapse's expand or collapse. */
  eventKey: PropTypes.string,
};

export default AccordionCollapse;