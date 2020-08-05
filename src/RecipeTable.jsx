import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import './styles/antStyle.less';
import { NavLink } from 'react-router-dom';

const { Meta } = Card;

function RecipeCard({recipe}) {
  const {id, title, author, img} = recipe;
  return (
    <Col className="card-list" span={6}>
      <NavLink to={{ pathname: `/view/${id}`, state: recipe }}>
        <Card
          hoverable
          style={{ width: 250, marginLeft: 16 }}
          size="small"
          cover={<img alt={title} src={img} />}
        >
          {/* author传过来是一个object, 只用里面的name */}
          <Meta title={title} description={<span>by: {author['name']}</span>}/>
        </Card>
      </NavLink>
    </Col>
  );
}

export default function RecipeTable({ recipes }) {
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
