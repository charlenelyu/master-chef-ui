import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Popconfirm, Card, Col, Row } from 'antd';
import './styles/antStyle.less';
import { NavLink } from 'react-router-dom';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;

function RecipeCard({ recipe }) {
  const { id, title, author, img } = recipe;
  return (
    <Col className="card-list" span={6}>
      <NavLink to={{ pathname: `/view/${id}`, state: recipe }}>
        <Card
          hoverable
          style={{ width: 250, marginLeft: 16 }}
          size="small"
          cover={<img alt={title} src={img} />}
          actions={[
            <NavLink to={{ pathname: `/edit/${id}`, state: recipe }}>
              <EditOutlined key="edit" />
            </NavLink>,
            <Popconfirm
              title="Are you sure delete this task?"
              // onConfirm={confirm}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined key="delete"/>
            </Popconfirm>,
          ]}
        >
          {/* author传过来是一个object, 只用里面的name */}
          <Meta
            title={title}
            description={(<span>by: {author['name']}</span>)}
          />
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
