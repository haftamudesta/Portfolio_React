import { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [content, setContent] = useState(1);
  const [ishovering, setIsHovering] = useState(false);
  const updatContent = (id) => {
    setContent(id);
  };

  const handleMouseenter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const crossClass = () => {
    return (
      <div className={ishovering ? "hovering" : "hidden"}>
        <h1 className="popup__window">
          do you want to see the details of the Project?<br /> 
          That is cool! <br />
          just click  the <strong className="strong_phrase">look in github</strong>  link below <br /> and clone  it from my github.  

        </h1>
      </div>
    );
  };
  return (
    <>
      <section id="main_projects">
        <h1 className="my_projects">Projects</h1>
        <p className="my_projects-des">
          while learning at microvers I have implemented the following projects
        </p>
        <div className="projects-tap">
          <ul>
            <li
              className={content === 1 ? "active_tab" : "border"}
              onClick={() => updatContent(1)}
            >
              HTML and CSS
              
            </li>
            <li
              className={content === 2 ? "active_tab" : "border"}
              onClick={() => updatContent(2)}
            >
              JavaScript
            </li>
            <li
              className={content === 3 ? "active_tab" : "border"}
              onClick={() => updatContent(3)}
            >
              React with redux
            </li>
            <li
              className={content === 4 ? "active_tab" : "border"}
              onClick={() => updatContent(4)}
            >
              Ruby On Rails
            </li>
          </ul>
          <div
            className={content === 1 ? "show_tap_content" : "tap_content"}
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
          >
            <h1>html and css projects</h1>
          </div>
          <div 
          className={content === 2 ? "show_tap_content" : "tap_content"}
          >

          <div className="image__cards">
          <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/capstoneJavascript.JPG' alt="" className="snapped__image"/>
            
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/capstone_javascript_mob.jpg' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/capstone-project" className="">Look in GitHub</a>
            </button>
            </div>
          </div>
            <div className="image__cards">
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/portfolio.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/portfolio-form-validation" className="">Look in GitHub</a>
            </button>
             <div>{crossClass()}</div> 
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/portfolio_mob.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/portfolio-form-validation" className="">Look in GitHub</a>
            </button>
            {/* <div>{crossClass()}</div> */}
            </div>
            </div>
            <div className="image__cards">
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/awesomeBooks.JPG' alt="" className="snapped__image"/>
            </div><div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/awesomeBooks_list.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/AwesomeBooks" className="">Look in GitHub</a>
            </button>
            </div>
            </div>
           
          </div>
          <div className={content === 3 ? "show_tap_content" : "tap_content"}>

          <div className="image__cards">
          <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/reactCapstone.JPG' alt="" className="snapped__image"/>
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/reactCapstone_mobile.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/React-Capstone-Project" className="">Look in GitHub</a>
            </button>
            </div>
          </div>
          <div className="image__cards">
          <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/bookstore.JPG' alt="" className="snapped__image"/>
            </div>
            <div 
            className="images__card margin__bottom"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/bookstore_home.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/BookStore" className="">Look in GitHub</a>
            </button>
            </div>
          </div>
            <div className="image__cards">
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/math_mag.JPG' alt="" className="snapped__image"/>
            
            </div>
            <div 
            className="images__card margin__bottom"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/math_mag_home.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/Math-magicinsTest" className="">Look in GitHub</a>
            </button>
            </div>
            </div>
          </div>
          <div className={content === 4 ? "show_tap_content" : "tap_content"}>
            <h1>ruby on rails</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
