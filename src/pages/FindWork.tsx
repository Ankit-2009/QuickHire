import React, { useState} from "react";
import { Link } from "react-router-dom";
import "../styles/FindWork.css";

interface Job {
  id: number;
  title: string;
  description: string;
}

const FindWork: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const jobs: Job[] = [
    {
      id: 1,
      title: "Frontend Developer",
      description:
        "Build modern UIs with React and Tailwind CSS. Experience with TypeScript required.",
    },
    {
      id: 2,
      title: "Backend Developer",
      description:
        "Create scalable APIs and services with Node.js and Express. Database design experience needed.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description:
        "Design elegant user experiences. Proficiency in Figma and Adobe Creative Suite required.",
    },
    {
      id: 4,
      title: "Mobile Developer",
      description:
        "Develop cross-platform mobile apps using React Native. Experience with iOS/Android required.",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      description:
        "Manage cloud infrastructure and CI/CD pipelines. AWS and Docker experience required.",
    },
    {
      id: 6,
      title: "Data Scientist",
      description:
        "Analyze complex data sets and build ML models. Python and TensorFlow experience needed.",
    },
    {
      id: 7,
      title: "Full Stack Developer",
      description:
        "End-to-end development using MERN stack. Experience with both frontend and backend required.",
    },
    {
      id: 8,
      title: "QA Engineer",
      description:
        "Implement testing strategies and automation frameworks. Experience with Jest and Cypress required.",
    },
    {
      id: 9,
      title: "Blockchain Developer",
      description:
        "Build smart contracts and DApps. Experience with Solidity and Web3.js required.",
    },
  ];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="container">
      <div className="job-box">
        <h2>Find Freelance Jobs</h2>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredJobs.length ? (
          <div className="jobs-grid">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="job-item"
                onMouseMove={handleMouseMove}
              >
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <Link to={`/job-details/${job.id}`} className="job-link">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#999" }}>No jobs found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default FindWork;
