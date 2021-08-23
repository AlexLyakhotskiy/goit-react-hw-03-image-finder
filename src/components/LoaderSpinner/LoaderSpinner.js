import Loader from 'react-loader-spinner';

import styles from './LoaderSpinner.module.scss';

const LoaderSpinner = () => {
  return (
    <div className={styles.container}>
      <Loader type="ThreeDots" color="#6e7b80" height={80} width={80} />
    </div>
  );
};

export default LoaderSpinner;
