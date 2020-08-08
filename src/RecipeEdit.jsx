import React from 'react';

import RecipeAddForm from './RecipeAddForm.jsx';
import graphQLFetch from './graphQLFetch.js';
import './styles/antStyle.less';

export default class RecipeEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      recipe: {},
      invalidFields: {},
    };
    // this.onChange = this.onChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.onValidityChange = this.onValidityChange.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

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

    if (id == null) {
      // if (propsId != null) {
      //   return <h3>{`Recipe with ID ${propsId} not found.`}</h3>;
      // }
      return null;
    }

    const { recipe } = this.state;

    return (
      <div className="site-layout-content">
        <RecipeAddForm/>
      </div>
    );
  };
}