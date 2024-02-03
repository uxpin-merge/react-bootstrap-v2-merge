import React from 'react';
import PropTypes from 'prop-types';
import { CardSubtitle as CardSubtitleM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/CardSubtitle
* @uxpindescription TODO
*/


const CardSubtitle = (props) => {
  return <CardSubtitleM {...props} />;
};

CardSubtitle.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default CardSubtitle;