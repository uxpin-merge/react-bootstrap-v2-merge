import React from 'react'
import PropTypes from 'prop-types'
import { ButtonToolbar as ButtonToolbarM } from 'react-bootstrap'

const ButtonToolbar = (props) => {
  return <ButtonToolbarM {...props} />
}

ButtonToolbar.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** The ARIA role describing the button toolbar. Generally the default"toolbar" role is correct. An `aria-label` or `aria-labelledby`prop is also recommended. */
  role: PropTypes.string,
  /** @default 'btn-toolbar' */
  bsPrefix: PropTypes.string,
}

export default ButtonToolbar
