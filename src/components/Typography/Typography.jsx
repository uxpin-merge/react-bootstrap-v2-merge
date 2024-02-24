import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({
  tag: Component = 'h1',
  children,
  className,
  style,
  color,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  textDecoration,
  textTransform,
  fontFamily,
}) => {
  // Combine the style prop with font styling properties
  const combinedStyle = {
    color,
    fontSize,
    fontWeight,
    textAlign,
    lineHeight,
    letterSpacing,
    textDecoration,
    textTransform,
    fontFamily,
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
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6', // Headings
    'p',
    'span',
    'div', // Basic text containers
    'abbr',
    'b',
    'blockquote',
    'cite',
    'code', // Citation, code
    'del',
    'em',
    'i',
    'ins',
    'kbd', // Text emphasis, editing
    'mark',
    'q',
    's',
    'samp', // Marked text, quotations, strikethrough, sample
    'small',
    'strong',
    'sub',
    'sup', // Small, importance, subscript, superscript
    'u',
    'var', // Underline, variable
    'pre', // Preformatted text
  ]),
  /** Font color
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /** Font size */
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Font weight */
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text alignment */
  textAlign: PropTypes.string,
  /** Line height */
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Letter spacing */
  letterSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text decoration */
  textDecoration: PropTypes.string,
  /** Text transform */
  textTransform: PropTypes.string,
  /** Font family */
  fontFamily: PropTypes.string,
}
export default Typography
