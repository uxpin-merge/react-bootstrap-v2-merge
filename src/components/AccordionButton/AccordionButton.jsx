import React from 'react'
import PropTypes from 'prop-types'
import { AccordionButton as AccordionButtonM } from 'react-bootstrap'

/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/AccordionButton
 * @uxpindescription Build vertically collapsing accordions in combination with the Collapse component
 * @uxpinnamespace Accordion
 */

const Button = (props) => {
  return <AccordionButtonM {...props} />
}

Button.propTypes = {
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
  /** @default 'accordion-button' */
  bsPrefix: PropTypes.string,
  /** A callback function for when this component is clicked */
  onClick: PropTypes.func,
}

export default Button
