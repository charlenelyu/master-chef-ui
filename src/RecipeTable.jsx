import React from 'react';
import { Card, Col, Row } from 'antd';
import './styles/antStyle.less';

const { Meta } = Card;

function RecipeCard({recipe}) {
  const {title, author, img} = recipe;
  return (
    <Col className="card-list" span={6}>
      <Card
        hoverable
        style={{ width: 250, marginLeft: 16 }}
        size="small"
        cover={<img alt={title} src={img} />}
      >
        <Meta title={title} description={<span>by: {author}</span>}/>
      </Card>
    </Col>
  );
}

export default function RecipeTable({recipes}) {
  const recipeCards = recipes.map((recipe, index) => (
    <RecipeCard key={index} recipe={recipe} />
  ));

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {recipeCards}
      </Row>
    </div>
  );
}
