import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Menu, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './styles/antStyle.less';

import AboutModal from './AboutModal.jsx';
import SignIn from './SignIn.jsx';

const { Search } = Input;

export default function NavBar() {
  return (
    <Row>
      {/* Brand */}
      <Col span={3}>
        <div className="brand">MasterChef</div>
      </Col>

      {/* Menu */}
      <Col span={5}>
        <Menu theme="dark" mode="horizontal">
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
          <Menu.Item><AboutModal /></Menu.Item>
        </Menu>
      </Col>

      {/* search bar */}
      <Col className="search-bar" span={6}>
        <Search placeholder="input search text" onSearch={value => console.log(value)} />
      </Col>

      <Col className="sign-in" span={4} offset={6}>
        <Avatar size="large" icon={<UserOutlined />} />
        <SignIn />
      </Col>
    </Row>
  );
}
