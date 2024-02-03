import React from 'react';
import PropTypes from 'prop-types';
import { TabPane as TabPaneM } from 'react-bootstrap';

const TabPane = (props) => {
  return <TabPaneM {...props} />;
};

TabPane.propTypes = {
  children: PropTypes.node,
/** @default 'tab-pane' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** A key that associates the `TabPane` with it's controlling `NavLink`. */
  eventKey: PropTypes.string,
  /** Toggles the active state of the TabPane, this is generally controlled by aTabContainer. */
  active: PropTypes.bool,
  /** Use animation when showing or hiding `<TabPane>`s. Defaults to `<Fade>`animation, else use `false` to disable or a react-transition-group`<Transition/>` component. */
  transition: PropTypes.string,
  /** Transition onEnter callback when animation is not `false` */
  onEnter: PropTypes.func,
  /** Transition onEntering callback when animation is not `false` */
  onEntering: PropTypes.func,
  /** Transition onEntered callback when animation is not `false` */
  onEntered: PropTypes.func,
  /** Transition onExit callback when animation is not `false` */
  onExit: PropTypes.func,
  /** Transition onExiting callback when animation is not `false` */
  onExiting: PropTypes.func,
  /** Transition onExited callback when animation is not `false` */
  onExited: PropTypes.func,
  /** Wait until the first "enter" transition to mount the tab (add it to the DOM) */
  mountOnEnter: PropTypes.bool,
  /** Unmount the tab (remove it from the DOM) when it is no longer visible */
  unmountOnExit: PropTypes.bool,
  /** @ignore * */
  id: PropTypes.string,
  /** @ignore * */
  "aria-labelledby": PropTypes.string,
};

export default TabPane;