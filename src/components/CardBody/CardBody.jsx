import React from 'react';
import PropTypes from 'prop-types';
import { CardBody as CardBodyM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CardBody
* @uxpindescription TODO
*/


const CardBody = (props) => {
  return <CardBodyM {...props} />;
};

CardBody.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardBody;