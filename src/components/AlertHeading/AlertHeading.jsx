import React from 'react';
import PropTypes from 'prop-types';
import { AlertHeading as AlertHeadingM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertHeading
* @uxpindescription TODO
*/


const AlertHeading = (props) => {
  return <AlertHeadingM {...props} />;
};

AlertHeading.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default AlertHeading;