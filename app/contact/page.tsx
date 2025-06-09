"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateWhatsAppMessage = () => {
    const { name, email, service, message } = formData;
    return encodeURIComponent(
      `Hello! I'm interested in your services.\n\n*Name:* ${name}\n*Email:* ${email}\n*Service Interest:* ${service}\n*Message:* ${message}\n\nI'd like to learn more about how Codewithmonk can help me achieve my goals.`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, service, message } = formData;
    if (!name || !email || !service || !message) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitted(true);
    const whatsappUrl = `https://wa.me/+2348062907833?text=${generateWhatsAppMessage()}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitted(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@Codewithmonk.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+2348062907833",
      description: "Mon-Fri from 8am to 6pm",
    },
  ];

  const ContactCard = ({
    icon: Icon,
    title,
    content,
    description,
  }: {
    icon: React.ElementType;
    title: string;
    content: string;
    description: string;
  }) => (
    <div className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="flex items-start">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl mr-4 transform group-hover:rotate-12 transition-transform duration-300">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-blue-600 dark:text-blue-300 font-medium mb-1">
            {content}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-teal-500 opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-teal-200 to-blue-200 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Ready to start your learning journey or build your dream website?
            We&apos;re here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Send us a message
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Redirecting you to WhatsApp to continue the conversation...
                  </p>
                  <div className="flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-300 mr-2" />
                    <span className="text-green-600 dark:text-green-300 font-medium">
                      Opening WhatsApp...
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    {
                      label: "Full Name",
                      type: "text",
                      name: "name" as keyof FormData,
                      placeholder: "Enter your full name",
                    },
                    {
                      label: "Email Address",
                      type: "email",
                      name: "email" as keyof FormData,
                      placeholder: "Enter your email address",
                    },
                  ].map(({ label, type, name, placeholder }) => (
                    <div key={name}>
                      <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        {label} *
                      </label>
                      <input
                        type={type}
                        id={name}
                        name={name}
                        value={formData[name]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder={placeholder}
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Teaching/Courses">
                        Teaching & Courses
                      </option>
                      <option value="Website Solutions">
                        Website Solutions
                      </option>
                      <option value="Both">Both Services</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project or learning goals..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info & Quick Actions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  We&apos;re here to help you succeed. Reach out to us through
                  any of these channels.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <ContactCard key={index} {...info} />
                ))}
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-blue-100 mb-6">
                  Choose your path and begin your transformation today.
                </p>
                <div className="space-y-3">
                  <Link href="/courses" passHref>
                    <Button
                      variant="secondary"
                      size="md"
                      className="w-full border-white text-blue-600 hover:bg-gray-100"
                    >
                      Explore Our Courses
                    </Button>
                  </Link>
                  <Link href="/" passHref>
                    <Button
                      variant="outline"
                      size="md"
                      className="w-full border-white text-white hover:bg-white/10"
                    >
                      View Website Solutions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
