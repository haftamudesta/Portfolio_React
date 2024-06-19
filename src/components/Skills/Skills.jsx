import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "../../Data/Data.json";
import "./Skills.css";
import image1 from "../../assets/uiux.png";
import image2 from "../../images/awesomeBooks.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrows(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", }}
      onClick={onClick}
    />
  );
}

const Skils = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  return (
    
    <section id="skils">
     
      <div className="skils__header">My <span className="skills__span">Skills</span></div>
      
        <div className="main_skils">
          <div className="main__skills-sliders">
        <Slider {...settings}>
          {Data?.skills?.map((item, index) => (
            <div key={index} className="main_skills-card">
              <div className="main_skills-image">
                <img src={item.src} alt="images" className="images" />
              </div>
              <div className="main_skills-title">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
          </Slider>
        </div>
        </div>
    </section>
  );
};

export default Skils;
