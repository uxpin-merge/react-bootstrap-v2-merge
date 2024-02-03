import React from 'react';
import PropTypes from 'prop-types';
import { AlertLink as AlertLinkM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/AlertLink
* @uxpindescription TODO
* @uxpinnamespace Alert
*/


const Link = (props) => {
  return <AlertLinkM {...props} />;
};

Link.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default Link;
