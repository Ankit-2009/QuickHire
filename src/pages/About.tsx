import "../styles/About.css";
import teamLogo from "../assets/About Us/teamLogo.jpg";
import manasImg from "../assets/About Us/Manas.jpg";
import ayushImg from "../assets/About Us/Ayush.jpg";
import vaibhavImg from "../assets/About Us/Vaibhav.jpg";
import piyushImg from "../assets/About Us/Piyush.jpg";
import ankitImg from "../assets/About Us/Ankit.jpg";
import parthImg from "../assets/About Us/Parth.jpg";
import ritvikaImg from "../assets/About Us/Ritvika.jpg";
import lavanyaImg from "../assets/About Us/Lavanya.jpg";
import linkedinLogo from "../assets/About Us/download.png";
import whatsappLogo from "../assets/About Us/whatsapp.webp";

const About = () => {
  return (
    <div id="background">
      {/* Piyush */}
      <header>
        <img src={teamLogo} alt="Team Logo" />
        <h1>CODE COLLAB</h1>
      </header>

      <div className="description">
        <p>
          We are a dedicated team working on QuickHire. Here is more about us.
        </p>
      </div>

      <div className="team">
        <div className="member">
          <img src={manasImg} alt="Member 1 Photo" />
          <h3>Manas</h3>
          <p>Project Lead and Created Navigation Bar</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/manas-sharma-715840322/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 9876543210</div>
            </div>
          </div>
        </div>

        <div className="member">
          <img src={ayushImg} alt="Member 2 Photo" />
          <h3>Ayush</h3>
          <p>Content Writer - Drafted all the website's content.</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ayush-tilekar-a0a14a324/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 1234567890</div>
            </div>
          </div>
        </div>

        <div className="member">
          <img src={vaibhavImg} alt="Member 3 Photo" />
          <h3>Vaibhav</h3>
          <p>Created About Us, Login, and SignUp pages</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/vaibhav-raj-dwivedi-38aba8317/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 9988776655</div>
            </div>
          </div>
        </div>

        <div className="member">
          <img src={piyushImg} alt="Member 4 Photo" />
          <h3>Piyush</h3>
          <p>
            Contributed to the Body, Designed Login page, About us page and Sign
            Up page
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/piyush-kumar-799014326/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 1122334455</div>
            </div>
          </div>
        </div>

        <div className="member">
          <img src={ankitImg} alt="Member 5 Photo" />
          <h3>Ankit</h3>
          <p>
            Designer -<br />
            Overall Designer and Creator of all Logos and helped in various
            sections.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ankit-singh-5738b9328/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 5544332211</div>
            </div>
          </div>
        </div>

        <div className="member">
          <img src={parthImg} alt="Member 6 Photo" />
          <h3>Parth</h3>
          <p>
            Coordinator -<br />
            Contributed to the Body and Coordinate whole Team
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/parth-vijay-0a9427326/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 6677889900</div>
            </div>
          </div>
        </div>

        <div className="member">
          <img src={ritvikaImg} alt="Member 7 Photo" />
          <h3>Ritvika</h3>
          <p>
            Contributed to Footer
            <br />
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/ritvika-singh-arya-374690330/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 8877665544</div>
            </div>
          </div>
        </div>

        <div className="member">
          <img src={lavanyaImg} alt="Member 8 Photo" />
          <h3>Lavanya</h3>
          <p>Contributed to Footer</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/lavanya-nagar-930491325/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <img src={linkedinLogo} alt="LinkedIn Logo" />
            </a>
            <div className="whatsapp">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <div className="whatsapp-number">+91 7766554433</div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-details">
        <h2>
          <u>About Our Project</u>
        </h2>
        <p>
          <span style={{ fontWeight: "bolder" }}>QuickHire</span> is an online
          platform that connects freelancers with clients looking for specific
          projects to be completed. Clients post jobs or projects, and
          freelancers bid on these projects, offering their services at
          competitive rates. The platform covers a wide range of categories,
          such as web development, graphic design, writing, marketing, and more.
          <br />
          <br />
          <span style={{ fontWeight: "bolder" }}>QuickHire</span> facilitates
          project management, payments, and communication between both parties,
          charging a fee or commission for its services. It's popular for
          short-term, remote, and freelance work opportunities.
          <br />
          &copy; CODE COLLAB
        </p>
      </div>
    </div>
  );
};

export default About;
