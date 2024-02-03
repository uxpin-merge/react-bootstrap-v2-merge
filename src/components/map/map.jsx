import React from 'react';
import PropTypes from 'prop-types';
import { map as mapM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/map
* @uxpindescription TODO
*/


const map = (props) => {
  return <mapM {...props} />;
};

map.propTypes = {
  children: PropTypes.node,

};

export default map;