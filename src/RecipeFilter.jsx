import React from 'react';
import { Collapse, Select, Row, Col } from 'antd';

import { CaretRightOutlined } from '@ant-design/icons';
import './styles/antStyle.less';

const { Panel } = Collapse;

class TagSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this.handleChange);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const children = [1, 2, 3, 4];

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="Please select"
        defaultValue={['a10', 'c12']}
        onChange={this.handleChange}
      >
        {children}
      </Select>
    );
  };
}

export default function RecipeFilter() {
  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['0']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      className="site-collapse-custom-collapse"
      style={{ marginLeft: 30, marginRight: 30, marginBottom: 20 }}
    >
      <Panel header="Recipe Filter by Tag" key="1" className="site-collapse-custom-panel">
        <Row gutter={[48, 8]}>
          <Col span={8}>Cuisine: <TagSelector /></Col>
          <Col span={8}>Meal: <TagSelector /></Col>
          <Col span={8}>Category: <TagSelector /></Col>
        </Row>
      </Panel>
    </Collapse>
  );
}
