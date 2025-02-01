import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingCart, FiUsers, FiSettings, FiFileText } from "react-icons/fi"; // Import icons

const Sidebar = () => {
  return (
    <div className="w-64  bg-white border-r shadow-md flex flex-col">
      {/* Sidebar Header */}
      <div className="p-5 text-xl font-bold text-gray-700 border-b bg-gray-100">
        Admin Dashboard
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col p-3 space-y-2">
        <NavItem to="/dash" icon={<FiHome />} label="Dashboard" />
        <NavItem to="/cart-management" icon={<FiShoppingCart />} label="Cart Management" />
        <NavItem to="/users-management" icon={<FiUsers />} label="Users" />
        <NavItem to="/settings" icon={<FiSettings />} label="Settings" />
        <NavItem to="#" icon={<FiFileText />} label="Reports" />
      </nav>
    </div>
  );
};

const NavItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 text-gray-700 p-3 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600"
  >
    <span className="text-lg">{icon}</span>
    <span className="text-base font-medium">{label}</span>
  </Link>
);

export default Sidebar;
