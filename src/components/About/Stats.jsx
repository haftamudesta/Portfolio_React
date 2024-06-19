import styles from './Stats.module.css';
import { stats } from '../../Data/Data';
import parse from 'html-react-parser';

const Stats = () => {
  return (
    <main className={styles.stats__info}>
        {stats.map(({number,title},index)=>{
            return (
                <div className={styles.stats__info__list} key={index}>
                    <button className={styles.stats__number}>{number}</button>
                    <p className={styles.stats__title}>{parse(title)}</p>
                </div>
            )
        })}
    </main>
  )
}

export default Stats