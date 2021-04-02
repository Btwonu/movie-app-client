import { Component } from 'react';
import axios from 'axios';

// Components
import CollectionCardList from '../../components/Collection/CollectionCardList';
import LoadingSpinner from '../../components/Layout/LoadingSpinner';

class Collections extends Component {
  constructor() {
    super();
    this.state = {
      collections: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios('/collections').then((result) => {
      this.setState({ collections: result.data });
      this.setState({ isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />;
    } else {
      return <CollectionCardList collections={this.state.collections} />;
    }
  }
}

export default Collections;
