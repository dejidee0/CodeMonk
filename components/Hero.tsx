import React from "react";
import { Button } from "./Button";
import { ArrowRight, Code, Globe, Users } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Master Skills & Build Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your career with expert-led courses and launch your
            business with our professional website solutions. Everything you
            need to succeed in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button variant="secondary" size="lg">
              Explore Courses
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Get Your Website
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {/* Learning Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4">
                <Code className="h-6 w-6" />
              </div>
              <div className="text-sm uppercase tracking-wider text-blue-200 mb-2">
                Learn & Grow
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Master In-Demand Skills
              </h3>
              <div className="space-y-3">
                <a
                  href="/courses/react-developer-bootcamp"
                  className="group flex items-center p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">R</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-sm">
                      React Developer Bootcamp
                    </h4>
                    <div className="flex items-center text-xs text-blue-200 mt-1">
                      <span>8 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Intermediate</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-300 group-hover:translate-x-1 transition-transform duration-200" />
                </a>

                <a
                  href="/courses/python-data-science"
                  className="group flex items-center p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">P</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-sm">
                      Python for Data Science
                    </h4>
                    <div className="flex items-center text-xs text-blue-200 mt-1">
                      <span>10 Weeks</span>
                      <span className="mx-2">•</span>
                      <span>Beginner</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-300 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Website Solutions Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-lg mx-auto mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <div className="text-sm uppercase tracking-wider text-blue-200 mb-2">
                Build & Launch
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Professional Website Solutions
              </h3>
              <div className="space-y-3">
                <a
                  href="/services/business-websites"
                  className="group flex items-center p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">B</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-sm">Business Websites</h4>
                    <div className="flex items-center text-xs text-blue-200 mt-1">
                      <span>Custom Design</span>
                      <span className="mx-2">•</span>
                      <span>Mobile Ready</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-300 group-hover:translate-x-1 transition-transform duration-200" />
                </a>

                <a
                  href="/services/ecommerce-solutions"
                  className="group flex items-center p-3 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">E</span>
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-sm">
                      E-commerce Solutions
                    </h4>
                    <div className="flex items-center text-xs text-blue-200 mt-1">
                      <span>Online Store</span>
                      <span className="mx-2">•</span>
                      <span>Payment Ready</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-blue-300 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="container mx-auto px-4 md:px-6 mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">25+</div>
            <div className="text-blue-200 text-sm">Expert Courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">15k+</div>
            <div className="text-blue-200 text-sm">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">500+</div>
            <div className="text-blue-200 text-sm">Websites Built</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-1">98%</div>
            <div className="text-blue-200 text-sm">Client Satisfaction</div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3">
            <Users className="h-5 w-5 text-teal-300" />
            <span className="text-sm font-medium">
              Join 15,000+ professionals who`&apos;`ve transformed their careers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
