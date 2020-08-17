import React from 'react';
import {
  List, Tag, Typography, Card, Divider, Descriptions, Row, Col, Steps,
} from 'antd';
import graphQLFetch from './graphQLFetch.js';
import './styles/antStyle.less';

const { Title } = Typography;
const { Step } = Steps;

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
    // const { match: { params: { id: propsId } } } = this.props;

    if (id == null) {
      // if (propsId != null) {
      //   return <h3>{`Recipe with ID ${propsId} not found.`}</h3>;
      // }
      return null;
    }

    const { recipe } = this.state;

    return (
      <div className="site-layout-content">
        <div className="detail-section">
          <div className="item">
            <div className="title-layout">
              <Title level={2} className="title">{recipe.title}</Title>
            </div>
            <Row justify="space-around" align="middle">
              <Col lg={12}>
                <img src={recipe.img} alt="img" />
              </Col>
              <Col lg={12}>
                <p>
                  created by:
                  {'   '}
                  {recipe.author.name}
                </p>
                <p>
                  created at:
                  {'   '}
                  {recipe.created}
                </p>
                <p>
                  Tags:
                  {'   '}
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
              </Col>
            </Row>
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
            <Steps direction="vertical" className="step">
              {recipe.steps.map((step, index) => (
                <Step description={step} key={index} status="process" />
              ))}
            </Steps>
          </div>
        </div>
      </div>
    );
  }
}
