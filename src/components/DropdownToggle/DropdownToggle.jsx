import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown as DropdownM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/dropdowns
 * @uxpindescription Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
 * @uxpinnamespace Dropdown
 */
const Toggle = (props) => {
  return <DropdownM.Toggle {...props} />
}

Toggle.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles
   *  @uxpincontroltype css
   *
   * */
  style: PropTypes.object,
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

  as: PropTypes.string,
  split: PropTypes.bool,
  /** to passthrough to the underlying button or whatever from DropdownButton@private */
  childBsPrefix: PropTypes.string,
  /** @default 'dropdown-toggle' */
  bsPrefix: PropTypes.string,
  /** An html id attribute, necessary for assistive technologies, such as screen readers.@type {string|number} */
  id: PropTypes.string,
}

export default Toggle
