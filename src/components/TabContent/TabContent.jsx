import React from 'react';
import PropTypes from 'prop-types';
import { TabContent as TabContentM } from 'react-bootstrap';

const TabContent = (props) => {
  return <TabContentM {...props} />;
};

TabContent.propTypes = {
  children: PropTypes.node,
as: PropTypes.string,
};

export default TabContent;