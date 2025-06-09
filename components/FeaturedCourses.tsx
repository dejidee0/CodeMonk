"use client";
import React, { useState } from "react";
import { courses } from "../utils/courses";
import CourseCard from "./CourseCard";
import { ChevronRight } from "lucide-react";

import { Button } from "./Button";

const FeaturedCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Courses" },
    { id: "Web Development", name: "Web Development" },
    { id: "Data Science", name: "Data Science" },
    { id: "Mobile Development", name: "Mobile" },
    { id: "Design", name: "Design" },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Featured Courses
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore our most popular courses and start your journey towards
            mastery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Button
            variant="outline"
            to="/courses"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 border border-blue-700 dark:border-blue-400 rounded-lg text-blue-700 dark:text-blue-400 font-semibold transition hover:bg-blue-700 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-600"
          >
            Browse All Courses
            <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
