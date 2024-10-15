import { NavLink } from 'react-router-dom';

const Sidebar = ({ isAdmin }) => {
  const linkClasses = ({ isActive }) =>
    `block py-2 px-4 text-lg rounded-md ${
      isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5">
      <nav>
        <ul className="space-y-6">
          {isAdmin ? (
            <li>
              <NavLink to="/admin" className={linkClasses}>
                Admin Panel
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/bugs" className={linkClasses}>
                  View Bugs
                </NavLink>
              </li>
              <li>
                <NavLink to="/submit" className={linkClasses}>
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
