import React from 'react'
import PropTypes from 'prop-types'
import { SplitButton as SplitButtonM } from 'react-bootstrap'

const SplitButton = (props) => {
  return <SplitButtonM {...props} />
}

SplitButton.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** A `type` passed to the non-toggle Button */
  type: PropTypes.string,
  /** Accessible label for the toggle; the value of `title` if not specified. */
  toggleLabel: PropTypes.string,
  /** An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.@type {string}@required */
  id: PropTypes.string,
  /** An `href` passed to the non-toggle Button */
  href: PropTypes.string,
  /** An anchor `target` passed to the non-toggle Button */
  target: PropTypes.string,
  /** An `onClick` handler passed to the non-toggle Button */
  onClick: PropTypes.func,
  /** The content of the non-toggle Button. */
  title: PropTypes.node,
  /** Disables both Buttons */
  disabled: PropTypes.bool,
  /** Aligns the dropdown menu._see [DropdownMenu](#dropdown-menu-props) for more details_@type {"start"|"end"|{ sm: "start"|"end" }|{ md: "start"|"end" }|{ lg: "start"|"end" }|{ xl: "start"|"end"}|{ xxl: "start"|"end"} } */
  align: PropTypes.oneOf(['start', 'end']),
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: PropTypes.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: PropTypes.bool,
  /** Which event when fired outside the component will cause it to be closed._see [DropdownMenu](#dropdown-menu-props) for more details_ */
  rootCloseEvent: PropTypes.string,
  /** Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer toPopper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/). */
  flip: PropTypes.bool,
  /** @ignore */
  bsPrefix: PropTypes.string,
  /** @ignore */
  variant: PropTypes.string,
  /** @ignore */
  size: PropTypes.string,
}

export default SplitButton
