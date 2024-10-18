import React from 'react'
import PropTypes from 'prop-types'
import { Accordion as AccordionM } from 'react-bootstrap'
import AccordionBody from '../AccordionBody/AccordionBody'
import AccordionButton from '../AccordionButton/AccordionButton'
import AccordionCollapse from '../AccordionCollapse/AccordionCollapse'
import AccordionHeader from '../AccordionHeader/AccordionHeader'
import AccordionItem from '../AccordionItem/AccordionItem'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/Accordion
 * @uxpindescription Build vertically collapsing accordions in combination with the Collapse component
 */

const Accordion = (props) => {
  return <AccordionM {...props} />
}

Accordion.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,

  /** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion' */
  bsPrefix: PropTypes.string,
  /** The current active key that corresponds to the currently expanded card */
  activeKey: PropTypes.string,
  /** The default active key that is expanded on start */
  defaultActiveKey: PropTypes.string,
  /** Callback fired when the active item changes. js(eventKey: string | string[] | null, event: Object) => void @controllable activeIndex */
  onSelect: PropTypes.func,
  /** Renders accordion edge-to-edge with its parent container */
  flush: PropTypes.bool,
  /** Allow accordion items to stay open when another item is opened */
  alwaysOpen: PropTypes.bool,
}

Accordion.Body = AccordionBody
Accordion.Button = AccordionButton
Accordion.Collapse = AccordionCollapse
Accordion.Header = AccordionHeader
Accordion.Item = AccordionItem

export default Accordion
