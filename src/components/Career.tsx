import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MSc Applied Cyber Security</h4>
                <h5>Queen's University Belfast, UK</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Russell Group university. Modules include Penetration Testing &
              Ethical Hacking (ELE8072), Software Assurance (ELE8094), and CyberAI /
              AI Security (ELE8100) — covering network security, cryptography,
              secure SDLC, STRIDE threat modelling, adversarial ML, and
              vulnerability prioritisation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CompTIA Security+ (ce)</h4>
                <h5>+ Cisco Networking Academy certs</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Earned CompTIA Security+ (SY0-701) certification, plus three Cisco
              Networking Academy certs: Ethical Hacker, Network Defense, and
              Endpoint Security. 8+ industry certifications total spanning
              offensive and defensive security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>DIPC Software · Ahmedabad, India</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Jul 2024 – Dec 2024. Engineered server-side logic and RESTful APIs
              in a MERN stack environment. Implemented secure authentication and
              RBAC endpoints, designed API integrations with input validation and
              parameterised queries to mitigate injection vulnerabilities, and
              conducted peer code reviews within an Agile team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Information Technology</h4>
                <h5>Silver Oak University, India</h5>
              </div>
              <h3>2022–25</h3>
            </div>
            <p>
              Final CGPA: 8.76 / 10. Preceded by a Diploma in Information
              Technology from the same university (2019–2022, CGPA 7.35 / 10).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
