// draw the add modal & send info to database

import React from 'react';
import { Button, Modal, Form,Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

// import { useState } from 'react';

// import RecipeAddForm from './RecipeAddForm.jsx';


export default class RecipeAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.myRef = React.createRef();
  }

  // const [componentSize, setComponentSize] = useState('default');

  // const onFormLayoutChange = ({ size }) => {
  //   setComponentSize(size);
  // };

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleOk(e) {
    e.preventDefault();
    const form = document.forms[0];
    const recipe = {
      author: form.author.value,
      title: form.title.value,
      createAt: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10),
      // img: img2,
      tag: form.tag.value,
      ingredients: form.ingredients.value,
      steps: form.steps.value,
    }
    this.props.createRecipe(recipe);
    // keep the form ready for the next set of input;
    // form.author.val = "";
    // form.title.val = "";
    this.setState({
      visible: false,
    });
  }

  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <React.Fragment>  
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
          onClick={this.showModal}>
        </Button>
        <Modal
          title="Add new recipe"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            name="recipeAdd"
            // initialValues={{
            //   size: componentSize,
            // }}
            // onValuesChange={onFormLayoutChange}
            // size={componentSize}
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
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={this.handleOk}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </React.Fragment>  
    );
  }
}