import React from "react";
import { Course } from "../types";
import { Link } from "./Link";
import { Users, Clock, BarChart } from "lucide-react";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const {
    title,
    description,
    price,
    discountPrice,
    duration,
    level,
    image,
    instructor,
    enrolledStudents,
    rating,
    slug,
  } = course;

  // Calculate discount percentage
  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <Link to={`/courses/${slug}`} className="block relative">
        <div className="aspect-video w-full bg-gray-200 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {discountPrice && (
          <div className="absolute top-4 right-4 bg-orange-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
            {discountPercentage}% OFF
          </div>
        )}
      </Link>

      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span
            className={`
            inline-block px-2 py-1 rounded-md text-xs font-medium
            ${level === "Beginner" ? "bg-green-100 text-green-700" : ""}
            ${level === "Intermediate" ? "bg-blue-100 text-blue-700" : ""}
            ${level === "Advanced" ? "bg-purple-100 text-purple-700" : ""}
          `}
          >
            {level}
          </span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-900 transition-colors">
          <Link to={`/courses/${slug}`}>{title}</Link>
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {enrolledStudents.toLocaleString()} students
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <div className="flex mr-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            {rating}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-gray-600 text-sm">
            By <span className="text-blue-900 font-medium">{instructor}</span>
          </div>
          <div>
            {discountPrice ? (
              <div className="flex items-center">
                <span className="text-gray-400 line-through text-sm mr-2">
                  ${price}
                </span>
                <span className="text-blue-900 font-bold text-xl">
                  ${discountPrice}
                </span>
              </div>
            ) : (
              <span className="text-blue-900 font-bold text-xl">${price}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
