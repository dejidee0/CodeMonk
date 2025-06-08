"use client";
import React from "react";
import { Button } from "./Button";
import {
  ArrowRight,
  Code,
  Globe,
  Users,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-950 to-indigo-900 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-purple-500 opacity-5 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-teal-400 rounded-full opacity-60 animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-indigo-400 rounded-full opacity-30 animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 transform hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-5 w-5 text-teal-300" />
            <span className="text-sm font-medium">
              Trusted by 15,000+ professionals worldwide
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-teal-200 bg-clip-text text-transparent">
              Master Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-200 via-blue-100 to-white bg-clip-text text-transparent">
              Build Your Digital Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
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
                className="bg-transparent border-white text-white hover:bg-white/10 group"
              >
                <Globe className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Get Your Website
              </Button>
            </Link>
          </div>

          {/* Services Grid with 3D Effects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
            {/* Learning Section */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-500 hover:shadow-2xl border border-white/20">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-sm uppercase tracking-wider text-blue-200 mb-3 flex items-center justify-center">
                <Zap className="h-4 w-4 mr-2" />
                Learn & Grow
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Master In-Demand Skills
              </h3>
              <div className="space-y-4">
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      React Developer Bootcamp
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>8 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Intermediate</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">N</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      Node.js Backend Mastery
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>6 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Intermediate</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">F</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      Full-Stack Web Development
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>12 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Advanced</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">P</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      Python for Data Science
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>10 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Beginner</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Website Solutions Section */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 hover:-rotate-1 transition-all duration-500 hover:shadow-2xl border border-white/20">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <div className="text-sm uppercase tracking-wider text-blue-200 mb-3 flex items-center justify-center">
                <Target className="h-4 w-4 mr-2" />
                Build & Launch
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Professional Website Solutions
              </h3>
              <div className="space-y-4">
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">B</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      Business Websites
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>Custom Design</span>
                      <span className="mx-2">•</span>
                      <span>Mobile Ready</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">M</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      Mobile App Development
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>iOS & Android</span>
                      <span className="mx-2">•</span>
                      <span>Cross Platform</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">C</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      CRM System Development
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>Workflow Automation</span>
                      <span className="mx-2">•</span>
                      <span>Client Management</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
                <div className="group/item flex items-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mr-4 transform group-hover/item:scale-110 transition-transform duration-300">
                    <span className="text-sm font-bold text-white">E</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-semibold text-white">
                      E-commerce Platforms
                    </h4>
                    <div className="flex items-center text-sm text-blue-200 mt-1">
                      <span>Storefront & Checkout</span>
                      <span className="mx-2">•</span>
                      <span>Secure Payments</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover/item:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="container mx-auto px-4 md:px-6 mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { number: "25+", label: "Expert Courses", delay: "0" },
            { number: "15k+", label: "Students Trained", delay: "200" },
            { number: "500+", label: "Websites Built", delay: "400" },
            { number: "98%", label: "Client Satisfaction", delay: "600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group transform hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-teal-200 group-hover:to-blue-200 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-blue-200 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 border border-white/20">
            <Users className="h-6 w-6 text-teal-300" />
            <span className="text-base font-medium">
              Join 15,000+ professionals who&apos;ve transformed their careers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
