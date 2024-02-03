import React from 'react';
import PropTypes from 'prop-types';
import { PageItem as PageItemM } from 'react-bootstrap';

/**
* @uxpindocurl https://react-bootstrap.github.io/docs/components/PageItem
* @uxpindescription TODO
*/


const PageItem = (props) => {
  return <PageItemM {...props} />;
};

PageItem.propTypes = {
  children: PropTypes.node,
bsPrefix: PropTypes.string,
  as: PropTypes.string,
  /** Disables the PageItem */
  disabled: PropTypes.bool,
  /** Styles PageItem as active, and renders a `<span>` instead of an `<a>`. */
  active: PropTypes.bool,
  /** An accessible label indicating the active state. */
  activeLabel: PropTypes.string,
  /** The HTML href attribute for the `PageItem`. */
  href: PropTypes.string,
  /** custom style for the inner component of the PageItem */
  linkStyle: PropTypes.object,
  /** custom className for the inner component of the PageItem */
  linkClassName: PropTypes.string,
  /** A callback function for when this component is clicked. */
  onClick: PropTypes.func,
};

export default PageItem;