import React from 'react'
import PropTypes from 'prop-types'

const HtmlTag = (props) => {
  return (
    <>
      <props.tag {...props} />
    </>
  )
}

HtmlTag.propTypes = {
  /** Determines the tag to be used for the component */
  tag: PropTypes.oneOf([
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'span',
    'div',
    'ol',
    'ul',
    'li',
    'b',
    'strong',
    'i',
    'em',
    'mark',
    'small',
    'del',
    'ins',
    'sub',
    'sup',
    'code',
    'option',
    'hr',
  ]),
  /** Content of the tag. Can be other components. */
  children: PropTypes.node,

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,
}

export default HtmlTag
