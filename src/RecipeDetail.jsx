import React from 'react';
import { Row, Col, Avatar, Tag, Divider, Steps } from 'antd';

import img1 from '../public/assets/sp1.jpg';

const { Step } = Steps;

export default class RecipeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { recipe: {
      title: "",
      author: "",
      created: "",
      ingredients: "",
      steps: [],
      tag: "",
    } };
  }

  componentDidMount() {
    this.loadData();
  }
  
  loadData() {
    const { match: { params: { id } } } = this.props;
    console.log("query recipe id " + id);
    this.setState({ recipe : {
      id: 1,
      title: "Test1",
      author: "li",
      img: img1,
      created: new Date('2020/07/29').toDateString(),
      ingredients: "a",
      steps: ["111111", "222222"],
      tag: "aaaaaa",
    }})
    /*
    const query = `query issue($id: Int!) {
      issue (id: $id) {
        id description
      }
    }`;

    const data = await graphQLFetch(query, { id: parseInt(id, 10) });
    if (data) {
      this.setState({ issue: data.issue });
    } else {
      this.setState({ issue: {} });
    }
    */
  }

  render() {
    const {title, author, img, created, ingredients, steps, tag} = this.state.recipe;
    console.log(steps);
    return (
      <div>
        <h2>{title}</h2>
        <Row gutter={16}>
          <Col span={12}><img src={img} alt="recipe image"/></Col>
          <Col span={12}>
            <div>
              <Avatar>U</Avatar>
              <span>{author}</span>
            </div>
            <p>{created}</p>
            <Tag>{tag}</Tag>
          </Col>
        </Row>
        <Divider orientation="left">Description</Divider>
        <p>This is a place holder for description</p>
        <Divider orientation="left">Ingrediants</Divider>
        <p>{ingredients}</p>
        <Divider orientation="left">Steps</Divider>
        <Steps direction="vertical" size="small">
          {steps.map((step, index) => {
            return ( 
              <Step 
                key={index}
                description={step}
              />
            );
          })}
          </Steps>
      </div>
    );
  }
}