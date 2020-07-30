import React from 'react';
import './styles/antStyle.less';

import Contents from './Contents.jsx';

import { Menu, Input, Typography, Layout } from 'antd';

const { Header, Content, Footer } = Layout;

import { NavLink } from 'react-router-dom';

import { AudioOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

// search bar css
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

// 暂时没加
function SearchBar() {
  return (
    <div>
      <Search placeholder="input search text" onSearch={value => console.log(value)} 
        enterButton
      />
    </div>
  )
}

export default function Page() {
  return (
    <Layout className="layout">
      <Header>
        {/* <div><Title level={2}>Master Chef</Title></div> */}
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1"><NavLink to="/recipes">Home</NavLink></Menu.Item>
          <Menu.Item key="2"><NavLink to="/recipes">Recipes</NavLink></Menu.Item>
          <Menu.Item key="3"><NavLink to="/profile">Profile</NavLink></Menu.Item>
          {/* <SearchBar /> */}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content"><Contents/></div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created by Tianhui Li and Yanghong Lyu</Footer>
    </Layout>
    // {/* <div>
    //   <NavBar/>
    //   <Contents/>
    //   <Footer/>
    // </div> */}
  )
}