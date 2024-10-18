import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup as ListGroupM } from 'react-bootstrap'
import Item from '../ListGroupItem/ListGroupItem'
/**
 * @uxpindocurl https://react-bootstrap.github.io/docs/components/list-group
 * @uxpindescription List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
 */
const ListGroup = (props) => {
  return <ListGroupM {...props} />
}
ListGroup.Item = Item
ListGroup.propTypes = {
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

  /** @default 'list-group' */
  bsPrefix: PropTypes.string,
  /** Adds a variant to the list-group */
  variant: PropTypes.oneOf(['flush']),
  /** Changes the flow of the list group items from vertical to horizontal.A value of `null` (the default) sets it to vertical for all breakpoints;Just including the prop sets it for all breakpoints, while `{sm|md|lg|xl|xxl}`makes the list group horizontal starting at that breakpoint’s `min-width`. */
  horizontal: PropTypes.string,
  /** Generate numbered list items. */
  numbered: PropTypes.bool,
  /** You can use a custom element type for this component. */
  as: PropTypes.string,
}

export default ListGroup
