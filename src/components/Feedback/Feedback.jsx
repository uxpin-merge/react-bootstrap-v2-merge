import React from 'react';
import PropTypes from 'prop-types';
import { Feedback as FeedbackM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/Feedback
* @uxpindescription TODO
*/


const Feedback = (props) => {
  return <FeedbackM {...props} />;
};

Feedback.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  /** Specify whether the feedback is for valid or invalid fields */
  type: PropTypes.string,
  /** Display feedback as a tooltip. */
  tooltip: PropTypes.bool,
};

export default Feedback;