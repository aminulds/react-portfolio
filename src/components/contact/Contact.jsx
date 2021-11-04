import "./contact.scss";
import { useRef, useState } from 'react';
import { GitHub, LinkedIn } from "@mui/icons-material";
import emailjs from 'emailjs-com';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    // emailjs
    emailjs.sendForm('service_im8tx33', 'template_q4qfe6w', formRef.current, 'user_YWTe0E3A0Dr0xYXIO0lFQ')
      .then((result) => {
          console.log(result.text);
          setMessage(true);
      }, (error) => {
          console.log(error.text);
      });
    
  }
  return (
    <div className="contact" id="contact">
        <div className="left">
            <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
            <h2>Contact</h2>
            <div className="contactInfo">
              <div className="itemContainer">
                <a href="https://github.com/aminulds"><GitHub className="icon"></GitHub></a>
                <a href="https://www.linkedin.com/in/aminulds"><LinkedIn className="icon"></LinkedIn></a>
              </div>
              <span><i class="fab fa-skype"></i>  shaon724256</span>
              <span><i class="fas fa-map-marker-alt"></i>  Natore, BD</span>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="email" placeholder="Email" name="user_email" />
                <textarea placeholder="Message" name="message" ></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
        </div>
    </div>
  )
}
