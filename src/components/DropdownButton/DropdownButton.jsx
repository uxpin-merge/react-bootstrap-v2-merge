import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton as DropdownButtonM } from 'react-bootstrap';

const DropdownButton = (props) => {
  return <DropdownButtonM {...props} />;
};

DropdownButton.propTypes = {
  children: PropTypes.node,
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
  align: PropTypes.oneOf([('start','end')]),
  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: PropTypes.string,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: PropTypes.bool,
  /** Which event when fired outside the component will cause it to be closed._see [DropdownMenu](#dropdown-menu-props) for more details_ */
  rootCloseEvent: PropTypes.string,
  /** Menu color variant.Omitting this will use the default light color. */
  menuVariant: PropTypes.string,
  /** Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer toPopper.js's flip [docs](https://popper.js.org/docs/v2/modifiers/flip/). */
  flip: PropTypes.bool,
  /** @ignore */
  bsPrefix: PropTypes.string,
  /** @ignore */
  variant: PropTypes.string,
  /** @ignore */
  size: PropTypes.string,
};

export default DropdownButton;
