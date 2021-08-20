import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';
import LoaderContainer from '../LoaderContainer';
import Button from './Button/Button';
import Modal from '../Modal/Modal';

import api from '../../utils/apiService';

import styles from './ImageGallery.module.scss';

class ImageGallery extends Component {
  static propTypes = {
    searchQuery: PropTypes.string.isRequired,
  };

  state = {
    imgArr: [],
    imgInModal: '',
    pending: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.searchQuery;
    const nextQuery = this.props.searchQuery;
    const prevImgArr = prevState.imgArr;
    const nextImgArr = this.state.imgArr;

    if (prevQuery !== nextQuery) {
      this.setState({ pending: true, imgArr: [] });
      api.searchQuery = nextQuery;
      api.resetPage();
      this.saveImages();
    }

    if (prevImgArr.length && prevImgArr !== nextImgArr) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  closeModal = () => {
    this.setState({ imgInModal: '' });
  };

  onBtnLoadMoreClick = () => {
    api.incrementPage();
    this.saveImages();
  };

  onImgClick = id => {
    const { imgArr } = this.state;
    const img = imgArr.find(e => e.id === id).largeImageURL;
    this.setState({ imgInModal: img });
  };

  saveImages() {
    this.setState({ pending: true });
    api
      .fetchArticles()
      .then(({ hits }) =>
        this.setState(({ imgArr }) => ({
          imgArr: [...imgArr, ...hits],
        })),
      )
      .catch(error => toast.error(`${error}`))
      .finally(this.setState({ pending: false }));
  }

  render() {
    const { imgArr, imgInModal, pending } = this.state;
    return (
      <>
        <ul className={styles.ImageGallery}>
          {imgArr.map(({ id, webformatURL }) => (
            <ImageGalleryItem
              webformatURL={webformatURL}
              key={id}
              id={id}
              onImgClick={this.onImgClick}
            />
          ))}
        </ul>
        {imgArr.length && !pending ? (
          <Button onBtnLoadMoreClick={this.onBtnLoadMoreClick} />
        ) : (
          ''
        )}
        {pending && <LoaderContainer />}

        {imgInModal && (
          <Modal closeModal={this.closeModal}>
            <img src={imgInModal} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
