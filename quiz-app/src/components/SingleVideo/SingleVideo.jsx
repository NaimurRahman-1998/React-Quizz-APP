import styles from './SingleVideo.module.css'
import images3 from '../../assets/3.jpg'
const SingleVideo = () => {
    return (
        <a href="quiz.html"
            ><div className={styles.video}>
              <img src={images3} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className={styles.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
    );
};

export default SingleVideo;