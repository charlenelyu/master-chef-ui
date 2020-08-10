import React from 'react';
import { Tabs, Modal, Form, Button, Input } from 'antd';

function LogInForm(props) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log(values);
    props.closeForm();
  };

  return (
    <Form
      {...layout}
      name="login"
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      user: { signedIn: false, name: '' },
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.login = this.login.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  hideModal() {
    this.setState({
      visible: false,
    });
  }

  login(result) {
    this.hideModal();
    this.setState({ user: { signedIn: true, name: 'User1' } });
  }

  render() {
    const { visible, user } = this.state;
    if (user.signedIn) {
      return (
        <div>
          {user.name}
        </div>
      );
    }
    return (
      <>
        <Button type="link" onClick={this.showModal} ghost>
          Login
        </Button>
        <Modal
          title="Log In"
          visible={visible}
          onCancel={this.hideModal}
          footer={null}
        >
          <LogInForm login={this.login} closeForm={this.hideModal} />
        </Modal>
      </>
    );
  }
}
