import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL, id, onImgClick }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onImgClick(id)}>
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
