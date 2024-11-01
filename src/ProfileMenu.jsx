import { useState } from "react";
import {
  FaUserCircle,
  FaCog,
  FaEnvelope,
  FaLifeRing,
  FaSignOutAlt,
} from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

// Profile menu items
const profileMenuItems = [
  { label: "My Profile", icon: FaUserCircle },
  { label: "Edit Profile", icon: FaCog },
  { label: "Inbox", icon: FaEnvelope },
  { label: "Help", icon: FaLifeRing },
  { label: "Sign Out", icon: FaSignOutAlt },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      <div className="flex justify-center items-center">
        <div className="image">
          <img
            className="w-8 h-8 rounded-full border border-gray-900"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="profile"
          />
        </div>
        <div className="selIcon">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-1 p-2 text-gray-700"
          >
            <span className="text-md font-normal">Ismail Shaik</span>
            <BiChevronDown
              className={`transition-transform w-5 h-5 ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="p-1">
            {profileMenuItems.map(({ label, icon: Icon, to }) => (
              <li
                key={label}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                {to ? (
                  <Link
                    to={to}
                    className="flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-normal">{label}</span>
                  </Link>
                ) : (
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-normal">{label}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default ProfileMenu;
