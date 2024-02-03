import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as NavbarM } from 'react-bootstrap';

const Navbar = (props) => {
  return <NavbarM {...props} />;
};

Navbar.propTypes = {
  children: PropTypes.node,
/** @default 'navbar' */
  bsPrefix: PropTypes.string,
  /** The general visual variant a the Navbar.Use in combination with the `bg` prop, `background-color` utilities,or your own background styles. */
  variant: PropTypes.oneOf(['light', 'dark']),
  /** The breakpoint, below which, the Navbar will collapse.When `true` the Navbar will always be expanded regardless of screen size. */
  expand: PropTypes.string,
  /** A convenience prop for adding `bg-*` utility classes since they are so commonly used here.`light` and `dark` are common choices but any `bg-*` class is supported, including any custom ones you might define.Pairs nicely with the `variant` prop. */
  bg: PropTypes.string,
  /** Create a fixed navbar along the top or bottom of the screen, that scrolls with thepage. A convenience prop for the `fixed-*` positioning classes. */
  fixed: PropTypes.string,
  /** Position the navbar at the top or bottom of the viewport, but only after scrolling past it.A convenience prop for the `sticky-*` positioning classes. */
  sticky: PropTypes.string,
  /** Set a custom element for this component. */
  as: PropTypes.string,
  /** A callback fired when the `<Navbar>` body collapses or expands. Fired whena `<Navbar.Toggle>` is clicked and called with the new `expanded`boolean value.@controllable expanded */
  onToggle: PropTypes.func,
  /** A callback fired when a descendant of a child `<Nav>` is selected. Shouldbe used to execute complex closing or other miscellaneous actions desiredafter selecting a descendant of `<Nav>`. Does nothing if no `<Nav>` or `<Nav>`descendants exist. The callback is called with an eventKey, which is aprop from the selected `<Nav>` descendant, and an event. jsfunction ( eventKey: mixed, event?: SyntheticEvent) For basic closing behavior after all `<Nav>` descendant onSelect events inmobile viewports, try using collapseOnSelect.Note: If you are manually closing the navbar using this `OnSelect` prop,ensure that you are setting `expanded` to false and not *toggling* betweentrue and false. */
  onSelect: PropTypes.func,
  /** Toggles `expanded` to `false` after the onSelect event of a descendant of achild `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.Manually controlling `expanded` via the onSelect callback is recommended instead,for more complex operations that need to be executed afterthe `select` event of `<Nav>` descendants. */
  collapseOnSelect: PropTypes.bool,
  /** Controls the visibility of the navbar body@controllable onToggle */
  expanded: PropTypes.bool,
  /** The ARIA role for the navbar, will default to 'navigation' forNavbars whose `as` is something other than `<nav>`.@default 'navigation' */
  role: PropTypes.string,
};

export default Navbar;