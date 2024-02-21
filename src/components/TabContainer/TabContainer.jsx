import React from 'react'
import PropTypes from 'prop-types'
import { TabContainer as TabContainerM } from 'react-bootstrap'

const TabContainer = (props) => {
  return <TabContainerM {...props} />
}

TabContainer.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Sets a default animation strategy for all children `<TabPane>`s.Defaults to `<Fade>` animation; else, use `false` to disable, or acustom react-transition-group `<Transition/>` component.@type {{Transition | false}}@default {Fade} */
  transition: PropTypes.string,
  /** HTML id attribute, required if no `generateChildId` propis specified.@type {string} */
  id: PropTypes.string,
  /** Wait until the first "enter" transition to mount tabs (add them to the DOM) */
  mountOnEnter: PropTypes.bool,
  /** Unmount tabs (remove it from the DOM) when they are no longer visible */
  unmountOnExit: PropTypes.bool,
  /** A function that takes an `eventKey` and `type` and returns a unique id forchild tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a purefunction, meaning it should always return the _same_ id for the same setof inputs. The default value requires that an `id` to be set for the`<TabContainer>`.The `type` argument will either be `"tab"` or `"pane"`.@defaultValue (eventKey, type) => `${props.id}-${type}-${eventKey}` */
  generateChildId: PropTypes.func,
  /** A callback fired when a tab is selected.@controllable activeKey */
  onSelect: PropTypes.func,
  /** The `eventKey` of the currently active tab.@controllable onSelect */
  activeKey: PropTypes.string,
}

export default TabContainer
