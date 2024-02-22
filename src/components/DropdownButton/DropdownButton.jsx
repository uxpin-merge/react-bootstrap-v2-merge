import React from 'react'
import PropTypes from 'prop-types'
import { DropdownButton as DropdownButtonM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/dropdowns#dropdownbutton
 * @uxpindescription A convenience component for simple or general use dropdowns.
 */
const DropdownButton = (props) => {
  return <DropdownButtonM {...props} />
}

DropdownButton.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  // 'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.@type {string} */
  id: PropTypes.string,
  /** An `href` passed to the Toggle component */
  href: PropTypes.string,
  /** An `onClick` handler passed to the Toggle component */
  onClick: PropTypes.func,
  /** The content of the non-toggle Button. */
  title: PropTypes.node,
  /** Disables both Buttons */
  disabled: PropTypes.bool,
  /** Aligns the dropdown menu._see [DropdownMenu](#dropdown-menu-props) for more details_@type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} } */
  align: PropTypes.oneOf(['start', 'end']),
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  /** Determines the direction and location of the Menu in relation to it's Toggle. */
  drop: PropTypes.oneOf(['up', 'up-centered', 'down', 'down-centered', 'start', 'end']),
  menuRole: PropTypes.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: PropTypes.bool,
  /** Which event when fired outside the component will cause it to be closed._see [DropdownMenu](#dropdown-menu-props) for more details_ */
  rootCloseEvent: PropTypes.string,
  /** Menu color variant.Omitting this will use the default light color. */
  menuVariant: PropTypes.oneOf(['light', 'dark']),
  /** Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer toPopper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/). */
  flip: PropTypes.bool,
  /** @ignore */
  bsPrefix: PropTypes.string,
  /** May be one of a variety of visual variants such as:`'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`as well as "outline" versions (prefixed by 'outline-*')`'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'` */
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
  /** Specifies a large or small button.@type ('sm'|'lg') */
  size: PropTypes.oneOf(['default', 'sm', 'lg']),
}

export default DropdownButton
