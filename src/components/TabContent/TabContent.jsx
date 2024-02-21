import React from 'react'
import PropTypes from 'prop-types'
import { TabContent as TabContentM } from 'react-bootstrap'

const TabContent = (props) => {
  return <TabContentM {...props} />
}

TabContent.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
}

export default TabContent
