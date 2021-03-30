import { Component } from 'react';
import axios from 'axios';

import CollectionCardList from '../components/Collection/CollectionCardList';

class Collections extends Component {
  constructor() {
    super();
    this.state = {
      collections: [],
    };
  }

  componentDidMount() {
    axios('/collections').then((result) => {
      this.setState({ collections: result.data });
    });
  }

  render() {
    return <CollectionCardList collections={this.state.collections} />;
  }
}

export default Collections;
