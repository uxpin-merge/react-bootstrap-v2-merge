import React from 'react';
import Accordion from '../Accordion';
import AccordionBody from '../../AccordionBody/AccordionBody';
import AccordionButton from '../../AccordionButton/AccordionButton';
import AccordionCollapse from '../../AccordionCollapse/AccordionCollapse';
import AccordionHeader from '../../AccordionHeader/AccordionHeader';
import AccordionItem from '../../AccordionItem/AccordionItem';
export default (
  <Accordion uxpId="accordion-1" defaultActiveKey="1">
    <Accordion.Item eventKey="1" uxpId="accordionItem-1">
      <Accordion.Header uxpId="accordionHeader-1">Accordion Item #1</Accordion.Header>
      <Accordion.Body uxpId="accordionBody-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2" uxpId="accordionItem-2">
      <Accordion.Header uxpId="accordionHeader-2">Accordion Item #1</Accordion.Header>
      <Accordion.Body uxpId="accordionBody-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);
