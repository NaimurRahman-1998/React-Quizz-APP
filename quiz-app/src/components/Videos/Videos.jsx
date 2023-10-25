import SingleVideo from "../SingleVideo/SingleVideo";
import styles from './Videos.module.css'

const Videos = () => {
    const array = [0,1,2,3,4,5,6,7,8]
    return (
        <div className={styles.videos}>
          {
            array.map(num=> <SingleVideo key={num}/>)
          }
        </div>
    );
};

export default Videos;