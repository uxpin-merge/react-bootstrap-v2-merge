import React from 'react'
import PropTypes from 'prop-types'
import { Tab as TabM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/tabs
 * @uxpindescription Dynamic tabbed interfaces
 */
const Tab = (props) => {
  return <TabM {...props} />
}

Tab.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** HTML id attribute, required if no generateChildId prop is specified. */
  id: PropTypes.string,

  /** Sets a default animation strategy for all children <TabPane>s. */
  transition: PropTypes.bool,

  /** Wait until the first "enter" transition to mount tabs (add them to the DOM) */
  mountOnEnter: PropTypes.bool,

  /** Unmount tabs (remove it from the DOM) when they are no longer visible */
  unmountOnExit: PropTypes.bool,

  /** A function that takes an eventKey and type and returns a unique id for child tab <NavItem>s and <TabPane>s. */
  generateChildId: PropTypes.func,

  /** A callback fired when a tab is selected. */
  onSelect: PropTypes.func,

  /** The eventKey of the currently active tab. */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Tab
