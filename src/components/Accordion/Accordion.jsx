import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as AccordionM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Accordion
* @uxpindescription TODO
*/


const Accordion = (props) => {
  return <AccordionM {...props} />;
};

Accordion.propTypes = {
  children: PropTypes.node,
/** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion' */
  bsPrefix: PropTypes.string,
  /** The current active key that corresponds to the currently expanded card */
  activeKey: PropTypes.custom,
  /** The default active key that is expanded on start */
  defaultActiveKey: PropTypes.custom,
  /** Callback fired when the active item changes. js(eventKey: string | string[] | null, event: Object) => void @controllable activeIndex */
  onSelect: PropTypes.func,
  /** Renders accordion edge-to-edge with its parent container */
  flush: PropTypes.bool,
  /** Allow accordion items to stay open when another item is opened */
  alwaysOpen: PropTypes.bool,
};

export default Accordion;