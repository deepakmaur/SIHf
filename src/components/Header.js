import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-xl font-bold">ImageGPT</div>
      <nav className="space-x-6">
        <a href="#research" className="hover:underline ">About</a>
        <a href="#products" className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Register / Sign</a>
        
      </nav>
    </header>
  );
};

export default Header;
