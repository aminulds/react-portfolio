import { testimonialData } from "../../data/testimonialData"
import "./testimonial.scss"


export default function Testimonial() {
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {/* Show Data */}
        {testimonialData.map(data => (
        <div className={data.featured ? "card featured": "card"}>
          <div className="top">
            <img className="left" src="assets/right-arrow.png" alt="" />
            <img className="user" src={data.img} alt="" />
            <img className="right" src={data.icon} alt="" />
          </div>
          <div className="center">
            {data.desc}
          </div>
          <div className="bottom">
            <h3>{data.name}</h3>
            <h4>{data.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
