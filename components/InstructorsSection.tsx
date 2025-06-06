import React from "react";
import { instructors } from "../utils/data";
import { Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "./Link";

const InstructorsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our instructors are passionate professionals with years of
            experience in their fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-blue-100">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {instructor.name}
                </h3>
                <p className="text-blue-600 mb-4">{instructor.role}</p>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {instructor.bio}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  {instructor.socialLinks.twitter && (
                    <Link
                      to={instructor.socialLinks.twitter}
                      external
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </Link>
                  )}

                  {instructor.socialLinks.linkedin && (
                    <Link
                      to={instructor.socialLinks.linkedin}
                      external
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  )}

                  {instructor.socialLinks.github && (
                    <Link
                      to={instructor.socialLinks.github}
                      external
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
