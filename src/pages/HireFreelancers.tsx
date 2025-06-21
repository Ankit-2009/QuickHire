import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HireFreelancers.css";

interface Freelancer {
  id: number;
  name: string;
  role: string;
  skills: string;
  rating: number;
  hourlyRate: string;
  completedJobs: number;
  image: string;
}

const HireFreelancer: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const freelancers: Freelancer[] = [
    {
      id: 1,
      name: "User A",
      role: "Frontend Developer",
      skills: "React, Tailwind CSS, TypeScript",
      rating: 4.9,
      hourlyRate: "₹500/hr",
      completedJobs: 127,
      image: "/default_av.jpg",
    },
    {
      id: 2,
      name: "User B",
      role: "Backend Developer",
      skills: "Node.js, Express, MongoDB",
      rating: 4.8,
      hourlyRate: "₹550/hr",
      completedJobs: 98,
      image: "/default_av.jpg",
    },
    {
      id: 3,
      name: "User C",
      role: "UX/UI Designer",
      skills: "Figma, Adobe XD, Prototyping",
      rating: 4.9,
      hourlyRate: "₹700/hr",
      completedJobs: 156,
      image: "/default_av.jpg",
    },
    {
      id: 4,
      name: "User D",
      role: "SEO Specialist",
      skills: "Google Analytics, SEM, Content Strategy",
      rating: 4.7,
      hourlyRate: "₹850/hr",
      completedJobs: 89,
      image: "/default_av.jpg",
    },
    {
      id: 5,
      name: "User E",
      role: "Mobile Developer",
      skills: "React Native, Flutter, iOS Development",
      rating: 4.8,
      hourlyRate: "₹650/hr",
      completedJobs: 112,
      image: "/default_av.jpg",
    },
    {
      id: 6,
      name: "User F",
      role: "DevOps Engineer",
      skills: "AWS, Docker, Kubernetes, CI/CD",
      rating: 4.9,
      hourlyRate: "₹900/hr",
      completedJobs: 78,
      image: "/default_av.jpg",
    },
    {
      id: 7,
      name: "User G",
      role: "Data Scientist",
      skills: "Python, TensorFlow, Machine Learning",
      rating: 4.8,
      hourlyRate: "₹800/hr",
      completedJobs: 65,
      image: "/default_av.jpg",
    },
    {
      id: 8,
      name: "User H",
      role: "Full Stack Developer",
      skills: "MERN Stack, GraphQL, Next.js",
      rating: 4.9,
      hourlyRate: "₹750/hr",
      completedJobs: 143,
      image: "/default_av.jpg",
    },
    // {
    //   id: 9,
    //   name: "User I",
    //   role: "QA Engineer",
    //   skills: "Jest, Cypress, Selenium",
    //   rating: 4.7,
    //   hourlyRate: "₹600/hr",
    //   completedJobs: 92,
    //   image: "",
    // },
    // {
    //   id: 10,
    //   name: "User J",
    //   role: "Blockchain Developer",
    //   skills: "Solidity, Web3.js, Smart Contracts",
    //   rating: 4.8,
    //   hourlyRate: "₹950/hr",
    //   completedJobs: 45,
    //   image: "",
    // },
    // {
    //   id: 11,
    //   name: "User K",
    //   role: "Cloud Architect",
    //   skills: "Azure, GCP, Cloud Security",
    //   rating: 4.9,
    //   hourlyRate: "₹1000/hr",
    //   completedJobs: 58,
    //   image: "",
    // },
    // {
    //   id: 12,
    //   name: "User L",
    //   role: "AI/ML Engineer",
    //   skills: "PyTorch, Computer Vision, NLP",
    //   rating: 4.8,
    //   hourlyRate: "₹850/hr",
    //   completedJobs: 72,
    //   image: "",
    // },
  ];

  const filteredFreelancers = freelancers.filter(
    (freelancer) =>
      freelancer.name.toLowerCase().includes(search.toLowerCase()) ||
      freelancer.skills.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <div className="header-section">
        <h1>Find Top Freelancers</h1>
        <p>Connect with skilled professionals for your projects</p>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or skills..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </div>

      <div className="freelancers-grid">
        {filteredFreelancers.length > 0 ? (
          filteredFreelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="freelancer-card"
              onMouseMove={handleMouseMove}
            >
              <div className="card-header">
                <img
                  src={freelancer.image}
                  alt={freelancer.name}
                  className="freelancer-image"
                />
                <div className="freelancer-info">
                  <h3>{freelancer.name}</h3>
                  <p className="role">{freelancer.role}</p>
                  <div className="rating">
                    <i className="bx bxs-star"></i>
                    <span>{freelancer.rating}</span>
                    <span className="completed-jobs">
                      ({freelancer.completedJobs} jobs)
                    </span>
                  </div>
                </div>
              </div>

              <div className="skills-container">
                {freelancer.skills.split(", ").map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="card-footer">
                <span className="hourly-rate">{freelancer.hourlyRate}</span>
                <Link
                  to={`/freelancer-details/${freelancer.id}`}
                  className="view-profile-btn"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <i className="bx bx-search-alt"></i>
            <p>No freelancers found matching your search.</p>
          </div>
        )}
      </div>

      <div className="post-job-section">
        <div className="post-job-content">
          <h2>Need to hire for a project?</h2>
          <p>Post a job and get competitive bids from freelancers</p>
          <Link to="/post-job" className="post-job-btn">
            Post a Job
            <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireFreelancer;
