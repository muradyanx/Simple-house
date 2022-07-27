import Article from "../../Components/Article";
import "./style.scss";
import { workers } from "./Workers";
import { pictures } from "./Pictures";
import about6 from "../../assets/about6.jpg";
import { Link } from "react-router-dom";
import   '../../assets/Icons/style.css';
import about5 from '../../assets/about5.jpg'

const About = () => {
  return (
    <section>

      <Article
        title="About Simple House"
        content="This is about page of simple house template.
                             You can modify and use this HTML template for your website. 
                             Total 3 HTML pages included in this template.
                              Header image has a parallax effect."
      />

      <div className="g-container P-workers-block">
        {workers.map((el, index) => {
          return (
            <div className="P-workers" key={index}>
              <div
                className="P-workers-img"
                style={{ backgroundImage: `url('${el.image}')` }}
              ></div>
              <div className="P-workers-info">
                <p className="P-workers-title">{el.title}</p>
                <p className="P-workers-description">{el.description}</p>
                <p className="P-workers-content">{el.content}</p>

                <div className="P-workers-icons">
                  <div className={`${el.twitter} P-icon`}></div>
                  <div className={`${el.instagram}  P-icon`}></div>
                  <div className={`${el.youtube}  P-icon`}></div>
                  <div className={el.facebook? 'icon-facebook': ''}></div>
         
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-image" style={{backgroundImage: `url('${about5}')`}}></div>

      <div className="g-container Pictures">
        {pictures.map((el, index) => {
          return (
            <div key={index} className="P-picture-block">
              <div
                className="P-picture"
                style={{ backgroundImage: `url('${el.image}')` }}
              ></div>
              <p className="P-picture-text">{el.text}</p>
              <button
                className="P-picture-btn"
                style={{ backgroundColor: el.buttonColor }}
              >
                Read More
              </button>
            </div>
          );
        })}
      </div>

      <div className="g-container Restaurant-block">
        <div
          className="Restaurant-picture"
          style={{ backgroundImage: `url('${about6}')` }}
        ></div>
        <div className="Restaurant-info">
          <p className="Restaurant-title">History of our restaurant</p>
          <p className="Restaurant-text">
            Sed ligula risus, interdum aliquet imperdiet sit amet, auctor sit
            amet justo. Maecenas posuere lorem id augue interdum vehicula.
            Praesent sed leo eget libero ultricies congue.
          </p>
          <p className="Restaurant-text">
            Redistributing this template as a downloadable ZIP file on any
            template collection site is strictly prohibited. You will need to
            contact TemplateMo for additional permissions about our templates.
            Thank you.
          </p>
        </div>
      </div>

    </section>
  );
};
export default About;
