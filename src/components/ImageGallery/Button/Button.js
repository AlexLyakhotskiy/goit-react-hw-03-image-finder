import styles from './Button.module.scss';

const Button = ({ onBtnLoadMoreClick }) => {
  return (
    <button
      onClick={onBtnLoadMoreClick}
      type="button"
      className={styles.button}
    >
      Load more
    </button>
  );
};

export default Button;
