import React from 'react';
import PropTypes from 'prop-types';
import { OffcanvasBody as OffcanvasBodyM } from 'react-bootstrap';

const OffcanvasBody = (props) => {
  return <OffcanvasBodyM {...props} />;
};

OffcanvasBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default OffcanvasBody;