import "../styles/Login.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div id="nav_space"></div>

      <div id="first">
        <div className="vid">
          <video src="/vd1.mp4" autoPlay loop muted></video>
        </div>
        <div id="mask1" className="blur">
          <div id="cont1">
            <h1>
              Hire the best <br />
              <span style={{ color: "yellowgreen" }}>freelancer for any</span>
              <br />
              job, Online.
            </h1>
            <br />
            <ul>
              <li>Fastest growing freelance marketplace</li>
              <li>Any job you can possibly think of</li>
              <li>Save up to 90% & get quotes for free</li>
              <li>Pay only when you're 100% happy</li>
            </ul>
            <input type="button" value="Hire a freelancer" className="box" />
            <br />
            <input
              type="button"
              value="Earn money freelancing"
              className="box"
            />
            <br />
          </div>
        </div>
      </div>

      <div className="slider">
        <div
          className="bar"
          style={
            {
              "--width": "100px",
              "--height": "60px",
              "--quantity": "9",
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div
              className="item"
              style={{ "--position": "1" } as React.CSSProperties}
            >
              <img src="/Bar Icons/adobe-logo-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "2" } as React.CSSProperties}
            >
              <img src="/Bar Icons/airbus-logo2-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "3" } as React.CSSProperties}
            >
              <img src="/Bar Icons/deloitte-logo2-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "4" } as React.CSSProperties}
            >
              <img
                src="/Bar Icons/facebook-corporate-logo2-darkmode.png"
                alt=""
              />
            </div>
            <div
              className="item"
              style={{ "--position": "5" } as React.CSSProperties}
            >
              <img src="/Bar Icons/fujitsu-logo-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "6" } as React.CSSProperties}
            >
              <img src="/Bar Icons/google-logo-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "7" } as React.CSSProperties}
            >
              <img src="/Bar Icons/ibm-logo2-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "8" } as React.CSSProperties}
            >
              <img src="/Bar Icons/nasa-logo-v4.webp" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "9" } as React.CSSProperties}
            >
              <img src="/Bar Icons/telstra-logo-darkmode-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="second">
        <div className="vid">
          <video src="/vd2.mp4" autoPlay loop muted></video>
        </div>

        <h1>
          <span style={{ color: "rgb(165, 255, 47)" }}>Make it real</span>
          <br />
          with QuickHire
        </h1>

        <img src="/logo.png" alt="QuickHire" />

        <div className="cont2">
          <div className="para">
            <h2 className="t1">The Best Talent</h2>
            Discover reliable professionals by <br />
            exploring their portfolios and <br />
            immersing yourself in the feedback <br />
            shared on their profiles.
          </div>

          <div className="para">
            <h2 className="t1">Fast bids</h2>
            Get quick, no-obligation quotes from <br />
            skilled freelancers. 80% of jobs <br />
            receive bids within 60 seconds. Your <br />
            idea is just moments from reality.
          </div>

          <div className="para">
            <h2 className="t1">Quality work</h2>
            With QuickHire's talent pool of over <br />
            60 million professionals at your <br />
            fingertips, you'll find quality talent to <br />
            get what you need done.
          </div>

          <div className="para">
            <h2 className="t1">BE in control</h2>
            Stay in the loop while on the move. <br />
            Chat with your freelancers and get <br />
            real time updates with our mobile <br />
            app. Anytime, anywhere.
          </div>

          <div id="get_started">
            <h2>
              Make your dreams a reality.
              <br />
            </h2>
            <strong>
              <a href="">Get Started Now</a>
            </strong>
          </div>
        </div>
      </div>

      <div className="imagep">
        <div className="item_img imjpg1">
          <img src="/img1/img1_1.jpg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg2">
          <img src="/img1/img1_2.jpg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg3">
          <img src="/img1/img1_3.jpeg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg4">
          <img src="/img1/img1_4.jpeg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg5">
          <img src="/img1/img1_5.jpg" className="imgh" alt="" />
        </div>
      </div>

      <div id="third">
        <div className="vid">
          <video id="vid3" src="/vd3.mp4" loop autoPlay muted></video>
        </div>

        <h1>
          <span style={{ color: "rgb(165, 255, 47)" }}>Tap into a</span>
          <br />
          global talent network
        </h1>

        <div className="cont3">
          <div className="para">
            <h2 className="t1">Post Your Job</h2>
            It's free and easy! Get lots of <br />
            competitive bids that suit your <br />
            budget in minutes. Start making <br />
            your dreams reality.
          </div>

          <div className="para">
            <h2 className="t1">Choose Freelancers</h2>
            No job is too big or complex. We've <br />
            got freelancers for jobs of any size <br />
            or budget, across 2700+ skills. Let <br />
            our talent bring your ideas to life.
          </div>

          <div className="para">
            <h2 className="t1">Pay Safely</h2>
            Only pay for work when you are <br />
            100% satisfied with the outcome. <br />
            Our milestone payment system <br />
            protects you every step of the way.
          </div>

          <div className="para">
            <h2 className="t1">We're Here To Help</h2>
            Your time is precious. Let our team <br />
            of expert recruiters and co-pilots <br />
            save you time finding talent, even <br />
            managing your job if needed.
          </div>

          <div id="create_future">
            <h2>
              Create the future.
              <br />
            </h2>
            <strong>
              <a href="">Get Started Now</a>
            </strong>
          </div>
        </div>
      </div>

      <div className="slider" style={{ backgroundColor: "black" }}>
        <div
          className="bar"
          style={
            {
              "--width": "120px",
              "--height": "45px",
              "--quantity": "9",
            } as React.CSSProperties
          }
        >
          <div className="list">
            <div
              className="item"
              style={{ "--position": "1" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/bloomberg-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "2" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/business-insider-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "3" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/cnbc-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "4" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/cnn-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "5" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/forbes-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "6" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/the-new-york-times-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "7" } as React.CSSProperties}
            >
              <img src="/Bar Icons/airbus-logo2-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "8" } as React.CSSProperties}
            >
              <img src="/Bar Icons 2/yahoo-finance-darkmode.png" alt="" />
            </div>
            <div
              className="item"
              style={{ "--position": "9" } as React.CSSProperties}
            >
              <img src="/Bar Icons/adobe-logo-darkmode.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="imagep">
        <div className="item_img imjpg1">
          <img src="/img2/2_5.jpg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg2">
          <img src="/img2/2_2.jpg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg3">
          <img src="/img2/2_3.jpg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg4">
          <img src="/img2/2_4.jpg" className="imgh" alt="" />
        </div>
        <div className="item_img imjpg5">
          <img src="/img2/2_1.jpeg" className="imgh" alt="" />
        </div>
      </div>

      <div id="fourth">
        <div className="vid">
          <video id="vid3" src="/vd5.mp4" loop autoPlay muted></video>
        </div>

        <h1>
          Get work done in
          <br />
          <span style={{ color: "rgb(165, 255, 47)" }}>
            over 2700 different
          </span>
          <br />
          categories
        </h1>

        <div className="cont4">
          <div className="link_list1">
            <a href="" className="ll1">
              Website Design
            </a>
            <br />
            <a href="" className="ll1">
              Mobile Apps
            </a>
            <br />
            <a href="" className="ll1">
              Android Apps
            </a>
            <br />
            <a href="" className="ll1">
              iPhone Apps
            </a>
            <br />
            <a href="" className="ll1">
              Software Architecture
            </a>
            <br />
            <a href="" className="ll1">
              Graphic Design
            </a>
          </div>
          <div className="link_list2">
            <a href="" className="ll2">
              Logo Design
            </a>
            <br />
            <a href="" className="ll2">
              Public Relations
            </a>
            <br />
            <a href="" className="ll2">
              Logistics
            </a>
            <br />
            <a href="" className="ll2">
              Proofreading
            </a>
            <br />
            <a href="" className="ll2">
              Translation
            </a>
            <br />
            <a href="" className="ll2">
              Research
            </a>
          </div>
          <div className="link_list3">
            <a href="" className="ll1">
              Research Writing
            </a>
            <br />
            <a href="" className="ll1">
              Article Writing
            </a>
            <br />
            <a href="" className="ll1">
              Web Scraping
            </a>
            <br />
            <a href="" className="ll1">
              HTML
            </a>
            <br />
            <a href="" className="ll1">
              CSS
            </a>
            <br />
            <a href="" className="ll1">
              HTML 5
            </a>
          </div>
          <div className="link_list4">
            <a href="" className="ll2">
              Javascript
            </a>
            <br />
            <a href="" className="ll2">
              Data Processing
            </a>
            <br />
            <a href="" className="ll2">
              Python
            </a>
            <br />
            <a href="" className="ll2">
              Wordpress
            </a>
            <br />
            <a href="" className="ll2">
              Web Search
            </a>
            <br />
            <a href="" className="ll2">
              Finance
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="col">
            <p className="slogan">
              "Empowering Freelancers, Elevating Projects."
              <br />
              <img src="/logo.png" alt="QuickHire Logo" />
              <br />
              "Elevate your brand with our creative professionals dedicated to
              bringing your vision to life."
            </p>
          </div>
          <div className="col">
            <h2>For Client</h2>
            <ul>
              <li>
                <a href="#">How to hire</a>
              </li>
              <li>
                <a href="#">Talent Marketplace</a>
              </li>
              <li>
                <a href="#">Poject Catalog</a>
              </li>
              <li>
                <a href="#">Hire an agency</a>
              </li>
              <li>
                <a href="#">Enterprise</a>
              </li>
              <li>
                <a href="#">Any hire</a>
              </li>
              <li>
                <a href="#">Contract-to-hire</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>For Talent</h2>
            <ul>
              <li>
                <a href="#">How to find work</a>
              </li>
              <li>
                <a href="#">Direct Contracts</a>
              </li>
              <li>
                <a href="#">Find freelance jobs</a>
              </li>
              <li>
                <a href="#">Win work with ads</a>
              </li>
              <li>
                <a href="#">Exclusive resources with Freelancer Plus</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Resources</h2>
            <ul>
              <li>
                <a href="#">Help & support</a>
              </li>
              <li>
                <a href="#">Upwork reviews</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Affiliate programme</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Investor relations</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Our impact</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Trust,safety & security</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <div className="ad">
              <h3>Follow us</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com" title="Facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.linkedin.com" title="LinkedIn">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.youtube.com" title="YouTube">
                  <i className="bx bxl-youtube"></i>
                </a>
                <a href="https://www.instagram.com" title="Instagram">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p className="copyright">
            <u>CodeCollab</u> &copy; <u>2024</u>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
