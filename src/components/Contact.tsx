import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Get in touch</h4>
            <p>
              <a
                href="mailto:mihirsolanki2704@gmail.com"
                data-cursor="disable"
              >
                mihirsolanki2704@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+447901230268"
                data-cursor="disable"
              >
                +44 7901 230268
              </a>
            </p>
            <p>Belfast, Northern Ireland, UK</p>
            <h4>Education</h4>
            <p>
              MSc Applied Cyber Security, Queen's University Belfast — 2025–2026
            </p>
            <p>
              B.Tech Information Technology, Silver Oak University — 2022–2025
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mihirbs"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mihir-brijesh-solanki-1a7a4a228"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://mihirbs.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by{" "}
              <span>Mihir Solanki</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
