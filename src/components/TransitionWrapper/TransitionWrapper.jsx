import React from 'react';
import PropTypes from 'prop-types';
import { TransitionWrapper as TransitionWrapperM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/TransitionWrapper
* @uxpindescription TODO
*/


const TransitionWrapper = (props) => {
  return <TransitionWrapperM {...props} />;
};

TransitionWrapper.propTypes = {
  children: PropTypes.node,

};

export default TransitionWrapper;