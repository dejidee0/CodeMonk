"use client";
import React from "react";
import { Button } from "./Button";
import { ArrowRight, Code, Globe, Sparkles, Zap, Target } from "lucide-react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      className="
        relative
        bg-gradient-to-br
        from-blue-50 to-white
        dark:from-blue-900 dark:via-blue-950 dark:to-indigo-900
        text-gray-900 dark:text-white
        pt-32 pb-20 md:pt-40 md:pb-28
        overflow-hidden
      "
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -top-1/4 -right-1/4 w-1/2 h-1/2
            bg-blue-500 dark:bg-blue-600
            opacity-10 dark:opacity-20
            rounded-full blur-3xl animate-pulse
          "
        ></div>
        <div
          className="
            absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2
            bg-teal-500 dark:bg-teal-600
            opacity-10 dark:opacity-20
            rounded-full blur-3xl animate-pulse delay-1000
          "
        ></div>
        <div
          className="
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-1/3 h-1/3
            bg-purple-500 dark:bg-purple-600
            opacity-5 dark:opacity-10
            rounded-full blur-2xl animate-ping
          "
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 dark:bg-teal-300 rounded-full opacity-60 dark:opacity-40 animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full opacity-40 dark:opacity-30 animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 dark:bg-purple-300 rounded-full opacity-50 dark:opacity-30 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-indigo-400 dark:bg-indigo-300 rounded-full opacity-30 dark:opacity-20 animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className="
              inline-flex items-center space-x-2
              bg-white/20 dark:bg-white/10
              backdrop-blur-sm
              rounded-full px-6 py-3 mb-8
              transform hover:scale-105 transition-transform duration-300
            "
          >
            <Sparkles className="h-5 w-5 text-teal-400 dark:text-teal-300" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Trusted by 15,000+ professionals worldwide
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-teal-900 dark:from-white dark:via-blue-100 dark:to-teal-200 bg-clip-text text-transparent">
              Master Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-700 via-blue-800 to-gray-900 dark:from-teal-200 dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Build Your Digital Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your career with expert-led courses and launch your
            business with our professional website solutions. Everything you
            need to succeed in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link href="/courses" passHref>
              <Button variant="secondary" size="lg" className="group">
                <Code className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Explore Courses
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 group"
              >
                <Globe className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Get Your Website
              </Button>
            </Link>
          </div>

          {/* Services Grid with 3D Effects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
            {/* Learning Section */}
            <div
              className="
                group
                bg-white/20 dark:bg-gray-800/40
                backdrop-blur-sm
                rounded-2xl
                p-8
                transform hover:scale-105 hover:rotate-1
                transition-all duration-500
                hover:shadow-2xl
                border border-gray-300/20 dark:border-white/20
              "
            >
              <div
                className="
                  flex items-center justify-center w-16 h-16
                  bg-gradient-to-br from-blue-500 to-blue-700
                  rounded-2xl mx-auto mb-6
                  transform group-hover:rotate-12 transition-transform duration-300
                  shadow-lg
                "
              >
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-sm uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-3 flex items-center justify-center">
                <Zap className="h-4 w-4 mr-2" />
                Learn & Grow
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Master In-Demand Skills
              </h3>
              <div className="space-y-4">
                {/* Items here - keep existing styles but adapt colors */}
                {/* For brevity, just example on one item below */}
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      React Developer Bootcamp
                    </h4>
                    <div className="flex items-center text-sm text-blue-700 dark:text-blue-300 mt-1">
                      <span>8 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Intermediate</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Node.js Backend Mastery
                    </h4>
                    <div className="flex items-center text-sm text-blue-700 dark:text-blue-300 mt-1">
                      <span>8 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Intermediate</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Full-Stack Web Development
                    </h4>
                    <div className="flex items-center text-sm text-blue-700 dark:text-blue-300 mt-1">
                      <span>8 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Advanced</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Python for Data Science
                    </h4>
                    <div className="flex items-center text-sm text-blue-700 dark:text-blue-300 mt-1">
                      <span>8 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Beginner</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                {/* Repeat for other items */}
              </div>
            </div>

            {/* Website Solutions Section */}
            <div
              className="
                group
                bg-white/20 dark:bg-gray-800/40
                backdrop-blur-sm
                rounded-2xl
                p-8
                transform hover:scale-105 hover:-rotate-1
                transition-all duration-500
                hover:shadow-2xl
                border border-gray-300/20 dark:border-white/20
              "
            >
              <div
                className="
                  flex items-center justify-center w-16 h-16
                  bg-gradient-to-br from-teal-500 to-teal-700
                  rounded-2xl mx-auto mb-6
                  transform group-hover:rotate-12 transition-transform duration-300
                  shadow-lg
                "
              >
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-sm uppercase tracking-wider text-teal-800 dark:text-teal-300 mb-3 flex items-center justify-center">
                <Target className="h-4 w-4 mr-2" />
                Professional Website Solutions
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Launch Your Online Presence
              </h3>
              <div className="space-y-4">
                {/* Website solution items */}
                {/* Example: */}
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">WP</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Custom Business Websites
                    </h4>
                    <div className="flex items-center text-sm text-teal-700 dark:text-teal-300 mt-1">
                      <span>SEO Optimized</span>
                      <span className="mx-2">•</span>
                      <span>Mobile Ready</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal-600 dark:text-teal-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">WP</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Mobile App Development
                    </h4>
                    <div className="flex items-center text-sm text-teal-700 dark:text-teal-300 mt-1">
                      <span>iOS & Android</span>
                      <span className="mx-2">•</span>
                      <span>Cross Platform</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal-600 dark:text-teal-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">WP</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      CRM System Development
                    </h4>
                    <div className="flex items-center text-sm text-teal-700 dark:text-teal-300 mt-1">
                      <span>Workflow Automation</span>
                      <span className="mx-2">•</span>
                      <span>Client Management</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal-600 dark:text-teal-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/10 dark:bg-gray-700 rounded-xl hover:bg-white/20 dark:hover:bg-gray-600 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">WP</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      E-commerce Platforms
                    </h4>
                    <div className="flex items-center text-sm text-teal-700 dark:text-teal-300 mt-1">
                      <span>Storefront & Checkout</span>
                      <span className="mx-2">•</span>
                      <span>Secure Payments</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal-600 dark:text-teal-400 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                {/* Repeat for other items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
