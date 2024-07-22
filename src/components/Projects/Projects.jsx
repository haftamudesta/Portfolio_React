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
          Do you want to see the details of the Project?<br /> 
          That is cool! <br />
          Just click  the <strong className="strong_phrase">check in GitHub</strong>  link <br /> and clone  it from my GitHub page.  
        </h1>
      </div>
    );
  };
  return (
    <>
      <section id="main_projects">
        <h1 className="ml-10 my_projects">Projects</h1>
        <p className="text-lg">
          While learning at microvers I have implemented the following projects. for farther information visit my <a  href="https://github.com/haftamudesta" className="text-sm text-sky-400">GitHub page</a>
        </p>
        <div className="projects-tap">
          <ul>
            <li
              className={content === 1 ? "active_tab" : "border"}
              onClick={() => updatContent(1)}
            >
              Mern Stack
              
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
              React with Redux
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
          <div className="image__cards">
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/profile_page.PNG' alt="" className="snapped__image"/>
            
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/Sign_In.PNG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/BlogApp_MERN" className="">Check in GitHub</a>
            </button>
            </div>
            <div>{crossClass()}</div>
          </div>
            <div className="image__cards">
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/add_book.PNG' alt="" className="snapped__image"/>
              
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/book_main.PNG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="ttps://github.com/haftamudesta/MERN_BookStore" className="">Check in GitHub</a>
            </button>
            </div>
            </div>
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
            <a href="https://github.com/haftamudesta/capstone-project" className="">Check in GitHub</a>
            </button>
            </div>
            <div>{crossClass()}</div>
          </div>
            <div className="image__cards">
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/portfolio.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/portfolio-form-validation" className="">Check in GitHub</a>
            </button> 
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/portfolio_mob.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/portfolio-form-validation" className="">Check in GitHub</a>
            </button>
            </div>
            </div>

            <div className="image__cards">
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/awesomeBooks.JPG' alt="" className="snapped__image"/>
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/awesomeBooks_list.JPG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/AwesomeBooks" className="">Check in GitHub</a>
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
            <a href="https://github.com/haftamudesta/React-Capstone-Project" className="">Check in GitHub</a>
            </button> 
            </div>
            <div>{crossClass()}</div>
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
            <a href="https://github.com/haftamudesta/BookStore" className="">Check in GitHub</a>
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
            <a href="https://github.com/haftamudesta/Math-magicinsTest" className="">Check in GitHub</a>
            </button>
            </div>
            </div>
          </div>
        <div className={content === 4 ? "show_tap_content" : "tap_content"}>
          <div className="image__cards">
          <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/expensses_page.PNG' alt="" className="snapped__image"/>
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/Categories_page.PNG' alt="" className="snapped__image"/>
            </div>
            
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/log_in_page.PNG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/Budget_App" className="">Check in GitHub</a>
            </button>
            </div>
            <div>{crossClass()}</div>
          </div>
          <div className="image__cards">
          <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/recipe_log_in.PNG' alt="" className="snapped__image"/>
            </div>
            <div 
            className="images__card"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/recipe_home.PNG' alt="" className="snapped__image"/>
            </div>
            <div 
            className="images__card margin__bottom"
            onMouseEnter={handleMouseenter}
            onMouseLeave={handleMouseLeave}
            >
            <img src= './images/recipe_foods.PNG' alt="" className="snapped__image"/>
            <button className="github__link">
            <a href="https://github.com/haftamudesta/Recipe_App" className="">Check in GitHub</a>
            </button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
