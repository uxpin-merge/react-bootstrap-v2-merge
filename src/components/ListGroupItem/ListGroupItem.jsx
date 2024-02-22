import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup as ListGroupM } from 'react-bootstrap'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/list-group
 * @uxpindescription List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
 * @uxpinnamespace ListGroup
 */
const Item = (props) => {
  return <ListGroupM.Item {...props} />
}

Item.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** @default 'list-group-item' */
  bsPrefix: PropTypes.string,
  /** Sets contextual classes for list item. */
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
  /** Marks a ListGroupItem as actionable, applying additional hover, active and disabled stylesfor links and buttons. */
  action: PropTypes.bool,
  /** Sets list item as active. */
  active: PropTypes.bool,
  /** Sets list item state as disabled. */
  disabled: PropTypes.bool,
  eventKey: PropTypes.string,
  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
  /** Providing a `href` and setting `action` to `true`, it will render the ListGroup.Item as an `<a>` element (unless `as` is provided). */
  href: PropTypes.string,
  /** You can use a custom element type for this component. For none `action` items, items render as `li`.For actions the default is an anchor or button element depending on whether a `href` is provided.@default {'div' | 'a' | 'button'} */
  as: PropTypes.string,
}

export default Item
