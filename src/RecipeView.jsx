import React from 'react';
import graphQLFetch from './graphQLFetch.js';
import { List, Tag, Typography, Card, Divider } from 'antd';
import './styles/antStyle.less';

const { Title } = Typography;

export default class RecipeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {},
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query recipeInfo($id: ID!){
      recipeInfo(id: $id) {
        id author{name} title img created
        steps ingredients tag
      }
    }`

    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });
    this.setState({ recipe: data.recipeInfo });
  }

  render() {
    const { recipe: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;
    
    if (id == null) {
      // if (propsId != null) {
      //   return <h3>{`Recipe with ID ${propsId} not found.`}</h3>;
      // }
      return null;
    }

    const { recipe } = this.state;
    
    const steps = [];
    for (let i = 1; i <= recipe.steps.length; i++) {
      steps.push(
        {
          index: `Step ${i}`,
          step: recipe.steps[i-1]
        }
      )
    }

    return (
      <div className="detail-section">
        <div className="item">
          <img src={recipe.img} alt="img" />
          <div className="info">
            <Title level={2}>{recipe.title}</Title>
            <p>created by: {recipe.author.name}</p>
            <p>created at: {recipe.created}</p>
            <p>
              Tag: <Tag color="magenta">{recipe.tag}</Tag>
            </p>
          </div>
        </div>
        <div className="material">
          <Divider orientation="left">Ingredients</Divider>
          <List
            className="list"
            grid={{ gutter: 16, column: 4 }}
            dataSource={recipe.ingredients}
            renderItem={item => (
              <List.Item>
                <Card style={{ width: 100 }}>
                  <p>{item}</p>
                </Card>
              </List.Item>
            )}
          />
        </div>
        <div className="process">
          <Divider orientation="left">Steps</Divider>
            <List
              bordered
              dataSource={steps}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.index}
                    description={item.step}
                  />
                </List.Item>
              )}
            />
        </div>
      </div>
    )
  }
}
