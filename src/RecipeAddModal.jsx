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
    const user = this.context;

    return (
      <div>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined style={{ fontSize: 25 }}/>}
          style={{ width: 50, height: 50, position: 'fixed', bottom: '15%', right: '1%' }}
          onClick={() => {
            this.setState({ visible: true });
          }}
          disabled={!user.signedIn}
        />
        <Modal
          visible={this.state.visible}
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
