import { useState } from "react";
import logo from "../assets/About Us/teamLogo-modified.png";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-header" onMouseMove={handleMouseMove}>
        <img src={logo} alt="logo" />
        <div className="text-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card" onMouseMove={handleMouseMove}>
            <i className="bx bx-map"></i>
            <h3>Our Location</h3>
            <p>123 Holy AHH Street</p>
            <p>Lucknow, India</p>
          </div>
          <div className="info-card" onMouseMove={handleMouseMove}>
            <i className="bx bx-envelope"></i>
            <h3>Email Us</h3>
            <p>support@quickhire.com</p>
            <p>info@quickhire.com</p>
          </div>
          <div className="info-card" onMouseMove={handleMouseMove}>
            <i className="bx bx-phone"></i>
            <h3>Call Us</h3>
            <p>+91 1234567890</p>
            <p>Mon-Fri, 9am-6pm</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
