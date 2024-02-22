import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonM } from 'react-bootstrap'

const Button = (props) => {
  return <ButtonM {...props} />
}

Button.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** One or more button variant combinationsbuttons may be one of a variety of visual variants such as:`'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`as well as "outline" versions (prefixed by 'outline-*')`'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'` */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'dark',
    'light',
    'link',
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
    'outline-warning',
    'outline-info',
    'outline-dark',
    'outline-light',
  ]),
  /** Manually set the visual state of the button to `:active` */
  active: PropTypes.bool,
  /** Disables the Button, preventing mouse events,even if the underlying component is an `<a>` element */
  disabled: PropTypes.bool,
  /** @default 'btn' */
  bsPrefix: PropTypes.string,
  /** Callback fired when the button is clicked. */
  onClick: PropTypes.func,
  /** Specifies a large or small button.@type ('sm'|'lg') */
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: PropTypes.string,
  /** Defines HTML button type attribute.@default 'button' */
  type: PropTypes.oneOf(['button', 'submit', 'Reset']),
  as: PropTypes.string,
}

export default Button
