import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/admin", label: "Admin" },
    { path: "/add-new", label: "Add New" },
    { path: "/reading-history", label: "Reading History" },
  ];
  return (
    <div className="w-full border-b bg-white relative">
      <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1">
          <h2 className="text-2xl text-primary font-bold">Let's</h2>
          <img src="/blog.png" alt="blog" width={30} />
        </Link>

        <div className="hidden md:flex items-center font-semibold">
          {navItems.map((navItem) => (
            <NavLink
              to={navItem.path}
              key={navItem.path}
              className="text-black pt-4 pb-3 px-4"
            >
              {navItem.label}
            </NavLink>
          ))}
        </div>
        <button
          className="block md:hidden py-4"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>

        <div
          className={`bg-white h-[100vh] z-30 w-[250px] shadow-xl duration-300 transition-all fixed top-0 ${
            isOpen ? "right-0" : "-right-[300px]"
          }`}
        >
          <button className="mt-4 ml-2" onClick={() => setIsOpen(false)}>
            <IoClose size={24} />
          </button>
          <div className="mt-12  flex flex-col items-center">
            {navItems.map((navItem) => (
              <NavLink
                to={navItem.path}
                key={navItem.path}
                className="text-black border-b p-3 w-full"
              >
                {navItem.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
