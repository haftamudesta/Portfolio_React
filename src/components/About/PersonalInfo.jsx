import styles from "./PersonalInfo.module.css"
import {personalInformation} from '../../Data/Data'
import parse from 'html-react-parser';

const PersonalInfo = () => {
  return (
    <main className={styles.personal__information}>
        {personalInformation.map(({title,description},index)=>{
            return (
                <li className={styles.information__item} key={index}>
                    <span className={styles.info__title}>{title}:</span>
                    <span className={styles.info__description}>{parse(description)}</span>
                </li>
            )
        })}
    </main>
  )
}

export default PersonalInfo