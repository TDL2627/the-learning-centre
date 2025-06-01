"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: use Heroicons if you prefer

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#what-we-provide", label: "What We Provide" },
    { href: "#staff", label: "Staff" },
    { href: "#code-of-conduct", label: "Code of Conduct" },
    { href: "#fees", label: "School Fees" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="bg-black shadow-md  py-4 px-4 sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png" // <-- Replace with your actual path
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            The Learning Centre
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-white hover:underline transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Slide-in Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-black shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">TLC</h2>
          </div>

          <button
            className="text-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-white hover:underline transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}
