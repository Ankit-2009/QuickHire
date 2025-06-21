import { useState } from "react";
import "../styles/Dashboard.css";
import piyushimg from "../assets/About Us/Piyush.jpg";

interface Skill {
  id: number;
  name: string;
  level: string;
}

interface Project {
  id: number;
  title: string;
  status: string;
  progress: number;
  deadline: string;
}

interface Activity {
  id: number;
  type: string;
  description: string;
  timestamp: string;
}

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "React", level: "Expert" },
    { id: 2, name: "Node.js", level: "Advanced" },
    { id: 3, name: "TypeScript", level: "Intermediate" },
  ]);
  // @ts-ignore
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "E-commerce Website",
      status: "In Progress",
      progress: 75,
      deadline: "2024-04-15",
    },
    {
      id: 2,
      title: "Mobile App Development",
      status: "Planning",
      progress: 20,
      deadline: "2024-05-01",
    },
  ]);
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      type: "project",
      description: "Updated E-commerce Website project progress",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      type: "skill",
      description: "Added TypeScript skill",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      type: "payment",
      description: "Received payment for Website Redesign",
      timestamp: "3 days ago",
    },
  ]);
  const [showAddSkill, setShowAddSkill] = useState(false);
  const [newSkill, setNewSkill] = useState({ name: "", level: "Beginner" });
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Piyush Kumar",
    email: "lci2024043@iiitl.ac.in",
    bio: "Full-stack developer passionate about creating amazing web applications.",
    location: "Lucknow, India",
    hourlyRate: "₹300",
  });

  const totalEarnings = 8450;
  const completedProjects = 8;
  const pendingTasks = 5;
  const availableHours = 24;

  const handleAddSkill = () => {
    if (newSkill.name.trim()) {
      const newSkillEntry = { id: Date.now(), ...newSkill };
      setSkills([...skills, newSkillEntry]);
      setNewSkill({ name: "", level: "Beginner" });
      setShowAddSkill(false);

      // Add activity for new skill
      setActivities([
        {
          id: Date.now(),
          type: "skill",
          description: `Added ${newSkill.name} skill`,
          timestamp: "Just now",
        },
        ...activities,
      ]);
    }
  };

  const handleRemoveSkill = (skillId: number) => {
    const skillToRemove = skills.find((skill) => skill.id === skillId);
    setSkills(skills.filter((skill) => skill.id !== skillId));

    // Add activity for removed skill
    if (skillToRemove) {
      setActivities([
        {
          id: Date.now(),
          type: "skill",
          description: `Removed ${skillToRemove.name} skill`,
          timestamp: "Just now",
        },
        ...activities,
      ]);
    }
  };

  const handleProfileUpdate = () => {
    setShowProfileEdit(false);
  };

  return (
    <div className="dashboard">
      <div className="banner"></div>
      <div className="dashboard-content">
        <div className="profile-section">
          <div className="profile">
            <div className="picture">
              <div className="aborder"></div>
              <img src={piyushimg} alt="Profile" />
            </div>
            <div className="details">
              <div className="name">{profileData.name}</div>
              <div className="rating-d">
                (3.6<i className="bx bxs-star"></i>)
              </div>
              <div className="job">Software Engineer</div>
              <button
                className="edit-profile-btn"
                onClick={() => setShowProfileEdit(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="dashboard-nav">
            <button
              className={`nav-button ${
                activeTab === "overview" ? "active" : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`nav-button ${
                activeTab === "projects" ? "active" : ""
              }`}
              onClick={() => setActiveTab("projects")}
            >
              Projects
            </button>
            <button
              className={`nav-button ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Skills
            </button>
            <button
              className={`nav-button ${
                activeTab === "settings" ? "active" : ""
              }`}
              onClick={() => setActiveTab("settings")}
            >
              Settings
            </button>
          </div>
        </div>

        <div className="main-content">
          {activeTab === "overview" && (
            <div className="overview-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Earnings This Month</h3>
                  <div className="stat-number">₹{totalEarnings}</div>
                </div>
                <div className="stat-card">
                  <h3>Completed Projects</h3>
                  <div className="stat-number">{completedProjects}</div>
                </div>
                <div className="stat-card">
                  <h3>Pending Tasks</h3>
                  <div className="stat-number">{pendingTasks}</div>
                </div>
                <div className="stat-card">
                  <h3>Available Hours</h3>
                  <div className="stat-number">{availableHours}</div>
                </div>
              </div>

              <div className="recent-activity">
                <div className="section-header">
                  <h2>Recent Activity</h2>
                </div>
                <div className="activity-list">
                  {activities.map((activity) => (
                    <div key={activity.id} className="activity-item">
                      <div className={`activity-icon ${activity.type}`}>
                        <i
                          className={`bx ${
                            activity.type === "project"
                              ? "bx-folder"
                              : activity.type === "skill"
                              ? "bx-badge-check"
                              : "bx-money"
                          }`}
                        ></i>
                      </div>
                      <div className="activity-details">
                        <p>{activity.description}</p>
                        <div className="activity-time">
                          {activity.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="projects-section">
                <div className="section-header">
                  <h2>Current Projects</h2>
                </div>
                <div className="projects-grid">
                  {projects.slice(0, 2).map((project) => (
                    <div key={project.id} className="project-card">
                      <h3>{project.title}</h3>
                      <div className="project-status">
                        <span
                          className={`status-badge ${project.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {project.status}
                        </span>
                        <span>Deadline: {project.deadline}</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="progress-text">
                        {project.progress}% Complete
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="projects-content">
              <div className="section-header">
                <h2>My Projects</h2>
                <button className="add-project-btn">+ New Project</button>
              </div>
              <div className="projects-grid">
                {projects.map((project) => (
                  <div key={project.id} className="project-card">
                    <h3>{project.title}</h3>
                    <div className="project-status">
                      <span
                        className={`status-badge ${project.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {project.status}
                      </span>
                      <span>Deadline: {project.deadline}</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="progress-text">
                      {project.progress}% Complete
                    </div>
                    <div className="project-actions">
                      <button className="action-btn edit">
                        <i className="bx bx-edit"></i>
                      </button>
                      <button className="action-btn delete">
                        <i className="bx bx-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="skills-content">
              <div className="section-header">
                <h2>My Skills</h2>
                <button
                  className="add-skill-btn"
                  onClick={() => setShowAddSkill(true)}
                >
                  + Add Skill
                </button>
              </div>
              <div className="skills-grid">
                {skills.map((skill) => (
                  <div key={skill.id} className="skill-card">
                    <h3>{skill.name}</h3>
                    <div className="skill-level">{skill.level}</div>
                    <button
                      className="remove-skill-btn"
                      onClick={() => handleRemoveSkill(skill.id)}
                    >
                      <i className="bx bx-x"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="settings-content">
              <div className="section-header">
                <h2>Account Settings</h2>
              </div>
              <div className="settings-grid">
                <div className="setting-card">
                  <h3>Profile Settings</h3>
                  <button className="setting-btn">Edit Profile</button>
                  <button className="setting-btn">Change Password</button>
                  <button className="setting-btn">
                    Notification Preferences
                  </button>
                </div>
                <div className="setting-card">
                  <h3>Billing Information</h3>
                  <button className="setting-btn">Payment Methods</button>
                  <button className="setting-btn">Invoices</button>
                  <button className="setting-btn">Subscription</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Skill Modal */}
      {showAddSkill && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Add New Skill</h2>
            <input
              type="text"
              placeholder="Skill Name"
              value={newSkill.name}
              onChange={(e) =>
                setNewSkill({ ...newSkill, name: e.target.value })
              }
            />
            <select
              value={newSkill.level}
              onChange={(e) =>
                setNewSkill({ ...newSkill, level: e.target.value })
              }
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleAddSkill}>Add Skill</button>
              <button onClick={() => setShowAddSkill(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Profile Edit Modal */}
      {showProfileEdit && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Profile</h2>
            <input
              type="text"
              placeholder="Name"
              value={profileData.name}
              onChange={(e) =>
                setProfileData({ ...profileData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              value={profileData.email}
              onChange={(e) =>
                setProfileData({ ...profileData, email: e.target.value })
              }
            />
            <textarea
              placeholder="Bio"
              value={profileData.bio}
              onChange={(e) =>
                setProfileData({ ...profileData, bio: e.target.value })
              }
            ></textarea>
            <input
              type="text"
              placeholder="Location"
              value={profileData.location}
              onChange={(e) =>
                setProfileData({ ...profileData, location: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Hourly Rate"
              value={profileData.hourlyRate}
              onChange={(e) =>
                setProfileData({ ...profileData, hourlyRate: e.target.value })
              }
            />
            <div className="modal-actions">
              <button onClick={handleProfileUpdate}>Save Changes</button>
              <button onClick={() => setShowProfileEdit(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;