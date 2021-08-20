import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = { searchQuery: '' };

  onAddQuery = ({ searchQuery }) => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onAddQuery} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
