import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
function SideBar({ drafts }) {
  const links = [
    { icon: "fa-chart-bar", title: "Status", path: "/" },
    { icon: "fa-users", title: "User Mangment", path: "/users" },
    { icon: "fa-building", title: "Project Mangment", path: "/projects" },
    { icon: "fa-laptop-code", title: "Developer Mangment", path: "/developer" },
    { icon: "fa-users", title: "CMS Mangment", path: "" },
    { icon: "fa-message", title: "Live Chat", path: "" },
  ];
  return (
    <>
      <aside className={`${styles.sidebar} min-vh-100 `}>
        <div className="my-3 fw-semibold fs-4 text-white-50 px-4">
          DashBoard
        </div>
        {/* Links */}
        <nav className=" d-flex justify-content-between">
          <div>
            {links.map((item, index) => (
              <NavLink
                to={item.path}
                className={`${styles.navItem} d-flex align-items-center gap-3 py-3 px-4`}
                key={index}
              >
                <i className={`fa-solid ${item.icon} `}></i>
                <span className="px-1">{item.title}</span>

                {item.path === "/users" &&drafts.users && (
                <span className="badge bg-danger rounded-pill text-danger ms-auto">  
                .
                </span>
            )
            }

            {/* PROJECTS */}
            {
              item.path === "/projects" && drafts.projects && (
              <span className="badge bg-danger rounded-pill text-danger ms-auto">
                 .
                </span>
              )
            }

            {/* DEVELOPERS */}
            {
              item.path === "/developer" &&drafts.developers && (
                <span className="badge bg-danger rounded-pill text-danger ms-auto">
                  .
                </span>

              )
            }
              </NavLink>
            ))}
          </div>

          <div>

          </div>
        </nav>
      </aside>
    </>
  );
}

export default SideBar;
