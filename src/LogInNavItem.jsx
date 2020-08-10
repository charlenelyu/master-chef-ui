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

  async function onFinish(values) {
    console.log(values);
    try {
      const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
      const response = await fetch(`${apiEndpoint}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values }),
      });
      const body = await response.text();
      const result = JSON.parse(body);
      props.login(result);
    } catch (error) {
      console.log(`Error logging into the app: ${error}`);
    }
  }

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

export default class LogInNavItem extends React.Component {
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

  async componentDidMount() {
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    const response = await fetch(`${apiEndpoint}/user`, {
      method: 'POST',
      credentials: 'include',
    });
    const body = await response.text();
    const result = JSON.parse(body);
    const { signedIn, name } = result;
    this.setState({ user: { signedIn, name } });
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
    const { signedIn, name } = result;
    this.setState({ user: { signedIn, name } });
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
          <LogInForm login={this.login} />
        </Modal>
      </>
    );
  }
}
