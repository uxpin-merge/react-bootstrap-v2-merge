import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar as ProgressBarM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/ProgressBar
* @uxpindescription TODO
*/


const ProgressBar = (props) => {
  return <ProgressBarM {...props} />;
};

ProgressBar.propTypes = {
  children: PropTypes.node,
/** @private@default 'progress-bar' */
  bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Minimum value progress can begin from */
  min: PropTypes.number,
  /** Current value of progress */
  now: PropTypes.number,
  /** Maximum value progress can reach */
  max: PropTypes.number,
  /** Show label that represents visual percentage.EG. 60% */
  label: PropTypes.node,
  /** Hide's the label visually. */
  visuallyHidden: PropTypes.bool,
  /** Uses a gradient to create a striped effect. */
  striped: PropTypes.bool,
  /** Animate's the stripes from right to left */
  animated: PropTypes.bool,
  /** Sets the background class of the progress bar.@type ('success'|'danger'|'warning'|'info') */
  variant: PropTypes.string,
  /** @private */
  isChild: PropTypes.bool,
};

export default ProgressBar;