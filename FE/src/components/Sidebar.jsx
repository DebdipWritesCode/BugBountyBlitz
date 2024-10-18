import { NavLink } from 'react-router-dom';
import { FiGrid, FiSend } from 'react-icons/fi';
import { FaBug } from "react-icons/fa";

const Sidebar = ({ isAdmin }) => {
  const linkClasses = ({ isActive }) =>
    `flex items-center py-3 px-4 text-lg rounded-md transition-colors duration-200 ${isActive ? 'bg-[#c1e8ff] text-black rounded-lg' : 'text-gray-500 hover:bg-gray-100 hover:text-black'
    }`;

  return (
    <aside className="w-[250px] p-4 mt-8 font-roboto">
      <nav>
        <ul className="space-y-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/admin" className={linkClasses}>
                  <FiGrid className="mr-3" />
                  Admin Panel
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/bugs" className={linkClasses}>
                  <FaBug className="mr-3" />
                  View Bugs
                </NavLink>
              </li>
              <li>
                <NavLink to="/submit" className={linkClasses}>
                  <FiSend className="mr-3" />
                  Submit Bug
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
