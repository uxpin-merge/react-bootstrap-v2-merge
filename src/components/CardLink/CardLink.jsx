import React from 'react';
import PropTypes from 'prop-types';
import { CardLink as CardLinkM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CardLink
* @uxpindescription TODO
*/


const CardLink = (props) => {
  return <CardLinkM {...props} />;
};

CardLink.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardLink;