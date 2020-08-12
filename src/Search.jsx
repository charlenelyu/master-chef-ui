import React from 'react';
import SelectAsync from 'react-select/lib/Async'; // eslint-disable-line
import { withRouter } from 'react-router-dom';

import graphQLFetch from './graphQLFetch.js';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeSelection = this.onChangeSelection.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
  }

  onChangeSelection({ value }) {
    const { history } = this.props;
    history.push(`/view/${value}`);
  }

  async loadOptions(term) {
    if (term.length < 3) return [];
    const query = `query recipeList($search: String) {
      recipeList(search: $search) {
        id title
      }
    }`;

    const { showError } = this.props;
    const data = await graphQLFetch(query, { search: term }, showError);
    return data.recipeList.map(recipe => ({
      label: `#${recipe.id}: ${recipe.title}`, value: recipe.id,
    }));
  }

  render() {
    return (
      <SelectAsync
        instanceId="search-select"
        value=""
        loadOptions={this.loadOptions}
        filterOption={() => true}
        onChange={this.onChangeSelection}
        components={{ DropdownIndicator: null }}
      />
    );
  }
}

export default withRouter(Search);
