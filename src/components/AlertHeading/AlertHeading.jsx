import React from 'react';
import PropTypes from 'prop-types';
import { AlertHeading as AlertHeadingM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertHeading
* @uxpindescription TODO
* @uxpinnamespace Alert
*/


const Heading = (props) => {
  return <AlertHeadingM {...props} />;
};

Heading.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default Heading;
