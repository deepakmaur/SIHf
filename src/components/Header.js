import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-custom-gradient text-white p-6 z-50 flex justify-between items-center shadow-none h-16">
      <div className="text-xl font-bold">NeoChat</div>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
