import React from 'react';
import URLSearchParams from 'url-search-params';
import { withRouter } from 'react-router-dom';
import { Collapse, Select, Row, Col, Button } from 'antd';

import { CaretRightOutlined } from '@ant-design/icons';
import './styles/antStyle.less';

const { Panel } = Collapse;

function TagSelector({ name, addTag, init }) {
  let tags;
  switch (name) {
    case 'cuisine':
      tags = ['american', 'asian', 'indian', 'italian', 'mexican', 'thai', 'vietnamese'];
      break;
    case 'meal':
      tags = ['breakfast', 'brunch', 'lunch', 'dinner', 'dessert'];
      break;
    case 'category':
      tags = ['meat', 'poultry', 'seafood', 'grains', 'pizza', 'burger', 'sandwiches', 'vegetables', 'sweets'];
      break;
    default:
      tags = [];
  }

  const options = tags.map(item => ({ value: item }));

  function handleChange(value) {
    addTag(name, value);
  }

  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="select tags"
      onChange={handleChange}
      options={options}
      defaultValue={init}
    />
  );
}

class RecipeFilter extends React.Component {
  constructor({ location: { search } }) {
    super();
    const params = new URLSearchParams(search);
    this.state = {
      // cuisine: [],
      // meal: [],
      // category: [],
      cuisine: params.get('cuisine') ? params.get('cuisine').split(',') : [],
      meal: params.get('meal') ? params.get('meal').split(',') : [],
      category: params.get('category') ? params.get('category').split(',') : [],
    };
    // this.showOriginalFilter = this.showOriginalFilter.bind(this);
    this.addTag = this.addTag.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   console.log('filter did update');
  //   const { location: { search: prevSearch } } = prevProps;
  //   const { location: { search } } = this.props;
  //   if (prevSearch !== search) {
  //     this.showOriginalFilter();
  //   }
  // }

  // showOriginalFilter() {
  //   console.log('showOriginal');
  //   const { location: { search } } = this.props;
  //   console.log(this.props);
  //   const params = new URLSearchParams(search);
  //   this.setState({
  //     cuisine: params.get('cuisine') ? params.get('cuisine').split(',') : [],
  //     meal: params.get('meal') ? params.get('meal').split(',') : [],
  //     category: params.get('category') ? params.get('category').split(',') : [],
  //   });
  //   console.log(this.state);
  // }

  addTag(name, values) {
    this.setState({ [name]: values });
  }

  applyFilter() {
    const { cuisine, meal, category } = this.state;
    const { history } = this.props;

    const params = new URLSearchParams();
    if (cuisine.length !== 0) params.set('cuisine', cuisine);
    if (meal.length !== 0) params.set('meal', meal);
    if (category.length !== 0) params.set('category', category);

    const search = params.toString() ? `?${params.toString()}` : '';
    history.push({ pathname: '/recipe', search });
  }

  render() {
    const { cuisine, meal, category } = this.state;
    return (
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="site-collapse-custom-collapse"
        style={{ marginLeft: 50, marginRight: 50, marginBottom: 20 }}
      >
        <Panel header="Filter Recipe by Tag" key="1" className="site-collapse-custom-panel">
          <Row gutter={[48, 8]}>
            <Col span={6}>
              Cuisine:
              {' '}
              <TagSelector name="cuisine" addTag={this.addTag} init={cuisine} />
            </Col>
            <Col span={6}>
              Meal:
              {' '}
              <TagSelector name="meal" addTag={this.addTag} init={meal} />
            </Col>
            <Col span={6}>
              Category:
              {' '}
              <TagSelector name="category" addTag={this.addTag} init={category} />
            </Col>
            <Col span={6}>
              <Button onClick={this.applyFilter}>Apply</Button>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    );
  }
}

export default withRouter(RecipeFilter);
