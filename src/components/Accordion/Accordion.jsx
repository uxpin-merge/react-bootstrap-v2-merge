import React from 'react';
import PropTypes from 'prop-types';
import { Accordion as AccordionM } from 'react-bootstrap';
import AccordionItem from '../AccordionItem/AccordionItem';
import AccordionHeader from '../AccordionHeader/AccordionHeader';
import AccordionCollapse from '../AccordionCollapse/AccordionCollapse';
import AccordionButton from '../AccordionButton/AccordionButton';
import AccordionBody from '../AccordionBody/AccordionBody';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Accordion
* @uxpindescription TODO
*/

const Accordion = (props) => {
  return <AccordionM {...props} />;
};

Accordion.propTypes = {
  /** The content of the component */
  children: PropTypes.node,
  /** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion' */
  bsPrefix: PropTypes.string,
  /** The current active key that corresponds to the currently expanded card */
  activeKey: PropTypes.union,
  /** The default active key that is expanded on start */
  defaultActiveKey: PropTypes.union,
  /** Callback fired when the active item changes. js(eventKey: string | string[] | null, event: Object) => void @controllable activeIndex */
  onSelect: PropTypes.func,
  /** Renders accordion edge-to-edge with its parent container */
  flush: PropTypes.bool,
  /** Allow accordion items to stay open when another item is opened */
  alwaysOpen: PropTypes.bool,
};

Accordion.Item = AccordionItem
export default Accordion;