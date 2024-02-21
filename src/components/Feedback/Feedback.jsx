import React from 'react'
import PropTypes from 'prop-types'
import { Feedback as FeedbackM } from 'react-bootstrap'

const Feedback = (props) => {
  return <FeedbackM {...props} />
}

Feedback.propTypes = {
  /** Content of the component */
  children: PropTypes.node,
  /** Sets the color mode */
  'data-bs-theme': PropTypes.oneOf(['dark', 'light']),

  /** Add Bootstrap classes */
  className: PropTypes.string,

  /** Override styles */
  style: PropTypes.object,

  as: PropTypes.string,
  /** Specify whether the feedback is for valid or invalid fields */
  type: PropTypes.oneOf(['valid', 'invalid']),
  /** Display feedback as a tooltip. */
  tooltip: PropTypes.bool,
}

export default Feedback
