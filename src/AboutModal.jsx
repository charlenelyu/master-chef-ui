import React from 'react';
import { Modal, Button } from 'antd';

export default class AboutModal extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    this.setState({
      visible: false,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible } = this.state;
    return (
      <>
        <Button type="link" onClick={this.showModal} style={{ color: 'white' }}>
          About
        </Button>
        <Modal
          title="Everything about MasterChef..."
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h3>Technology stack</h3>
          <p>React: 16.13.1</p>
          <p>Antd : 4.5.1</p>
          <p>Express: 4.17.1</p>
          <p>Graphql: 0.13.2</p>
          <p>Mongodb: 3.5.9</p>
        </Modal>
      </>
    );
  }
}
