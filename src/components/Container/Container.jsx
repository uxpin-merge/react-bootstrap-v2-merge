import React from 'react';
import PropTypes from 'prop-types';
import { Container as ContainerM } from 'react-bootstrap';

const Container = (props) => {
  return <ContainerM {...props} />;
};

Container.propTypes = {
  children: PropTypes.node,
/** Allow the Container to fill all of its available horizontal space. */
  fluid: PropTypes.string,
  /** You can use a custom element for this component */
  as: PropTypes.string,
  /** @default 'container' */
  bsPrefix: PropTypes.string,
};

export default Container;