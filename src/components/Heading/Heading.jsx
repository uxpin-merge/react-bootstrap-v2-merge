import React from 'react'
import PropTypes from 'prop-types'

const Heading = (props) => {
  return (
    <>
      <props.as {...props} />
    </>
  )
}

Heading.propTypes = {
  /** Content of the component */
  children: PropTypes.node,

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  /** Determines the tag to be used for the component */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

export default Heading
