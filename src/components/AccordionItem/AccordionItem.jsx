import React from 'react';
import PropTypes from 'prop-types';
import { AccordionItem as AccordionItemM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Accordion
* @uxpindescription TODO
*/

const AccordionItem = (props) => {
  return <AccordionItemM {...props} />;
};

AccordionItem.propTypes = {
  /** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion-item' */
  bsPrefix: PropTypes.string,
  /** A unique key used to control this item's collapse/expand.@required */
  eventKey: PropTypes.string,
};

export default AccordionItem;