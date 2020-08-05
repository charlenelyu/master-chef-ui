import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import ImageUpload from './ImageUpload.jsx';

const { Option } = Select;

function DynamicFieldSet({ name }) {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <div>
          {fields.map(field => (
            <Space style={{ display: 'flex', marginBottom: 8 }} align="start">
              <Form.Item
                {...field}
                rules={[
                  {
                    required: true,
                    message: 'Please input step or delete this field.',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <MinusCircleOutlined
                onClick={() => {
                  remove(field.name);
                }}
              />
            </Space>
          ))}
          <Form.Item>
            <Button
              type="dashed"
              onClick={() => {
                add();
              }}
              block
            >
              <PlusOutlined />
              Add field
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  );
}

export default class RecipeAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      imgUrl: '',
    };
    this.getImg = this.getImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onSubmit(values) {
    const { createRecipe, closeForm } = this.props;
    const { imgUrl } = this.state;
    const newRecipe = Object.assign(values, { img: imgUrl });
    console.log(newRecipe);
    // createRecipe(newRecipe);
    this.formRef.current.resetFields();
    closeForm();
  }

  onReset() {
    this.formRef.current.resetFields();
  }

  getImg(url) {
    this.setState({
      imgUrl: url,
    });
    // console.log(this.state);
  }

  render() {
    return (
      <Form
        ref={this.formRef}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        name="addRecipe"
        onFinish={this.onSubmit}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input the title!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="author" label="Author">
          <Input />
        </Form.Item>
        <Form.Item name="img" label="Image">
          <ImageUpload getURL={this.getImg} />
        </Form.Item>
        <Form.Item name="tag" label="Tag">
          <Select mode="multiple">
            <Option value="tag1">tag1</Option>
            <Option value="tag2">tag2</Option>
            <Option value="tag3">tag3</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ingredients">
          <DynamicFieldSet name="ingredients" />
        </Form.Item>
        <Form.Item label="Steps">
          <DynamicFieldSet name="steps" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
