import React from "react";
import { Modal, Button } from 'antd';

export default class AboutModal extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  };

  handleOk(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="link" onClick={this.showModal} ghost>
          About
        </Button>
        <Modal
          title="Everything about MasterChef..."
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}