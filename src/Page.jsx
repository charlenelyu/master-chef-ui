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
      <Content className="site-layout" style={{ marginTop: 60 }}>
        <Contents />
      </Content>
      <Footer style={{ paddingTop: 10, paddingBottom: 8, textAlign: 'center', fontSize: 13 }}>
        Created by Tianhui Li and Yanghong Lyu
        <p className="text-center">
          Full source code available at this
          {' '}
          <a href="https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Ladybugs_UI">
            GitHub repository
          </a>
        </p>
      </Footer>
    </Layout>
  );
}
