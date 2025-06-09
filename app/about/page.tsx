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
    name: "Timothy",
    role: "Full Stack Developer",
    msg: "This company’s training transformed my career. The instructors are knowledgeable and supportive.",
    avatar: "/student3.jpg",
  },
  {
    name: "Paul",
    role: "Data Scientist",
    msg: "Excellent hands-on learning with real-world projects. The support team is always responsive.",
    avatar: "/student2.jpg",
  },
  {
    name: "Joshua",
    role: "Front-end Developer",
    msg: "The product management training was thorough and practical. Highly recommend their courses!",
    avatar: "/student1.jpg",
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
    <main className="antialiased font-sans text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white py-24 dark:from-indigo-800 dark:to-indigo-900"
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
            className="text-xl max-w-xl mx-auto text-indigo-200 mb-12 leading-relaxed dark:text-indigo-300"
          >
            Delivering cutting-edge software solutions paired with immersive
            tech education to fuel your growth and success.
          </motion.p>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 focus:outline-none text-white px-14 py-4 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105 active:scale-95 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-300"
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
        className="py-24 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-28">
          {/* Text Section */}
          <div className="flex flex-col justify-center max-w-xl mx-auto md:mx-0">
            <h2
              id="mission-vision-title"
              className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 mb-8 leading-tight"
            >
              Our Mission & Vision
            </h2>
            <article className="space-y-12 text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed">
              <section aria-labelledby="mission-title">
                <h3
                  id="mission-title"
                  className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3"
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
                  className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3"
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
            className="flex flex-col justify-center gap-12 max-w-md mx-auto md:mx-0 border-l border-gray-200 dark:border-gray-700 pl-12"
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
                className="group relative bg-indigo-50 dark:bg-indigo-900 p-8 rounded-xl shadow-lg cursor-default focus:outline-none focus:ring-4 focus:ring-indigo-500 transition transform hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Decorative icon or number circle */}
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-indigo-700 text-white font-bold text-2xl select-none">
                  {num}
                </div>
                <p className="text-indigo-900 dark:text-indigo-200 font-semibold tracking-wide pl-6">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map(({ icon: Icon, title, description }) => (
              <motion.article
                key={title}
                className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl cursor-default transition-shadow"
                whileHover={{ scale: 1.04 }}
                tabIndex={0}
                aria-label={title}
              >
                <div className="inline-flex items-center justify-center mb-5 rounded-full bg-indigo-600 p-5 text-white mx-auto w-20 h-20">
                  <Icon size={40} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 opacity-90">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Meet the Founder
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
                {/* SVG icon omitted for brevity */}
                WhatsApp
              </a>

              {/* Instagram */}
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition shadow-md"
              >
                Instagram
              </a>

              {/* LinkedIn */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition shadow-md"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map(({ name, role, photo, bio, linkedin }) => (
              <article
                key={name}
                className="bg-indigo-50 dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center"
              >
                <Image
                  src={photo}
                  alt={`Photo of ${name}`}
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  priority
                />
                <h3 className="mt-6 text-xl font-semibold text-indigo-900 dark:text-white">
                  {name}
                </h3>
                <p className="text-indigo-700 dark:text-indigo-300 mb-3 font-medium">
                  {role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-5">{bio}</p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 font-semibold"
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            What We Offer
          </h2>

          <Tab.Group
            selectedIndex={tabIdx}
            onChange={setTabIdx}
            as="div"
            className="max-w-4xl mx-auto"
          >
            <Tab.List className="flex space-x-8 justify-center mb-10 border-b border-indigo-200 dark:border-indigo-700">
              {services.map(({ title }) => (
                <Tab
                  key={title}
                  className={({ selected }) =>
                    classNames(
                      "py-3 px-6 text-lg font-semibold rounded-t-lg",
                      selected
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "text-indigo-600 hover:bg-indigo-100 dark:text-indigo-300 dark:hover:bg-indigo-900"
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
                  className="bg-white dark:bg-gray-800 rounded-b-lg p-8 shadow-md"
                >
                  <ul className="list-disc list-inside space-y-4 text-gray-800 dark:text-gray-200 text-lg">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map(({ name, role, msg, avatar }) => (
              <blockquote
                key={name}
                className="bg-indigo-50 dark:bg-gray-800 rounded-2xl p-8 shadow-xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
                tabIndex={0}
                aria-label={`Testimonial from ${name}, ${role}`}
              >
                <div className="w-24 h-24 mb-6 relative">
                  <Image
                    src={avatar}
                    alt={`Photo of ${name}`}
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                    sizes="96px"
                    priority
                  />
                </div>
                <p className="text-gray-900 dark:text-gray-200 italic text-lg mb-6">
                  “{msg}”
                </p>
                <footer className="text-indigo-900 dark:text-white font-semibold">
                  {name}
                </footer>
                <span className="text-indigo-700 dark:text-indigo-300 text-sm">
                  {role}
                </span>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
