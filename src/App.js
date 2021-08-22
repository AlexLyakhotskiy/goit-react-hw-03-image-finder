import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import styles from './App.module.scss';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = { searchQuery: '' };

  onAddQuery = ({ searchQuery }) => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className={styles.appContainer}>
        <Searchbar onSubmit={this.onAddQuery} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
