import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/Login.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSidebarOpen(false);
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
      <>
        <nav className="navbar">
          <img
              id="toggle_open"
              src="/logo.png"
              alt="QuickHire"
              onClick={isMobile ? toggleSidebar : undefined}
              className={isMobile ? "clickable" : ""}
          />
          <h3>
            <Link to="/">QuickHire</Link>
          </h3>

          {!isMobile ? (
              <>
                <ul>
                  <li>
                    <Link to="/hire">Hire Freelancers</Link>
                  </li>
                  <li>
                    <Link to="/findwork">Find Work</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                </ul>
                <input
                    type="text"
                    placeholder="Search"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                />
                <Link to="/login">
                  <button id="login">Log In</button>
                </Link>
                <Link to="/signup">
                  <button id="signup">Sign Up</button>
                </Link>
              </>
          ) : (
              <div className="mobile-menu-button" onClick={toggleSidebar}>
                <i className="bx bx-menu"></i>
              </div>
          )}
        </nav>

        {isMobile && (
            <div className={`sidebar ${isSidebarOpen ? "active1" : ""}`}>
              <div className={`b_sidebar ${isSidebarOpen ? "active2" : ""}`}>
                <div className="m_sidebar">
                  <div className="togglebutton inside-toggle" onClick={toggleSidebar}>
                    <i className="bx bx-x"></i>
                  </div>

                  <div className="sidebar-main-content">
                    <div className="profile-sections">
                      <div className="pfp">U</div>
                      <Link to="/" className="username-link">User1234</Link>
                      <Link to="/" className="profile-email">xyz@gmail.com</Link>
                    </div>

                    <div className="buttons">
                      <Link to="/dashboard">
                        <button onClick={toggleSidebar}>
                          Dashboard <i className="bx bx-tachometer"></i>
                        </button>
                      </Link>
                      <Link to="/about">
                        <button onClick={toggleSidebar}>
                          About Us <i className="bx bx-buildings"></i>
                        </button>
                      </Link>
                      <Link to="/hire">
                        <button onClick={toggleSidebar}>
                          Hire freelancer <i className="bx bx-user-pin"></i>
                        </button>
                      </Link>
                      <Link to="/findwork">
                        <button onClick={toggleSidebar}>
                          Find Job <i className="bx bx-money-withdraw"></i>
                        </button>
                      </Link>
                      <div className="search-container">
                        <div className="search-input-wrapper">
                          <input
                              type="text"
                              placeholder="Search..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                          />
                          <i className="bx bx-search search-icon"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-bottom">
                    <button className="logout" onClick={toggleSidebar}>
                      <span>Log Out</span>
                      <i className="bx bx-log-out bx-rotate-180"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}

        <div id="nav_space"></div>
      </>
  );
};

export default Navbar;