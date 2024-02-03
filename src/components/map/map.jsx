import React from 'react';
import PropTypes from 'prop-types';
import { map as mapM } from 'react-bootstrap';

const map = (props) => {
  return <mapM {...props} />;
};

map.propTypes = {
  children: PropTypes.node,

};

export default map;