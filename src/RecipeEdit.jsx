import React from 'react';
import { message, Typography, Divider } from 'antd';

import RecipeAddForm from './RecipeAddForm.jsx';
import graphQLFetch from './graphQLFetch.js';
import './styles/antStyle.less';

const { Title } = Typography;

export default class RecipeEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      recipe: {},
    };
    this.updateForm = this.updateForm.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  // componentDidUpdate(prevProps) {
  //   const { match: { params: { id: prevId } } } = prevProps;
  //   const { match: { params: { id } } } = this.props;
  //   if (id !== prevId) {
  //     this.loadData();
  //   }
  // }

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

  async updateForm(newRecipe) {
    const query = `mutation updateRecipe(
      $id: ID!
      $changes: UpdateRecipeInput!
    ) {
      updateRecipe(
        id: $id
        changes: $changes
      ) {
        title description tags img
        ingredients steps
      }
    }`;

    const { recipe: { id } } = this.state;
    const { ...changes } = newRecipe;
    const data = await graphQLFetch(query, { id, changes });
    if (data) {
      this.setState({ recipe: data.updateRecipe });
      message.success('Your recipe has been updated successfully!');
    }
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
    const getId = parseInt(recipe.id);

    return (
      <div className="site-layout-content">
        <div className="edit-form">
          <Title className="title">
            { `Editing Recipe #${getId}` }
          </Title>
          <Divider />
          <RecipeAddForm recipe={recipe} updateForm={this.updateForm} />
          {/* <div>
            <Link to={`/edit/${getId - 1}`}>Prev</Link>
            {' | '}
            <Link to={`/edit/${getId + 1}`}>Next</Link>
          </div> */}
        </div>
      </div>
    );
  }
}
