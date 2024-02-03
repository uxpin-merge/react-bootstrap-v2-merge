import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader as CardHeaderM } from 'react-bootstrap';

const CardHeader = (props) => {
  return <CardHeaderM {...props} />;
};

CardHeader.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
  /** @default 'card-header' */
  bsPrefix: PropTypes.string,
};

export default CardHeader;