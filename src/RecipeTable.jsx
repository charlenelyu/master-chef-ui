import React from 'react';

import { Card, Col, Row } from 'antd';
import './styles/antStyle.less';

const { Meta } = Card;

function RecipeCard ({recipe}) {
  return (
    <Col className="card-list" span={6}>
      <Card
        hoverable
        style={{ width: 250, marginLeft: 16 }}
        size="small"
        cover={<img alt={recipe.title} src={recipe.img} />}
      >
        <Meta title={recipe.title} description={<span>by: {recipe.author}</span>}/>
      </Card>
    </Col>
  );
}

export default function RecipeTable({recipes}) {
  const recipeCard = recipes.map(recipe => (
    <RecipeCard recipe={recipe}/>
  ));

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {recipeCard}
      </Row>
    </div>
  );
}
