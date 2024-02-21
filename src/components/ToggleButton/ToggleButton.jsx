import React from 'react'
import PropTypes from 'prop-types'
import { ToggleButton as ToggleButtonM } from 'react-bootstrap'

const ToggleButton = (props) => {
  return <ToggleButtonM {...props} />
}

ToggleButton.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.object,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'btn-check' */
  bsPrefix: PropTypes.string,
  /** The `<input>` element `type` */
  type: PropTypes.string,
  /** The HTML input name, used to group like checkboxes or radio buttons togethersemantically */
  name: PropTypes.string,
  /** The checked state of the input, managed by `<ToggleButtonGroup>` automatically */
  checked: PropTypes.bool,
  /** The disabled state of both the label and input */
  disabled: PropTypes.bool,
  /** `id` is required for button clicks to toggle input. */
  id: PropTypes.string,
  /** A callback fired when the underlying input element changes. This is passeddirectly to the `<input>` so shares the same signature as a native `onChange` event. */
  onChange: PropTypes.func,
  /** The value of the input, should be unique amongst its siblings when nested in a`ToggleButtonGroup`. */
  value: PropTypes.string,
  /** A ref attached to the `<input>` element@type {ReactRef} */
  inputRef: PropTypes.string,
}

export default ToggleButton
