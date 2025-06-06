import React from "react";
import { blogPosts } from "../utils/data";
import { Link } from "./Link";
import { ArrowRight } from "lucide-react";

const BlogSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tech trends, tutorials, and career
            advice
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2 hover:text-blue-900 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-gray-600 text-sm">
                    By{" "}
                    <span className="text-blue-900 font-medium">
                      {post.author}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            View all articles
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
