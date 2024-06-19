import { Link } from "react-scroll";
import { AiFillUnlock } from "react-icons/ai";
import {motion} from "framer-motion"
import "./Introduction.css";
import photo from "../../assets/haftamu.jpg";
import { useTypewriter,Cursor } from "react-simple-typewriter";


const Introduction = () => {
  const [typeEffect]=useTypewriter({
    words:['Full Stack Devloper 💻','Electrical Engineer 🚀','Programmer 🔢'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40,
})
  return (
    <main id="introduction">
      <section className="introduction_content">
        <motion.div 
        initial={{
          opacity:0,
          x:-100,
        }}
        whileInView={{
          opacity:1,
          x:0
        }}
        transition={{
          delay:0.2,
          duration:1,
          ease:'easeIn',
          x:{type:'spring',stiffness:60},
          opacity:{duration:1},
          type:'spring',
          stiffness:400,
        }}
        whileHover={{
          scale:1.4,
          color:'#f8e112'
        }}
        
        className="introduction_contents-des">
          <p className="hello">Hello,</p>
          <p className="introduction-text">
            <span>I &apos; am</span> <span className="my-name">Haftamu</span>
            <br /> <span className="web-dev">I am <span className="animated__profession">{typeEffect}</span></span>
          </p>
          <p className="introduction-description">
            I am a skilled junior web developer.
            <br /> If you have any project to be implemented you can contact me.
          </p>
          <Link>
            <motion.button className="btn"
            whileTap={{
              rotate:"90deg",
              color:'rgb(106, 13, 192)'
            }}
            >
              <AiFillUnlock className="icon" />
              Hire Me
            </motion.button>
          </Link>
        </motion.div>
        <div className="My__image">
        <motion.img 
        initial={{
          opacity:0,
          x:-100,
        }}
        whileInView={{
          opacity:1,
          x:0,
        }}
        transition={{
          delay:0.2,
          duration:1,
          ease:'easeIn',
          x:{type:'spring',stiffness:60},
          opacity:{duration:1}
        }}
        whileHover={{
          scale:0.5
        }}
        src={photo} alt="Photo" className="image__haftamu" />
      </div>

        <div className="back__ground-color"></div>
      </section>
    </main>
  );
};

export default Introduction;
