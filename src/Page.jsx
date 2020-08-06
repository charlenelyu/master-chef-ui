import React from 'react';
import { Layout } from 'antd';
import './styles/antStyle.less';

import NavBar from './NavBar.jsx';
import Contents from './Contents.jsx';

const { Header, Content, Footer } = Layout;

export default function Page() {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <NavBar />
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <Contents />
      </Content>
      <Footer style={{ paddingTop: 10, paddingBottom: 10, textAlign: 'center' }}>Created by Tianhui Li and Yanghong Lyu</Footer>
    </Layout>
  );
}
