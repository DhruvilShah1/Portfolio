import React, { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Chatbot from "./Chatbot";
import Footer from "./Footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Opportunities", path: "/Opportunities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4E3E0]">
      {/* Top Pink Shape */}
      <div className="absolute top-0 left-0 w-full h-40 bg-[#D89C95] rounded-b-[80px]" />

      {/* Top Right Dots */}
      <div className="absolute top-4 right-8 w-32 h-32 rounded-full bg-[radial-gradient(#000_1.5px,transparent_1.5px)] bg-[length:10px_10px] opacity-70" />

      {/* Bottom Left Dots */}
      <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-[radial-gradient(#CFAE6D_1.5px,transparent_1.5px)] bg-[length:10px_10px] opacity-70" />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 md:px-10 py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D89C95] shadow-lg">
              <Sparkles className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Bloom
              </h1>
              <p className="text-xs text-gray-500 -mt-1">
                Creative Studio
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
         <ul className="hidden md:flex items-center gap-10 rounded-full border border-white/40 bg-white/50 px-8 py-4 backdrop-blur-md shadow-md">
  {navItems.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.path}
        className={({ isActive }) =>
          `font-medium transition duration-300 ${
            isActive
              ? "text-[#D89C95] font-semibold"
              : "text-gray-700 hover:text-[#D89C95]"
          }`
        }
      >
        {item.name}
      </NavLink>
    </li>
  ))}
</ul>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-full bg-white/60 p-3 backdrop-blur-md shadow-md"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </nav>

        {/* Main Page Content */}
        <main className="px-6 md:px-10 py-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-screen w-72 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col bg-[#F4E3E0] shadow-2xl">
          <div className="h-32 bg-[#D89C95] rounded-b-[50px]" />

          <div className="px-6 -mt-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Sparkles className="text-[#D89C95]" size={20} />
              </div>

              <div>
                <h2 className="font-bold">Bloom</h2>
                <p className="text-xs text-gray-600">
                  Creative Studio
                </p>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          <ul className="mt-10 space-y-4 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl bg-white/60 px-5 py-4 font-medium text-gray-700 shadow transition hover:bg-[#D89C95] hover:text-white"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto p-6">
            <button className="w-full rounded-2xl bg-[#D89C95] px-6 py-4 text-white shadow-lg hover:bg-[#C98780]">
              Get Started
            </button>
          </div>
        </div>
      </div>
            <Chatbot/>
      
          <Footer/>
      
    </div>
  );
};

export default Navbar;