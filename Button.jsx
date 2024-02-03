import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Button
* @uxpindescription TODO
*/


const Button = (props) => {
  return <ButtonM {...props} />;
};

Button.propTypes = {
  children: PropTypes.node,
/** One or more button variant combinationsbuttons may be one of a variety of visual variants such as:`'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'`as well as "outline" versions (prefixed by 'outline-*')`'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-dark', 'outline-light'` */
  variant: PropTypes.string,
  /** Manually set the visual state of the button to `:active` */
  active: PropTypes.bool,
  /** Disables the Button, preventing mouse events,even if the underlying component is an `<a>` element */
  disabled: PropTypes.bool,
  /** @default 'btn' */
  bsPrefix: PropTypes.string,
  /** Callback fired when the button is clicked. */
  onClick: PropTypes.func,
  /** Specifies a large or small button.@type ('sm'|'lg') */
  size: PropTypes.string,
  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: PropTypes.string,
  /** Defines HTML button type attribute.@default 'button' */
  type: PropTypes.string,
  as: PropTypes.string,
};

export default Button;