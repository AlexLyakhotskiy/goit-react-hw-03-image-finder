import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ webformatURL, id, onImgClick, alt }) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={() => onImgClick(id)}>
      <img
        src={webformatURL}
        alt={alt}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
