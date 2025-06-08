"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { courses } from "@/utils/courses";

import { Search, Filter, X } from "lucide-react";
import debounce from "lodash.debounce";

const CourseCard = dynamic(() => import("@/components/CourseCard"), {
  loading: () => <p className="text-gray-500">Loading...</p>,
});

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // new state for width

  const levels = ["Beginner", "Intermediate", "Advanced"];

  const categories = useMemo(
    () => Array.from(new Set(courses.map((course) => course.category))),
    []
  );

  // Update windowWidth on client only
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    handleResize(); // set initially on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchChange = useCallback(
    debounce((value: string) => setSearchTerm(value), 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = selectedCategory
        ? course.category === selectedCategory
        : true;

      const matchesLevel = selectedLevel
        ? course.level === selectedLevel
        : true;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [searchTerm, selectedCategory, selectedLevel]);

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedLevel("");
  };

  // Compute if sticky should be applied, but only when windowWidth is known
  const isSticky = windowWidth !== null && (showFilters || windowWidth >= 768);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Browse Our Courses
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of courses designed to help you
            master in-demand skills and advance your career.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for courses..."
              onChange={handleInputChange}
              className="block w-full pl-10 pr-4 py-3 border border-blue-800 rounded-lg bg-blue-800/50 backdrop-blur-sm text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search courses"
            />
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 container mx-auto px-4 py-12 flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="md:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 font-medium"
              aria-expanded={showFilters}
              aria-controls="filter-panel"
            >
              <Filter className="h-5 w-5 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          <aside
            id="filter-panel"
            className={`
              md:w-1/4
              ${showFilters ? "block" : "hidden md:block"}
              bg-white rounded-xl shadow-sm p-6
              sticky md:top-24
              z-20
              md:h-[calc(100vh-6rem)]
              overflow-y-auto
            `}
            style={{
              position: isSticky ? "sticky" : "static",
              top: isSticky ? "6rem" : "auto",
            }}
          >
            {/* ...filters content unchanged... */}
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
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {categories.map((category) => (
                  <label
                    key={category}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === category}
                      onChange={() => setSelectedCategory(category)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Level</h3>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {levels.map((level) => (
                  <label
                    key={level}
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="level"
                      checked={selectedLevel === level}
                      onChange={() => setSelectedLevel(level)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">{level}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Course List */}
          <main className="md:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredCourses.length}{" "}
                {filteredCourses.length === 1 ? "Course" : "Courses"}{" "}
                {selectedCategory && `in ${selectedCategory}`}{" "}
                {selectedLevel && `for ${selectedLevel} Level`}
              </h2>
              <span className="text-gray-500 text-sm whitespace-nowrap">
                Showing {filteredCourses.length} of {courses.length} courses
              </span>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={resetFilters}
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default Courses;
