import React from 'react';
import { Row, Col, Tabs, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import graphQLFetch from './graphQLFetch.js';
import RecipeAddModal from './RecipeAddModal.jsx';
import MyPost from './MyPost.jsx';

const { TabPane } = Tabs;

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
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
      me {
        name
        email
        posts {        
          author{name} img title id
        }
      }
    }`;

    const data = await graphQLFetch(query);

    this.setState({ author: { name: data.me.name, email: data.me.email }, recipes: data.me.posts });
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
                <Avatar size={64} icon={<UserOutlined />} style={{ marginLeft: 300 }} />
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
