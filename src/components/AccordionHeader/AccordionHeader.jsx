import React from 'react';
import PropTypes from 'prop-types';
import { AccordionHeader as AccordionHeaderM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionHeader
* @uxpindescription TODO
* @uxpinnamespace Accordion
*/


const Header = (props) => {
  return <AccordionHeaderM {...props} />;
};

Header.propTypes = {
  children: PropTypes.node,
/** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion-header' */
  bsPrefix: PropTypes.string,
  /** Click handler for the `AccordionButton` element */
  onClick: PropTypes.func,
};

export default Header;
