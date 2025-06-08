"use client";

import { Clock, Users, Star, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
    >
      <div className="relative overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {course.level}
          </span>
        </div>
        {course.originalPrice && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Save ${course.originalPrice - course.price}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-blue-600 font-medium">
            {course.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.studentsEnrolled.toLocaleString()}</span>
            </div>
          </div>
          {course.certificate && (
            <div className="flex items-center space-x-1 text-green-600">
              <Award className="h-4 w-4" />
              <span className="text-sm font-medium">Certificate</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${course.price}
            </span>
            {course.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ${course.originalPrice}
              </span>
            )}
          </div>
          <span className="text-blue-600 font-medium group-hover:underline">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
