import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as PaginationM } from 'react-bootstrap';

const Pagination = (props) => {
  return <PaginationM {...props} />;
};

Pagination.propTypes = {
  children: PropTypes.node,
/** @default 'pagination' */
  bsPrefix: PropTypes.string,
  /** Sets the size of all PageItems. */
  size: PropTypes.string,
};

export default Pagination;