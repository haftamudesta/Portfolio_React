import styles from "./About.module.css"
import cv from "../../assets/Resume.pdf"
import { FaDownload } from "react-icons/fa";
import PersonalInfo from './PersonalInfo';
import Stats from './Stats';
import {motion} from "framer-motion"

const About = () => {
  return (
    <main className={styles.about__section} id="about">
        <section className={styles.about__me}>
            <motion.h1 
            initial={{
              opacity:0,
              x:-100,
            }}
            whileInView={{
              opacity:1,
              x:0,
              color:'#f18e12',
              transition:{
                type:'spring',
                dumping:12,
                stiffness:200,
                repeat:Infinity
              }
            }}
          
            className={styles.section__title}>
              About <span>Me</span>
            </motion.h1>
            <div className={styles.about__container}>
            <div className={styles.about__info}>
            <h3 className={styles.about__subtitle}>Personal Information</h3>
            <PersonalInfo />
            <a href={cv} download='' className={styles.download_button}>
                Download CV{' '} <span className={styles.butto__icon}><FaDownload/></span>
            </a>
            </div>
            <div className={styles.about__stats}>
            <Stats />
            </div>
            </div>
        </section>
    </main>
  )
}

export default About