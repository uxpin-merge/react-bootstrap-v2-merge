import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem as ListGroupItemM } from 'react-bootstrap'

const ListGroupItem = (props) => {
  return <ListGroupItemM {...props} />
}

ListGroupItem.propTypes = {
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

export default ListGroupItem
