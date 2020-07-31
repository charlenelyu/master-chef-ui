// should be delete later

import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';

export default function RecipeAddForm() {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item name="title" label="Title">
        <Input placeholder='please type the title'/>
      </Form.Item>
      <Form.Item name="author" label='Author'>
        <Input placeholder='please type the author'/>
      </Form.Item>
      {/* <Form.Item label='Image'>
        <Input />
      </Form.Item> */}
      {/* <Form.Item label='Create at'>
        <Input />
      </Form.Item> */}
      <Form.Item name="tag" label="Tag">
        <Select>
          <Select.Option value="demo1">Demo1</Select.Option>
          <Select.Option value="demo2">Demo2</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="ingredients" label='Ingredient'>
        <Input.TextArea placeholder='please type the ingredients'/>
      </Form.Item>
      <Form.Item name="steps" label='Step'>
        <Input.TextArea placeholder='please type the steps'/>                
      </Form.Item>
    </Form>
  );
};