"use client";
import React, { useState } from "react";
import { courses } from "../../utils/data";
import CourseCard from "../../components/CourseCard";
import { Search, Filter, X } from "lucide-react";

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );
  const levels = ["Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? course.category === selectedCategory
      : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedLevel("");
  };

  return (
    <div>
      <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Browse Our Courses
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed to help you
            master in-demand skills and advance your career
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 border border-blue-800 rounded-lg bg-blue-800/50 backdrop-blur-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium"
            >
              <Filter className="h-5 w-5 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filter Sidebar */}
          <div
            className={`md:w-1/4 ${showFilters ? "block" : "hidden md:block"}`}
          >
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
                {(selectedCategory || selectedLevel) && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Reset
                  </button>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category}`}
                        name="category"
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-gray-700"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Level
                </h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level} className="flex items-center">
                      <input
                        type="radio"
                        id={`level-${level}`}
                        name="level"
                        checked={selectedLevel === level}
                        onChange={() => setSelectedLevel(level)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`level-${level}`}
                        className="ml-2 text-gray-700"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="md:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredCourses.length}{" "}
                {filteredCourses.length === 1 ? "Course" : "Courses"}{" "}
                {selectedCategory && `in ${selectedCategory}`}{" "}
                {selectedLevel && `for ${selectedLevel} Level`}
              </h2>
              <div className="text-gray-500 text-sm">
                Showing {filteredCourses.length} of {courses.length} courses
              </div>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  No courses found
                </h3>
                <p className="text-gray-500 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
