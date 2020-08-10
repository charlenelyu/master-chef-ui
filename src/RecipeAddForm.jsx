import React from 'react';
import { Button, Form, Input, Select, Space, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import ImageUpload from './ImageUpload.jsx';

const { Option } = Select;

function DynamicFieldSet({ name }) {
  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => (
        <div>
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
          {fields.map((field, index) => (
            <Space style={{ display: 'inline-flex', marginBottom: 8, marginRight: 10 }} align="start" key={index}>
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
    this.onUpdate = this.onUpdate.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onSubmit(values) {
    const { createRecipe, closeForm } = this.props;
    const { imgUrl } = this.state;
    const newRecipe = Object.assign(values, { img: imgUrl });
    // console.log(newRecipe);
    createRecipe(newRecipe);
    this.formRef.current.resetFields();
    closeForm();
  }

  onUpdate(values) {
    const { updateForm } = this.props;
    const { imgUrl } = this.state;
    let newRecipe;
    if (imgUrl !== '') {
      newRecipe = Object.assign(values, { img: imgUrl });
    } else {
      newRecipe = values;
    }
    // not able to change the author
    // may assign the author automatically in the authorization part
    delete newRecipe.author;
    console.log(newRecipe);
    updateForm(newRecipe);
  }

  onReset() {
    this.formRef.current.resetFields();
  }

  getImg(url) {
    this.setState({
      imgUrl: url,
    });
  }

  render() {
    let newRecipe = {
      author: '',
      title: '',
      description: '',
      ingredients: [],
      steps: [],
      tags: [],
    };
    const { recipe } = this.props;

    if (recipe != null) {
      newRecipe = recipe;
      newRecipe.author = recipe.author.name;
    }

    // for sample tags
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }

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
        onFinish={recipe == null ? this.onSubmit : this.onUpdate}
        initialValues={newRecipe}
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
        <Form.Item name="tags" label="Tag">
          <Select
            mode="multiple"
            style={{ width: '80%' }}
            placeholder="Please select"
          >
            {children}
          </Select>
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ingredients">
          <DynamicFieldSet name="ingredients" />
        </Form.Item>
        <Form.Item label="Steps" className="step-input">
          <DynamicFieldSet name="steps" />
        </Form.Item>
        <Form.Item>
          <Col style={{ textAlign: 'center', marginLeft: '25%' }}>
            <Button htmlType="button" onClick={this.onReset}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Col>
        </Form.Item>
      </Form>
    );
  }
}
