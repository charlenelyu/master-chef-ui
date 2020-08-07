import React from 'react';
import {
  List, Tag, Typography, Card, Divider, Descriptions,
} from 'antd';
import graphQLFetch from './graphQLFetch.js';
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

  // TODO: add description
  async loadData() {
    const query = `query recipeInfo($id: ID!){
      recipeInfo(id: $id) {
        id author{name} title img created
        description ingredients steps tags
      }
    }`;

    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });
    this.setState({ recipe: data.recipeInfo });
  }

  render() {
    const { recipe: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;

    if (id === undefined) {
      if (propsId !== undefined) {
        return <h3>{`Recipe with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }

    const { recipe } = this.state;

    let steps = [];
    if (recipe.steps !== undefined) {
      steps = recipe.steps.map((step, idx) => (
        { index: `Step ${idx + 1}`, step }
      ));
    }
    // const steps = [];
    // for (let i = 1; i <= recipe.steps.length; i++) {
    //   steps.push(
    //     {
    //       index: `Step ${i}`,
    //       step: recipe.steps[i - 1],
    //     },
    //   );
    // }

    return (
      <div className="site-layout-content">
        <div className="detail-section">
          <img src={recipe.img} alt="img" />
          <div className="item">
            <div className="info">
              <Title level={2}>{recipe.title}</Title>
              <li>
                created by:
                {recipe.author.name}
              </li>
              <li>
                created at:
                {recipe.created}
              </li>
              <p>
                Tags:
                {' '}
                {
                  recipe.tags.map((tag, index) => (
                    <Tag key={index} color="magenta">{tag}</Tag>
                  ))
                }
              </p>
              <div className="description">
                <Descriptions title="Description">
                  <Descriptions.Item>{recipe.description}</Descriptions.Item>
                </Descriptions>
              </div>
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
                  <Card size="small">
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
      </div>
    );
  }
}
