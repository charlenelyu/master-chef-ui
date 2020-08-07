import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Popconfirm, Card, Col, Row } from 'antd';
import { withRouter, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import './styles/antStyle.less';

const { Meta } = Card;

// eslint-disable-next-line react/prefer-stateless-function
class RecipeCard extends React.Component {
  render() {
    const { recipe } = this.props;

    const card = (
      <Col className="card-list" span={6}>
        <Card
          hoverable
          style={{ width: 300, marginLeft: 60 }}
          size="small"
          cover={<img alt={recipe.title} src={recipe.img} />}
          actions={[
            <Link to={{ pathname: `/edit/${recipe.id}` }}>
              <EditOutlined key="edit" />
            </Link>,
            <Popconfirm
              title="Are you sure delete this task?"
              // onConfirm={confirm}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <DeleteOutlined key="delete" />
            </Popconfirm>,
          ]}
        >
          {/* author传过来是一个object, 只用里面的name */}
          <Meta
            title={recipe.title}
            description={(<span>by: {recipe.author.name}</span>)}
          />
        </Card>
      </Col>
    );

    return (
      <LinkContainer to={{ pathname: `/view/${recipe.id}` }}>
        {card}
      </LinkContainer>
    );
  }
}

const CardRouter = withRouter(RecipeCard);

export default function RecipeTable({ recipes }) {
  const recipeCards = recipes.map((recipe, index) => (
    <CardRouter key={index} recipe={recipe} />
  ));

  return (
    <div className="site-card-wrapper">
      <Row gutter={24}>
        {recipeCards}
      </Row>
    </div>
  );
}
