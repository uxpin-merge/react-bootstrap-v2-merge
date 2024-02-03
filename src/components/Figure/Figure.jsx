import React from 'react';
import PropTypes from 'prop-types';
import { Figure as FigureM } from 'react-bootstrap';

const Figure = (props) => {
  return <FigureM {...props} />;
};

Figure.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default Figure;