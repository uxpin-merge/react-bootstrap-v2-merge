import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({ as: Component = 'h1', children, className, style, color, fontSize, fontWeight, textAlign }) => {
  // Combine the style prop with font styling properties
  const combinedStyle = {
    color,
    fontSize,
    fontWeight,
    textAlign,
    ...style, // This ensures that any additional style props override the specific font styling if needed
  }

  return (
    <Component className={className} style={combinedStyle}>
      {children}
    </Component>
  )
}

Typography.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Add Bootstrap classes */
  className: PropTypes.string,
  /** Override styles */
  style: PropTypes.object,
  /** Dynamically change the component's tag */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** Font color */
  color: PropTypes.string,
  /** Font size */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Font weight */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text alignment */
  textAlign: PropTypes.string,
}

export default Typography
