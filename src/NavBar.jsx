import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Menu, Input } from 'antd';
import './styles/antStyle.less';

const { Search } = Input;

export default function NavBar() {
  return (
    <Row>
      {/* Brand */}
      <Col span={3}>
        <div className="brand">MasterChef</div>
      </Col>

      {/* Menu */}
      <Col span={6}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          {/* 用户未登陆之前不能看profile* */}
          <Menu.Item key="2" disabled>
            <NavLink to="/profile">Profile</NavLink>
          </Menu.Item>
         {/* <NavLink to="/about">About</NavLink> */}
        </Menu>        
      </Col>

      {/* search bar */}
      <Col className="search-bar" span={6}>
        <Search placeholder="input search text" onSearch={value => console.log(value)} />
      </Col>
    </Row>
  )
}