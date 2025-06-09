"use client";

import React, { useState } from "react";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    // Simple regex for email validation
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!interest) {
      setError("Please select your area of interest.");
      return;
    }

    setLoading(true);

    try {
      const phoneNumber = "+2348062907833"; // Replace with your WhatsApp number (international format, no +)
      const text = `Hello! I would like to get more info about your courses.

Name: ${name}
Email: ${email}
Interested In: ${interest}
Message: ${message || "N/A"}

Looking forward to hearing from you!`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

      window.open(whatsappUrl, "_blank");

      setSuccess("WhatsApp window opened. Please send your message there.");
      // Optionally clear the form
      setName("");
      setEmail("");
      setInterest("");
      setMessage("");
    } catch (err) {
      console.log(err);
      setError("Failed to open WhatsApp. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                {error && (
                  <p className="text-red-400 text-center font-medium">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="text-green-400 text-center font-medium">
                    {success}
                  </p>
                )}

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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    disabled={loading}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium mb-1"
                  >
                    I&apos;m Interested In
                  </label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                    disabled={loading}
                  >
                    <option value="" className="bg-blue-900">
                      Select your interest
                    </option>
                    <option value="Web Development" className="bg-blue-900">
                      Web Development
                    </option>
                    <option value="Data Science" className="bg-blue-900">
                      Data Science
                    </option>
                    <option value="Mobile Development" className="bg-blue-900">
                      Mobile Development
                    </option>
                    <option value="UI/UX Design" className="bg-blue-900">
                      UI/UX Design
                    </option>
                    <option value="DevOps" className="bg-blue-900">
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your goals and what you're looking to achieve"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    disabled={loading}
                  ></textarea>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Request Information"}
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