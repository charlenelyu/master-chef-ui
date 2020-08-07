import React from 'react';
import {
<<<<<<< HEAD
  List, Tag, Typography, Card, Divider, Descriptions,
=======
  List, Tag, Typography, Card, Divider, Descriptions, Row, Col, Steps
>>>>>>> tianhui
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
    const { match: { params: { id: propsId } } } = this.props;

<<<<<<< HEAD
    if (id === undefined) {
      if (propsId !== undefined) {
        return <h3>{`Recipe with ID ${propsId} not found.`}</h3>;
      }
=======
    if (id == null) {
      // if (propsId != null) {
      //   return <h3>{`Recipe with ID ${propsId} not found.`}</h3>;
      // }
>>>>>>> tianhui
      return null;
    }

    const { recipe } = this.state;
<<<<<<< HEAD

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

=======
    
>>>>>>> tianhui
    return (
      <div className="site-layout-content">
        <div className="detail-section">
          <div className="item">
            <Row justify="space-around" align="middle">
              <Col span={12}>
                <img src={recipe.img} alt="img" />
              </Col>
              <Col span={12}>
                <div className="title-layout">
                  <Title level={2} className="title">{recipe.title}</Title>
                </div>
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
                  <Descriptions title="Description" style={{ paddingRight: 100 }}>
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
              {recipe.steps.map(step => (
                <Step description={step} status="process" />
              ))}
            </Steps>
          </div>
        </div>
      </div>
    );
  }
}
