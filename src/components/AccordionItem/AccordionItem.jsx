import React from 'react'
import PropTypes from 'prop-types'
import { AccordionItem as AccordionItemM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionItem
 * @uxpindescription TODO
 * @uxpinnamespace Accordion
 */

const Item = (props) => {
  return <AccordionItemM {...props} />
}

Item.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** Set a custom element for this component */
  as: PropTypes.string,
  /** @default 'accordion-item' */
  bsPrefix: PropTypes.string,
  /** A unique key used to control this item's collapse/expand.@required */
  eventKey: PropTypes.string,
}

export default Item
