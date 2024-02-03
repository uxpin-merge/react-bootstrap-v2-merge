import React from 'react';
import PropTypes from 'prop-types';
import { OffcanvasTitle as OffcanvasTitleM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/OffcanvasTitle
* @uxpindescription TODO
*/


const OffcanvasTitle = (props) => {
  return <OffcanvasTitleM {...props} />;
};

OffcanvasTitle.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default OffcanvasTitle;