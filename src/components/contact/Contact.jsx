import "./contact.scss";
import { useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
        <div className="left">
            <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
            <h2>Contact</h2>
            <div className="contactInfo">
            <span><i class="fab fa-skype"></i>  shaon724256</span>
            <span><i class="fas fa-map-marker-alt"></i>  Natore, BD</span>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
                {message && <span>Thanks, I'll reply ASAP :)</span>}
            </form>
        </div>
    </div>
  )
}
