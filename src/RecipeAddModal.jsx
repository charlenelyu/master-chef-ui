import React from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import RecipeAddForm from './RecipeAddForm.jsx';
import UserContext from './UserContext.js';

export default class RecipeAddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onCancel = this.onCancel.bind(this);
  }

  onCancel() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { createRecipe } = this.props;
    const { user } = this.context;
    const { visible } = this.state;
    return (
      <div>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined style={{ fontSize: 25 }} />}
          onClick={() => {
            this.setState({ visible: true });
          }}
          disabled={!user.signedIn}
          style={{ width: 50, height: 50 }}
        />
        <Modal
          visible={visible}
          title="Add a New Recipe"
          footer={null}
          onCancel={this.onCancel}
        >
          <RecipeAddForm
            createRecipe={createRecipe}
            closeForm={this.onCancel}
          />
        </Modal>
      </div>
    );
  }
}

RecipeAddModal.contextType = UserContext;
