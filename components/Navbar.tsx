"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "./Link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-900 flex items-center"
          >
            CodeWithMonk
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Courses
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <a
                  href="/courses/web-development"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Web Development
                </a>
                <a
                  href="/courses/data-science"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Data Science
                </a>
                <a
                  href="/courses/mobile-development"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mobile Development
                </a>
                <a
                  href="/courses/design"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Design
                </a>
                <a
                  href="/courses"
                  className="block px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-gray-100"
                >
                  View All Courses
                </a>
              </div>
            </div>
          </div>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            About
          </a>
          <a
            href="/blog"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Log in
          </a>
          <a
            href="/register"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen shadow-md" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-3">
          <div className="border-b border-gray-200 pb-3">
            <button
              className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => {}}
            >
              Courses
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="ml-4 mt-2 space-y-2">
              <a
                href="/courses/web-development"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                Web Development
              </a>
              <a
                href="/courses/data-science"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                Data Science
              </a>
              <a
                href="/courses/mobile-development"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                Mobile Development
              </a>
              <a
                href="/courses/design"
                className="block text-sm text-gray-600 hover:text-blue-600"
              >
                Design
              </a>
              <a
                href="/courses"
                className="block text-sm font-semibold text-blue-600"
              >
                View All Courses
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="block text-gray-700 hover:text-blue-600 font-medium py-2"
          >
            About
          </a>
          <a
            href="/blog"
            className="block text-gray-700 hover:text-blue-600 font-medium py-2"
          >
            Blog
          </a>
          <a
            href="/contact"
            className="block text-gray-700 hover:text-blue-600 font-medium py-2"
          >
            Contact
          </a>
          <div className="pt-3 border-t border-gray-200 flex flex-col space-y-3">
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Log in
            </a>
            <a
              href="/register"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
