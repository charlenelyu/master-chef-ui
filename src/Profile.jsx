import React from 'react';
import { Row, Col, Tabs, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import graphQLFetch from './graphQLFetch.js';
import RecipeTable from './RecipeTable.jsx';
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
    console.log(this.state);
  }

  async deleteRecipe(index) {
    const query = `mutation deleteRecipe($id: ID!) {
      deleteRecipe(id: $id)
    }`;

    const { recipes } = this.state;
    const { id } = recipes[index];
    const data = await graphQLFetch(query, { id });
    console.log(data);
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
                <Avatar size={64} icon={<UserOutlined />} style={{ marginLeft: 150 }} />
              </Col>
              <Col span={12}>
                <div>{author.name}</div>
                <div>{author.email}</div>
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
