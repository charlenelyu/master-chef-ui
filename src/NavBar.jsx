import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Menu, Input } from 'antd';
import './styles/antStyle.less';
import AboutModal from "./AboutModal.jsx";

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
          <Menu.Item key="2">
            <NavLink to="/recipe">Recipes</NavLink>
          </Menu.Item>
          {/* 用户未登陆之前不能看profile set to disable */}
          <Menu.Item key="3">
            <NavLink to="/profile">Profile</NavLink>
          </Menu.Item>
          <Menu.Item><AboutModal/></Menu.Item>
        </Menu>        
      </Col>

      {/* search bar */}
      <Col className="search-bar" span={6}>
        <Search placeholder="input search text" onSearch={value => console.log(value)} />
      </Col>
    </Row>
  )
}