import { useRef, useState } from "react";
//import emailjs from "emailjs-com"
import emailjs from "@emailjs/browser";
import {motion} from "framer-motion"
import "./Contact.css";
import { MdOutlineMailLock } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_rsnfgpj",
        "template_j65tgje",
        form.current,
        "sA_6JV_BfLXUwtgCj"
      )
  };
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState();

  function validate(e) {
    e.preventDefault();
    const emailValidationRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (userName.length > 0) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("name should not be empty");
      setUserColor("red");
    }

    if (emailValidationRegex.test(email)) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail(
        "Invaild Email! Please use valid Email"
      );
      setEmailColor("red");
    }
    setUserName("");
    setEmail("");
  }

  return (
    <section id="main_contact">
      <h1 className="main_contact-title">Contact Me</h1>
      <div className="contact__options">
        <div className="contact__options-app">
          <motion.article
          whileHover={{
            scale:1.3,
            color:'#f18e12',
              transition:{
                type:'spring',
                dumping:12,
                stiffness:200,
                repeat:Infinity
              }
          }}
           className="email">
            <MdOutlineMailLock />
            <h4>Email</h4>
            <h5>desta451616@hotmail.com</h5>
            <a href="mailto:desta451616@hotmail.com" target="_blank">Send Message</a>
          </motion.article>
          <motion.article 
          whileHover={{
            scale:1.3,
            color:'#f18e12',
              transition:{
                type:'spring',
                dumping:12,
                stiffness:200,
                repeat:Infinity
              }
          }}
          className="messenger">
            <FaFacebookMessenger/>
            <h4>Facebook Messanger</h4>
            <h5>haftamudesta</h5>
            <a href="http://m.me/haftamudesta" target="_blank">Send Message</a>
          </motion.article>
          <motion.article 
          whileHover={{
            scale:1.3,
            color:'#f18e12',
              transition:{
                type:'spring',
                dumping:12,
                stiffness:200,
                repeat:Infinity
              }
          }}
          className="whatsapp">
            <BsWhatsapp />
            <h4>whatsapp</h4>
            <h5>Haftamu Desta</h5>
            <a href="https://api.whatsapp.com/send?phone+2510915574522" target="_blank">Send Message</a>
          </motion.article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="form-contact">
        <input
          type="text"
          placeholder="name"
          name="your_name"
          style={{ borderColor: userColor }}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p className="error">{errorUserName}</p>
        <input
          type="email"
          placeholder="email"
          name="your_email"
          style={{ borderColor: emailColor }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>
        <textarea
          className="form-textarea"
          placeholder="Enter your message here"
          name="message"
          cols="42"
          rows="10"
        ></textarea>
        <button type="submit" className="submit-btn" onClick={validate}>
          <span>Submit</span>
        </button>
      </form>
      </div>
    </section>
  );
};

export default Contact;
