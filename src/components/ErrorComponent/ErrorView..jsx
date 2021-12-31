
import errorImage from '../../images/error.svg.png';
import styles from './ErrorView.module.css';

function ErrorView({ message }) {
  return (
    <div role="alert" className={styles.wrapper}>
      <img src={errorImage} width="650" alt="sadcat" className={styles.img} />
      <p text={message} className={styles.text}>
        {message}
      </p>
    </div>
  );
}



export default ErrorView;