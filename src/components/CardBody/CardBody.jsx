import React from 'react';
import PropTypes from 'prop-types';
import { CardBody as CardBodyM } from 'react-bootstrap';

const CardBody = (props) => {
  return <CardBodyM {...props} />;
};

CardBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardBody;