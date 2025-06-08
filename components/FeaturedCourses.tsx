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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our most popular courses and start your journey towards
            mastery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button variant="outline" to="/courses" className="group">
            Browse All Courses
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
