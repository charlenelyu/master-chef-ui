import React from 'react';
import { Button, Modal, Form, Input, Select, Space} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import ImageUpload from './ImageUpload.jsx'

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
                    message: "Please input step or delete this field.",
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
              <PlusOutlined /> Add field
            </Button>
          </Form.Item>
        </div>
      )}
    </Form.List>
  )
}

function AddRecipeForm({visible, onSubmit, onCancel, getImg }) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Add a New Recipe"
      okText="Submit"
      cancelText="cancel"
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onSubmit(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info)
          })
      }}
      onCancel={onCancel}
    >
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        name="addRecipe"
      >
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
        <Form.Item name="author" label='Author'>
          <Input />
        </Form.Item>
        <Form.Item name="img" label='Image'>
          <ImageUpload getURL={getImg}/>
        </Form.Item>
        <Form.Item name="tag" label="Tag">
          <Select>
            <Select.Option value="demo1">Demo1</Select.Option>
            <Select.Option value="demo2">Demo2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ingredients">
          <DynamicFieldSet name="ingredients" />
        </Form.Item>
        <Form.Item label="Steps">
          <DynamicFieldSet name="steps" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default class RecipeAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.getImg = this.getImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  getImg(url) {
    this.setState({
      imgURL: url,
    });
    // console.log(this.state);
  }

  onSubmit({title, author, tag, ingredients, steps}) {
    // console.log(this.state);
    const newRecipe = {
      author: author,
      title: title,
      tag: tag,
      ingredients: ingredients,
      steps: steps,
      img: this.state.imgURL,
    }
    // console.log(newRecipe);
    this.props.createRecipe(newRecipe);
    this.setState({
      visible: false,
    });
  }

  onCancel() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>  
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          onClick={() => {
            this.setState({ visible: true });
          }}
        />
        <AddRecipeForm
          visible={this.state.visible}
          onSubmit={this.onSubmit}
          onCancel={this.onCancel}
          getImg={this.getImg}
        />
      </div>  
    );
  }
}