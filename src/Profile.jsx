import React from 'react';
import { Row, Col, Tabs, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

// take user email to get the info from database
export default function Profile() {
  const callback = (key) => {
    console.log(key);
  };

  return (
    <div className="site-layout-content">
      <div className="detail-section">
        <div className="user-info">
          <Row justify="space-around" align="middle">
            <Col span={12}>
              <Avatar size={64} icon={<UserOutlined />} style={{ marginLeft: 150 }} />
            </Col>
            <Col span={12}>
              <div>This is a place holder for user name</div>
              <div>This is a place holder for user email</div>
            </Col>
          </Row>
        </div>
        <div className="user-recipe">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="My Recipes" key="1">
              This is a place holder for my recipes
            </TabPane>
            <TabPane tab="My stars" key="2">
              This is a place holder for my stars
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
