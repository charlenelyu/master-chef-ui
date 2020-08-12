import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Modal, Form, Button, Input, Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

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

function LogInForm(props) {
  async function onFinish(values) {
    // console.log(values);
    try {
      const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
      const response = await fetch(`${apiEndpoint}/login`, {
        method: 'POST',
        credentials: 'include',
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

function RegisterForm() {
  function onFinish(values) {
    console.log(values);
  }

  return (
    <Form
      {...layout}
      name="register"
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>
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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

// get user email from the form
export default class LogInNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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
    const { signedIn, name, email } = result;
    const { onUserChange } = this.props;
    onUserChange({ signedIn, name, email });
  }

  async logout() {
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    try {
      await fetch(`${apiEndpoint}/signout`, {
        method: 'POST',
        credentials: 'include',
      });
      const { onUserChange } = this.props;
      onUserChange({ signedIn: false, name: '', email: '' });
    } catch (error) {
      console.log(`Error signing out: ${error}`);
    }
  }

  render() {
    const { visible } = this.state;
    const { user } = this.props;

    // console.log(user);

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Button type="link" ghost>
            <Link to="/profile">
              Profile
            </Link>
          </Button>
        </Menu.Item>
        <Menu.Item key="2">
          <Button type="link" onClick={this.logout} ghost>
            Log Out
          </Button>
        </Menu.Item>
      </Menu>
    );

    if (user.signedIn) {
      return (
        <>
          <Avatar size="large" icon={<UserOutlined />} />
          <Dropdown overlay={menu} trigger={['click']}>
            <Button ghost>
              {user.name}
              <DownOutlined />
            </Button>
          </Dropdown>
        </>
      );
    }
    return (
      <>
        <Button type="link" onClick={this.showModal} ghost>
          Login
        </Button>
        <Modal
          title="Login/Register"
          visible={visible}
          onCancel={this.hideModal}
          footer={null}
        >
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Login" key="1">
              <LogInForm login={this.login} />
            </TabPane>
            <TabPane tab="Register" key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </Modal>
      </>
    );
  }
}
