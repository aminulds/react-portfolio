import "./intro.scss"
import {init} from 'ityped';
import { useEffect, useRef } from "react";

export default function Intro() {
  const nameRef = useRef();
  useEffect(() => {
    init(nameRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['HTML CSS JavaScript', 'Git Bootstrap Sass', 'React MUI']
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Aminul Islam</h1>
          <h3>Frontend Developer</h3>
          <h5>Skill: <span ref={nameRef}></span></h5>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
