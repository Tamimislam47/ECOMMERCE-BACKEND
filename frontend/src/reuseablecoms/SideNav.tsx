import React, { useState } from "react";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <div className="h-screen font-sans">
      {/* Side Navigation */}
      <div
        className={`fixed left-0 top-0 h-full overflow-hidden bg-gray-900 transition-all duration-500 ${
          isOpen ? "w-64" : "w-0"
        }`}
      >
        <button
          className="absolute right-4 top-4 text-3xl text-white focus:outline-none"
          onClick={closeNav}
        >
          &times;
        </button>
        <nav className="space-y-4 pt-16">
          <a
            href="#"
            className="block px-8 text-xl text-gray-400 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block px-8 text-xl text-gray-400 hover:text-white"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-8 text-xl text-gray-400 hover:text-white"
          >
            Clients
          </a>
          <a
            href="#"
            className="block px-8 text-xl text-gray-400 hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <h2 className="mb-4 text-2xl font-bold">Animated Sidenav Example</h2>
        <p>Click on the element below to open the side navigation menu.</p>
        <button
          className="mt-4 cursor-pointer text-2xl text-blue-500 focus:outline-none"
          onClick={openNav}
        >
          &#9776; open
        </button>
      </div>
    </div>
  );
};

export default SideNav;
