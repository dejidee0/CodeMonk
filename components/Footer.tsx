"use client";
import React from "react";
import { Link } from "./Link";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">CodeWithMonk</h3>
            <p className="mb-4 text-gray-400 leading-relaxed">
              Empowering the next generation of developers with high-quality
              courses and mentorship from industry experts.
            </p>
            <div className="flex space-x-4">
              <Link
                to="https://twitter.com"
                external
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                to="https://linkedin.com"
                external
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                to="https://facebook.com"
                external
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                to="https://instagram.com"
                external
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/courses/web-development"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/data-science"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/mobile-development"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/design"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/devops"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  DevOps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/instructors"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Instructors
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Innovation Street, Tech City, TC 98765
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <Link
                  to="tel:+11234567890"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <Link
                  to="mailto:hello@codewithmonk.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hello@codewithmonk.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} CodeWithMonk. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link
                to="/terms"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/sitemap"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
