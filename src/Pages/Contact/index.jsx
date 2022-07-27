import Article from "../../Components/Article";
import TextField from "../../Components/TextField";
import "./style.scss";
import { textArr } from "./TextArr";
import { useRef, useState } from 'react';

const Contact = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [emailErr, setEmailErr] = useState('');
const [passwordErr, setPasswordErr] = useState('');

const emailRegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const passwordRef = useRef('');
const emailRef = useRef('');

const validation = () => {   

  if(!emailRegExp.test(email)){ 
    setEmailErr('Email is not correct')
  } else{
    setEmailErr('');
  }
 

  if(password.length < 3 || password.length > 8){ 
    setPasswordErr('Too short or too long')
  }else{
    setPasswordErr('');
  }


  passwordRef.current.value = '';
  emailRef.current.value = '';
  }

  return (
    <section className="g-container">
      <Article
        title="Contact Page"
        content="You may use Simple Contact Form to send email to your inbox. You can modify and use this template for your website. Header image has a parallax effect.
         Total 3 HTML pages included in this template."
      />

      <div className="validation">
        <div className="input-block">
        <p style={{color: 'red'}}>{passwordErr}</p>
          <input type="text" required className="input-item" placeholder="Password"  ref={passwordRef}
            onChange={(evt) => setPassword(evt.target.value)} />
             <p style={{color: 'red'}}>{emailErr}</p>
          <input type="email" required className="input-item" placeholder="Email" ref={emailRef}
            onChange={(evt) => setEmail(evt.target.value)}/>
          <textarea
            type="text"
            className="input-item textarea"
            placeholder="Message"
          ></textarea>
          <div className="button">
            <button onClick={validation}>Send</button>
          </div>
       </div>

        <div className="text-block">
          <p className="title">Our Address</p>
          <p>
            180 Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus 10550
          </p>
          <div>
          <div className="icon">
            <div className="icon-phone icn-space"></div>
            <span className="icon-space">8O O9O O11O</span>
          </div>
          <div className="icon">
            <div className="icon-letter icn-space"></div>
            <span  className="icon-space">info@company.com</span>
          </div>
          </div>
          <div className="space">
            <div className="icon-facebook i-space"></div>
            <div className="icon-twitter i-space"></div>
            <div className="icon-instagram i-space"></div>
          </div>
        </div>
      </div>

    <div className="map">
     
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1563321.8003584773!2d43.91948082784217!3d40.06731676432523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40155684e773bac7%3A0xd0b4757aeb822d23!2z0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1658412768593!5m2!1sru!2s" className='mapp' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="Faqs-block">
        <p className="F-title">FAQs</p>
        <div className="F-text">This section comes with Accordion tabs for different questions and answers 
        about Simple House HTML CSS template. Thank you. #666</div>
    
      <div>
        {
            
            textArr.map((el, index) => {
                return <div key={index}>
                    <TextField title={el.title} content={el.content} />
                </div>
            })
        }
      </div>
      </div>

    </section>
  );
};

export default Contact;
