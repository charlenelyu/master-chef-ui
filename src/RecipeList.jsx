import React from 'react';
import URLSearchParams from 'url-search-params';

import RecipeFilter from './RecipeFilter.jsx';
import RecipeTable from './RecipeTable.jsx';
import graphQLFetch from './graphQLFetch.js';
import RecipeAddModal from './RecipeAddModal.jsx';

export default class RecipeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
    };
    this.createRecipe = this.createRecipe.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { location: { search: prevSearch } } = prevProps;
    const { location: { search } } = this.props;
    if (prevSearch !== search) {
      this.loadData();
    }
  }

  async loadData() {
    // for home page, only need the author, img and title
    const { location: { search } } = this.props;
    const params = new URLSearchParams(search);
    let tags = [];
    if (params.get('cuisine')) {
      tags = tags.concat(params.get('cuisine').split(','));
    }
    if (params.get('meal')) {
      tags = tags.concat(params.get('meal').split(','));
    }
    if (params.get('category')) {
      tags = tags.concat(params.get('category').split(','));
    }
    const vars = {};
    if (tags.length !== 0) vars.tagfilter = tags;
    const query = `query recipeList($tagfilter: [String]) {
      recipeList(tagfilter: $tagfilter) {
        author{name} img title id
      }
    }`;

    const data = await graphQLFetch(query, vars);
    if (data) {
      this.setState({ recipes: data.recipeList });
    }
  }

  async createRecipe(recipe) {
    const query = `mutation createRecipe($recipe: RecipeInputs!){
      createRecipe(recipe: $recipe) {
        id
      }
    }`;

    const data = await graphQLFetch(query, { recipe });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { recipes } = this.state;

    return (
      <div className="site-layout-content">
        <React.Fragment>
          <RecipeFilter />
          <RecipeTable recipes={recipes} />
          <div className="modal-list">
            <RecipeAddModal createRecipe={this.createRecipe} />
          </div>
        </React.Fragment>
      </div>
    );
  }
}
