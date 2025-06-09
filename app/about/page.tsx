"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import {
  Users,
  Target,
  Lightbulb,
  Code,
  Globe,
  ArrowRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "+2348062907833";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in learning more about your offerings."
);

const values = [
  {
    icon: Target,
    title: "Excellence First",
    description:
      "Delivering top-quality software solutions and training with unwavering commitment.",
  },
  {
    icon: Users,
    title: "Student Success",
    description:
      "Empowering learners with the skills and knowledge needed to thrive in tech careers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Driving creative solutions and staying ahead with the latest tech trends.",
  },
];

const achievements = [
  { num: "65+", label: "Students Trained" },
  { num: "25+", label: "Projects Delivered" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "7+", label: "Years of Experience" },
];

const services = [
  {
    title: "Education",
    icon: Code,
    features: [
      "Full-Stack & Web Development",
      "Data Analytics",
      "Cybersecurity",
      "UI/UX Design",
      "Product Management",
    ],
  },
  {
    title: "Development Services",
    icon: Globe,
    features: [
      "Web & Mobile Applications",
      "E-commerce Solutions",
      "APIs & Cloud Integrations",
      "Audits & Ongoing Support",
    ],
  },
];

const testimonials = [
  {
    name: "Aisha",
    role: "Full Stack Developer",
    msg: "This company’s training transformed my career. The instructors are knowledgeable and supportive.",
    avatar: "/avatars/aisha.jpg",
  },
  {
    name: "Daniel",
    role: "Data Analyst",
    msg: "Excellent hands-on learning with real-world projects. The support team is always responsive.",
    avatar: "/avatars/daniel.jpg",
  },
  {
    name: "Chloe",
    role: "Product Manager",
    msg: "The product management training was thorough and practical. Highly recommend their courses!",
    avatar: "/avatars/chloe.jpg",
  },
];

const team = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    bio: "Visionary leader with 10+ years in software development and education.",
    linkedin: "https://linkedin.com/in/janedoe",
  },
  {
    name: "John Smith",
    role: "Lead Developer",
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    bio: "Expert in scalable web applications and mentoring junior developers.",
    linkedin: "https://linkedin.com/in/johnsmith",
  },
  {
    name: "Emily Davis",
    role: "Head of Training=",
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    bio: "Passionate educator focused on empowering the next generation of tech professionals.",
    linkedin: "https://linkedin.com/in/emilydavis",
  },
];
const founder = {
  name: "Adedeji Mike",
  role: "Founder & Software Architect",
  bio: "Mike is a seasoned Software Architect passionate about building scalable digital experiences and empowering developers through education. With a keen eye for clean design and smart architecture, he’s driven by innovation and results.",
  photo: "/founder.jpg", // Replace with actual image path
  whatsapp:
    "https://wa.me/2348062907833?text=Hi%20Mike%2C%20I%20just%20visited%20your%20site%20and%20would%20love%20to%20connect!",
  instagram: "https://instagram.com/daniel_aboderin", // Replace with real username
  linkedin: "https://www.linkedin.com/in/adedejimike",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <main className="text-gray-900 antialiased font-sans">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white py-24"
        aria-label="About us hero section"
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl font-extrabold mb-6 leading-tight max-w-3xl mx-auto"
            style={{ lineHeight: 1.2 }}
          >
            Empowering People & Businesses Through Technology
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl max-w-xl mx-auto text-indigo-200 mb-12 leading-relaxed"
          >
            Delivering cutting-edge software solutions paired with immersive
            tech education to fuel your growth and success.
          </motion.p>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 focus:outline-none text-white px-14 py-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 active:scale-95"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            Chat on WhatsApp
          </motion.a>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section
        aria-labelledby="mission-vision-title"
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28">
          {/* Text Section */}
          <div className="flex flex-col justify-center max-w-xl mx-auto md:mx-0">
            <h2
              id="mission-vision-title"
              className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight"
            >
              Our Mission & Vision
            </h2>
            <article className="space-y-12 text-gray-700 text-lg md:text-xl leading-relaxed">
              <section aria-labelledby="mission-title">
                <h3
                  id="mission-title"
                  className="text-2xl font-semibold text-gray-900 mb-3"
                >
                  Mission
                </h3>
                <p>
                  To bridge ambition and achievement by delivering innovative
                  software and comprehensive training that empowers learners and
                  businesses alike.
                </p>
              </section>
              <section aria-labelledby="vision-title">
                <h3
                  id="vision-title"
                  className="text-2xl font-semibold text-gray-900 mb-3"
                >
                  Vision
                </h3>
                <p>
                  To be a global leader in tech education and software
                  solutions, shaping the future through innovation, excellence,
                  and impact.
                </p>
              </section>
            </article>
          </div>

          {/* Achievements Section */}
          <div
            role="list"
            className="flex flex-col justify-center gap-12 max-w-md mx-auto md:mx-0 border-l border-gray-200 pl-12"
          >
            {achievements.map(({ num, label }) => (
              <motion.div
                key={label}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                tabIndex={0}
                aria-label={`${num} ${label}`}
                className="group relative bg-indigo-50 p-8 rounded-xl shadow-lg cursor-default focus:outline-none focus:ring-4 focus:ring-indigo-500 transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Decorative icon or number circle */}
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-indigo-700 text-white font-bold text-2xl select-none">
                  {num}
                </div>
                <p className="text-indigo-900 font-semibold tracking-wide pl-6">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map(({ icon: Icon, title, description }) => (
              <motion.article
                key={title}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-xl cursor-default transition-shadow"
                whileHover={{ scale: 1.04 }}
                tabIndex={0}
                aria-label={title}
              >
                <div className="inline-flex items-center justify-center mb-5 rounded-full bg-indigo-600 p-5 text-white mx-auto w-20 h-20">
                  <Icon size={40} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {title}
                </h3>
                <p className="text-gray-700 opacity-90">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Meet the Founder */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 w-full max-w-sm mx-auto md:mx-0"
          >
            <Image
              src={founder.photo}
              alt={`Photo of ${founder.name}`}
              width={400}
              height={400}
              className="rounded-3xl shadow-xl object-cover"
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {founder.bio}
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4">
              {/* WhatsApp */}
              <a
                href={founder.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.38 0 0 5.38 0 12a11.9 11.9 0 001.69 6.19L0 24l5.91-1.55A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.88 9.88 0 01-5.31-1.55l-.38-.23-3.5.91.94-3.4-.25-.35A9.85 9.85 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.77c-.29-.15-1.72-.85-1.98-.95s-.46-.15-.65.15-.75.94-.92 1.14-.34.22-.63.07a8.11 8.11 0 01-2.4-1.48 9.17 9.17 0 01-1.71-2.12c-.18-.3-.02-.46.13-.6.14-.13.31-.34.46-.52.16-.19.21-.32.32-.53.1-.21.05-.39-.03-.54s-.65-1.56-.9-2.13c-.24-.57-.49-.49-.68-.5h-.58c-.2 0-.52.08-.79.37s-1.04 1.02-1.04 2.5 1.07 2.88 1.23 3.08 2.1 3.21 5.09 4.5c.71.3 1.26.48 1.69.61.71.22 1.36.19 1.87.12.57-.08 1.72-.7 1.96-1.37.24-.66.24-1.22.17-1.34s-.27-.21-.56-.36z" />
                </svg>
                WhatsApp
              </a>

              {/* Instagram */}
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5A3.75 3.75 0 0020 16.25v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
                Instagram
              </a>

              {/* LinkedIn */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition shadow-md"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 5.43 3.4 7 1.5 7S-2 5.43-2 3.5 0.57 0 2.5 0 4.98 1.57 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.7v2.2h.1c.5-.8 1.7-2.2 4-2.2 4.3 0 5.1 2.8 5.1 6.5V24h-4v-7.6c0-1.8-.1-4-2.5-4s-2.9 1.9-2.9 3.9V24h-4V8z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map(({ name, role, photo, bio, linkedin }) => (
              <article
                key={name}
                className="bg-indigo-50 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={photo}
                  alt={`Photo of ${name}`}
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  priority
                />
                <h3 className="mt-6 text-xl font-semibold text-indigo-900">
                  {name}
                </h3>
                <p className="text-indigo-700 mb-3 font-medium">{role}</p>
                <p className="text-gray-700 mb-5">{bio}</p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold"
                  aria-label={`Visit LinkedIn profile of ${name}`}
                >
                  View LinkedIn
                  <ArrowRight size={18} className="ml-2" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            What We Offer
          </h2>

          <Tab.Group
            selectedIndex={tabIdx}
            onChange={setTabIdx}
            as="div"
            className="max-w-4xl mx-auto"
          >
            <Tab.List className="flex space-x-8 justify-center mb-10 border-b border-indigo-200">
              {services.map(({ title }) => (
                <Tab
                  key={title}
                  className={({ selected }) =>
                    classNames(
                      "py-3 px-6 text-lg font-semibold rounded-t-lg",
                      selected
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "text-indigo-600 hover:bg-indigo-100"
                    )
                  }
                >
                  {title}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {services.map(({ features }, idx) => (
                <Tab.Panel
                  key={idx}
                  className="bg-white rounded-b-lg p-8 shadow-md"
                >
                  <ul className="list-disc list-inside space-y-4 text-gray-800 text-lg">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map(({ name, role, msg, avatar }) => (
              <blockquote
                key={name}
                className="bg-indigo-50 rounded-xl p-8 shadow-md flex flex-col items-center"
                tabIndex={0}
                aria-label={`Testimonial from ${name}, ${role}`}
              >
                <Image
                  src={avatar}
                  alt={`Photo of ${name}`}
                  width={80}
                  height={80}
                  className="rounded-full mb-6 object-cover"
                  priority
                />
                <p className="text-gray-900 italic text-lg mb-6">“{msg}”</p>
                <footer className="text-indigo-900 font-semibold">
                  {name}
                </footer>
                <span className="text-indigo-700">{role}</span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
