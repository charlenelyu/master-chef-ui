import React from 'react';
import { Row, Col, Tabs, Button, Space, Modal, message } from 'antd';

import graphQLFetch from './graphQLFetch.js';
import RecipeAddModal from './RecipeAddModal.jsx';
import MyPost from './MyPost.jsx';
import ImageUpload from './ImageUpload.jsx';
import UserContext from './UserContext.js';

const { TabPane } = Tabs;

class UploadAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onCancel = this.onCancel.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onCancel() {
    this.setState({
      visible: false,
    });
  }

  onClick() {
    console.log('click');
    this.setState({ visible: true });
  }

  render() {
    const { updateUser } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Button
          type="primary"
          onClick={this.onClick}
        >
          Upload Avatar
        </Button>
        <Modal
          title="Upload Your New Avatar"
          footer={null}
          onCancel={this.onCancel}
          visible={visible}
        >
          <ImageUpload getURL={updateUser} />
        </Modal>
      </div>
    );
  }
}

// take user email to get the info from database
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {},
      recipes: [],
    };
    this.callback = this.callback.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      me {
        name
        email
        avatar
        posts {        
          author{name} img title id
        }
      }
    }`;

    const data = await graphQLFetch(query);
    const { name, email, avatar, posts } = data.me;

    this.setState({ author: { name, email, avatar }, recipes: posts });
  }

  async createRecipe(recipe) {
    const query = `mutation createRecipe($recipe: RecipeInputs!){
      createRecipe(recipe: $recipe) {
        id
      }
    }`;

    const data = await graphQLFetch(query, { recipe });
    if (data) {
      this.loadData();
    }
  }

  async deleteRecipe(index) {
    const query = `mutation deleteRecipe($id: ID!) {
      deleteRecipe(id: $id)
    }`;

    const { recipes } = this.state;
    const { id } = recipes[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.deleteRecipe) {
      this.setState((preState) => {
        const newList = [...preState.recipes];
        newList.splice(index, 1);
        return { recipes: newList };
      });
    } else {
      this.loadData();
    }
  }

  async updateUser(url) {
    const query = `mutation updateAvatar($img: String!) {
      updateAvatar(img: $img)
    }`;
    const data = await graphQLFetch(query, { img: url });
    if (data && data.updateAvatar) {
      message.success('Avatar updated successfully!');
      await this.loadData();
      const { author } = this.state;
      const { onUserChange } = this.context;
      onUserChange({ signedIn: true, ...author });
    }
  }

  callback(key) {
    console.log(key);
  };

  render() {
    const { recipes, author } = this.state;

    return (
      <div className="site-layout-content">
        <div className="detail-section">
          <div className="user-info">
            <Row justify="space-around" align="middle">
              <Col span={12}>
                <div className="avatar">
                  <img src={author.avatar} alt="avatar" />
                  <div className="upload">
                    <UploadAvatar updateUser={this.updateUser} />
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <h2>{author.name}</h2>
                <h4>{author.email}</h4>
                <div className="space-align-block">
                  <Space align="center">
                    <RecipeAddModal createRecipe={this.createRecipe} />
                    <span>Create Your New Recipe!</span>
                  </Space>
                </div>
              </Col>
            </Row>
          </div>
          <div className="user-recipe">
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="My Recipes" key="1">
                <MyPost recipes={recipes} deleteRecipe={this.deleteRecipe} />
              </TabPane>
              <TabPane tab="My stars" key="2">
                This is a place holder for my stars
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

Profile.contextType = UserContext;
