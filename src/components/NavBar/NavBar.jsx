import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-scroll";
import { AiOutlineMessage } from "react-icons/ai";
import {useDispatch } from "react-redux";
import { FaMoon } from "react-icons/fa";
import { toggleTheme } from "../../redux/theme/ThemeSlice";
import {motion,useScroll,useSpring,useTransform} from "framer-motion"

const NavBar = () => {
  const dispatch=useDispatch();
  const {scrollYProgress}=useScroll();
  const scaleX=useSpring(scrollYProgress)
  const background=useTransform(scrollYProgress,
    [0,1],["rgb(185,12,245)","rgb(1,245,13)"])

  const [showMenu,setShowMenu]=useState(false);
  const fullName="Haftamu Desta Yemata";
  const nameVariant={
    hidden:{
      opacity:0,
    },
    visible:(i=1)=>({
      opacity:1,
      transition:{staggerChildren: 0.12,
        delayChildren: 0.4+i}
    }
    )
  }

  const nameVariantChild={
    visible:{
      opacity:1,
      y:0,
      x:0,
      transition:{
      type:'spring',
      dumping:12,
      stiffness:200,
      repeat:Infinity
      }
    },
    hidden:{
      opacity:0,
      y:-20,
      x:-20,
      transition:{
      type:'spring',
      dumping:12,
      stiffness:200,
      }
    }
  }
  function handleClick() {
    document
      .getElementById("main_contact")
      .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <nav className="container">
        
        <motion.div 
        variants={nameVariant}
        initial='hidden'
        animate='visible'
        className="name">
          {fullName.split(" ").map((name,index)=>(
          <motion.span 
            variants={nameVariantChild}
            style={{marginRight:'5px'}}
            key={index}>
              {name}
            </motion.span>
          ))}
        </motion.div>
        
        <div className={`${showMenu?'nav__menu show__menu':'nav__menu'}`}>
          <Link
            activeClass="active"
            to="introduction"
            spy="true"
            smooth="true"
            offset={-100}
            duration={500}
            className="menu-items"
            onClick={()=>setShowMenu(!showMenu)}
          >
             Home
            
          </Link>
          <Link
            activeClass="active"
            to="skils"
            spy="true"
            smooth="true"
            offset={-50}
            duration={500}
            className="menu-items"
            onClick={()=>setShowMenu(!showMenu)}
          >
            About
            
          </Link>
          <Link
            activeClass="active"
            to="main_projects"
            spy="true"
            smooth="true"
            offset={-50}
            duration={500}
            className="menu-items"
            onClick={()=>setShowMenu(!showMenu)}
          >
            Portfolio
            
          </Link>
          <Link
            activeClass="active"
            to="main_projects"
            spy="true"
            smooth="true"
            offset={-50}
            duration={500}
            className="menu-items"
            onClick={()=>setShowMenu(!showMenu)}
          >
            Clients
          </Link>
        </div>
        <div className=  {`${showMenu?'nav__toggle animate__togle':'nav__toggle'}`} 
        onClick={()=>setShowMenu(!showMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>




        <div className="theme_contact">
           <div className="theme_selector">
             <button onClick={()=>dispatch(toggleTheme())}>
                <FaMoon />
                <p>change color</p>
             </button>
            </div>
            <div className="contact-me">
               <AiOutlineMessage className="message-icon" />
              <button onClick={handleClick}>Contact Me</button>
             </div>
        </div>
        

        
        
        
        
      </nav>
      <motion.div 
      style={{
        //scaleX:scrollYProgress,
        scaleX,
        transformOrigin:"left",
        background,
        position:"fixed",
        width:"100%",
        height:"20px",
      }}
      />
    </>
  );
};

export default NavBar;
