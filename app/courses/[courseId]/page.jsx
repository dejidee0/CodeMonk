"use client";
import { courses } from "../../../utils/courses";
import Image from "next/image";
import { useParams } from "next/navigation";
import { createWhatsAppLink } from "../../../utils/whatsApp";

export default function CourseDetail() {
  const params = useParams();
  const { courseId } = params;
  const course = courses.find((c) => c.id === courseId);
  const whatsappURL = createWhatsAppLink("+2348062907833", {
    title: course.title,
    price: course.price,
    level: course.level,
    duration: course.duration,
  });

  if (!course) {
    return (
      <main className="w-full h-screen flex items-center justify-center bg-gray-100 text-xl text-gray-600">
        Course not found.
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero */}
      <section className="w-full relative h-[450px] overflow-hidden bg-gray-200">
        <Image
          src={course.image}
          alt={`${course.title} cover`}
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center">
          <div className="max-w-7xl w-full mx-auto px-6 text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {course.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 italic">
              {course.category} | Level: {course.level} | Duration:{" "}
              {course.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
        {/* Pricing & Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center text-lg">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Current Price</p>
            <p className="text-3xl font-extrabold text-red-600">
              ${course.price.toFixed(2)}{" "}
              <span className="text-gray-400 text-lg line-through ml-2">
                ${course.originalPrice.toFixed(2)}
              </span>
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Students Enrolled</p>
            <p className="font-bold">
              {course.studentsEnrolled.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Rating</p>
            <p className="font-bold text-yellow-500">{course.rating} ⭐</p>
          </div>
        </div>

        {/* Instructor */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Instructor</h2>
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <p className="font-semibold text-lg">{course.instructor}</p>
            <p className="text-gray-600">{course.instructorBio}</p>
          </div>
        </section>

        {/* Description */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Course Description</h2>
          <p className="text-gray-700 leading-relaxed">{course.description}</p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Skills You'll Gain</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-700">
            {course.skills.map((skill) => (
              <li key={skill} className="bg-gray-100 rounded px-4 py-2">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Prerequisites */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Prerequisites</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {course.prerequisites.map((pre) => (
              <li key={pre}>{pre}</li>
            ))}
          </ul>
        </section>

        {/* Curriculum */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Curriculum</h2>
          <div className="space-y-6">
            {course.curriculum.map(({ module, lessons }) => (
              <div
                key={module}
                className="border border-gray-100 p-5 rounded-lg shadow-sm bg-white"
              >
                <h3 className="text-lg font-semibold mb-2">{module}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {lessons.map((lesson) => (
                    <li key={lesson}>{lesson}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What You Will Learn */}
        <section>
          <h2 className="text-2xl font-bold mb-3">What You’ll Learn</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {course.whatYouWillLearn.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-bold mb-3">Course Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
            {course.features.map((feature) => (
              <li key={feature} className="bg-gray-100 px-4 py-2 rounded">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Additional Info */}
        <section className="space-y-2">
          <h2 className="text-2xl font-bold mb-3">Additional Information</h2>
          <p>
            <span className="font-semibold">Certificate:</span>{" "}
            {course.certificate ? "Yes" : "No"}
          </p>
          <p>
            <span className="font-semibold">Support:</span> {course.support}
          </p>
          <p>
            <span className="font-semibold">Access:</span> {course.access}
          </p>
        </section>

        {/* Enroll CTA */}
        <div className="text-center mt-20">
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-xl bg-green-600 hover:bg-green-700
               transition text-white font-semibold rounded-lg shadow"
          >
            <span className="inline-flex items-center gap-2">
              Enroll via WhatsApp
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.297-.767.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.669-.51l-.571-.01c-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.877 1.214 3.074.149.198 2.094 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.873.119.571-.086 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            </span>
          </a>
          <p className="mt-2 text-gray-500 text-sm">
            Opens WhatsApp with a pre-filled message
          </p>
        </div>
      </div>
    </main>
  );
}
