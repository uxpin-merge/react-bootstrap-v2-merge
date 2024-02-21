import React from 'react'
import PropTypes from 'prop-types'
import { Stack as StackM } from 'react-bootstrap'

const Stack = (props) => {
  return <StackM {...props} />
}

Stack.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Override styles */
  style: PropTypes.object,
  as: PropTypes.string,
  /** Change the underlying component CSS base class name and modifier class names prefix.**This is an escape hatch** for working with heavily customized bootstrap css.Defaults to `hstack` if direction is `horizontal` or `vstack` if directionis `vertical`.@default 'hstack | vstack' */
  bsPrefix: PropTypes.string,
  /** Sets the spacing between each item. Valid values are `0-5`. */
  gap: PropTypes.custom,
}

export default Stack
