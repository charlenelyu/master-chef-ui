import React from 'react';
import './styles/antStyle.less';

import Contents from './Contents.jsx';

import { NavLink } from 'react-router-dom';
import { Row, Col, Menu, Input, Layout } from 'antd';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

function HeaderContent() {
  return (
    <Row>
      {/* Brand */}
      <Col span={3}>
        <div className="brand">Master Chef</div>
      </Col>

      {/* Menu */}
      <Col span={6}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><NavLink to="/recipes">Home</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to="/recipes">Recipes</NavLink></Menu.Item>
          {/* 用户未登陆之前不能看profile* */}
          <Menu.Item key="3" disabled><NavLink to="/profile">Profile</NavLink></Menu.Item>
        </Menu>        
      </Col>

      {/* Search bar */}
      <Col className="search-bar" span={6}>
        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton/>
      </Col>
    </Row>
  )
}

export default function Page() {
  return (
    <Layout className="layout">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <HeaderContent />
      </Header>
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-content"><Contents/></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created by Tianhui Li and Yanghong Lyu</Footer>
    </Layout>
  )
}