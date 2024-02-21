import React from 'react'
import PropTypes from 'prop-types'
import { AccordionCollapse as AccordionCollapseM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionCollapse
 * @uxpindescription Build vertically collapsing accordions in combination with the Collapse component
 * @uxpinnamespace Accordion
 */

const Collapse = (props) => {
  return <AccordionCollapseM {...props} />
}

Collapse.propTypes = {
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
  /** A key that corresponds to the toggler that triggers this collapse's expand or collapse. */
  eventKey: PropTypes.string,
}

export default Collapse
