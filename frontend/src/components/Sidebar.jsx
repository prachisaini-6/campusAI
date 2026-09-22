import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "⌂" },
    { name: "Discover", path: "/discover", icon: "🔎" },
    { name: "Saved", path: "/saved", icon: "♡" },
    { name: "Applications", path: "/applications", icon: "▣" },
    { name: "Deadlines", path: "/deadlines", icon: "◷" },
    { name: "Recommendations", path: "/recommendations", icon: "✦" },
    { name: "Projects", path: "/project-recommendations", icon: "◆" },
    { name: "AI Assistant", path: "/ai-assistant", icon: "✧" },
    { name: "AI Application Helper", path: "/ai-application-helper", icon: "✎" },
    { name: "Insights", path: "/insights", icon: "▥" },
  ];

  return (
    <aside className="sidebar">

      <a href="/home" className="logo home-logo">
      <span className="home-icon">⌂</span>
        <span>CampusAI</span>
      </a>

      <div className="sidebar-menu">

        <p className="sidebar-title">MAIN MENU</p>

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}

        <p className="sidebar-title account-title">ACCOUNT</p>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">♙</span>
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <span className="sidebar-icon">⚙</span>
          <span>Settings</span>
        </NavLink>

      </div>

      <div className="sidebar-bottom">

        <div className="sidebar-help">
          <div className="help-icon">?</div>

          <div>
            <strong>Need Help?</strong>
            <p>Ask our AI Assistant</p>
          </div>
        </div>

        <button className="logout-button">
          ↪ Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;