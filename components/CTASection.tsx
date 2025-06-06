import React from "react";
import { Button } from "./Button";
import { CheckCircle } from "lucide-react";
import { Link } from "./Link";

const CTASection: React.FC = () => {
  const benefits = [
    "Comprehensive curriculum designed by industry experts",
    "Hands-on projects and real-world applications",
    "Personal mentorship and code reviews",
    "Flexible learning schedule to fit your lifestyle",
    "Career support and job placement assistance",
    "Lifetime access to course materials and updates",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-64 bg-white opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to Take the Next Step in Your Career?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join thousands of successful students who have transformed their
                careers with our industry-leading courses and mentorship
                programs.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" to="/courses">
                  Browse Courses
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                  to="/contact"
                >
                  Talk to an Advisor
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Get Started Today
              </h3>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium mb-1"
                  >
                    I'm Interested In
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <option value="" className="bg-blue-900">
                      Select your interest
                    </option>
                    <option value="web-development" className="bg-blue-900">
                      Web Development
                    </option>
                    <option value="data-science" className="bg-blue-900">
                      Data Science
                    </option>
                    <option value="mobile-development" className="bg-blue-900">
                      Mobile Development
                    </option>
                    <option value="design" className="bg-blue-900">
                      UI/UX Design
                    </option>
                    <option value="devops" className="bg-blue-900">
                      DevOps
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your goals and what you're looking to achieve"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  ></textarea>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  type="submit"
                >
                  Request Information
                </Button>
              </form>

              <p className="text-center text-sm text-blue-200 mt-4">
                By submitting this form, you agree to our{" "}
                <Link
                  to="/privacy"
                  className="text-teal-300 hover:text-teal-200 underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
