import * as React from 'react';
import Layout from '../Layout';
import Sider from '../Sider/Sider';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

export default (
  <Layout uxpId="layout-1">
    <Sider width="25%" uxpId="sider-1" >
      Sider
    </Sider>
    <Layout uxpId="layout-2">
      <Header uxpId="header-1">Header</Header>
      <Content uxpId="content-1">Content</Content>
      <Footer uxpId="footer-1">Footer</Footer>
    </Layout>
  </Layout>
);