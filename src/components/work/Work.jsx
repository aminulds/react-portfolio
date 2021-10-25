import { useState } from "react";
import { workData } from "../../data/workData";
import "./work.scss";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1: workData.length - 1):
    setCurrentSlide(currentSlide < workData.length - 1 ? currentSlide + 1: 0)
  };

  return (
    <div className="work" id="work">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {
          workData.map(data => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.description}</p>
                  <div className="previewButton">
                    <a href={data.url}>Preview</a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
          ))
        };
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("left")} />
    </div>
  )
}
