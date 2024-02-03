import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as BreadcrumbM } from 'react-bootstrap';

const Breadcrumb = (props) => {
  return <BreadcrumbM {...props} />;
};

Breadcrumb.propTypes = {
  children: PropTypes.node,
/** Additional props passed as-is to the underlying `<ol>` element */
  listProps: PropTypes.object,
  /** ARIA label for the nav elementhttps://www.w3.org/TR/wai-aria-practices/#breadcrumb */
  label: PropTypes.string,
  as: PropTypes.string,
  /** @default 'breadcrumb' */
  bsPrefix: PropTypes.string,
};

export default Breadcrumb;