"use client";
import React, { useState } from "react";
import { testimonials } from "../utils/data";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have transformed their careers with our
            courses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden pb-10">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 md:p-10 relative">
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-blue-100" />

                    <div className="relative z-10">
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                        />
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-500">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeIndex === index
                        ? "bg-blue-600 w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
