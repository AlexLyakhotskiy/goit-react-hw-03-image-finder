import Loader from 'react-loader-spinner';

import styles from './LoaderContainer.module.scss';

const LoaderContainer = () => {
  return (
    <div className={styles.container}>
      <Loader
        type="ThreeDots"
        color="#6e7b80"
        height={80}
        width={80}
        //   timeout={3000}
      />
    </div>
  );
};

export default LoaderContainer;
