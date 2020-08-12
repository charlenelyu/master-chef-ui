import React from 'react';
import { Select } from 'antd';
import { withRouter } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js';

const { Option } = Select;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      value: [],
    };
    this.onChangeSelection = this.onChangeSelection.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
  }

  onChangeSelection(value) {
    const { history } = this.props;
    history.push(`/view/${value}`);
  }

  // eslint-disable-next-line consistent-return
  async loadOptions(term) {
    if (term.length < 3) return [];
    const query = `query recipeList($search: String) {
      recipeList(search: $search) {
        id title
      }
    }`;

    const { showError } = this.props;
    const data = await graphQLFetch(query, { search: term }, showError);
    const recipes = data.recipeList.map(recipe => ({
      text: `#${recipe.id}: ${recipe.title}`, value: recipe.id,
    }));
    this.setState({
      recipes,
    });
  }

  render() {
    const { recipes, value } = this.state;

    return (
      <Select
        mode="multiple"
        value={value}
        placeholder="Search by Title"
        filterOption={() => true}
        onSearch={this.loadOptions}
        onChange={this.onChangeSelection}
        style={{ width: '100%', marginTop: 15 }}
      >
        {recipes.map(recipe => (
          <Option key={recipe.value}>{recipe.text}</Option>
        ))}
      </Select>
    );
  }
}

export default withRouter(Search);
