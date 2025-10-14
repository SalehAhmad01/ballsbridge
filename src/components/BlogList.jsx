import React, { useState } from "react";
import BlogCard from "@/components/BlogCard";

const BlogList = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Safety First: How BallsBridge Ensures Site Safety on Every Project",
      date: "October 10, 2025",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Safety is our top priority. Discover the strategies and daily practices that keep our workers and clients safe on construction sites.",
      author: "Engr. Musa Ali",
    },
    {
      id: 2,
      title: "Modern Building Trends in Nigeria 2025",
      date: "September 25, 2025",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "From smart homes to sustainable architecture, explore the construction trends shaping Nigeria’s modern landscape.",
      author: "Saleh Ahmad",
    },
    {
      id: 3,
      title: "Behind the Scenes: How We Completed the Abuja Bridge Project Early",
      date: "August 30, 2025",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "A look at our planning and teamwork that helped deliver one of Abuja’s most important infrastructure projects ahead of schedule.",
      author: "Fatima Yusuf",
    },
    {
      id: 4,
      title: "Why Concrete Quality Matters More Than You Think",
      date: "July 15, 2025",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Using low-quality concrete can cost millions. Here’s how BallsBridge ensures top-grade materials for every foundation we pour.",
      author: "Engr. Hassan Bello",
    },
    {
      id: 5,
      title: "The Future of Green Construction in Nigeria",
      date: "June 10, 2025",
      image:
        "https://images.unsplash.com/photo-1529429611273-8d37d87d3d0c?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Learn how we’re incorporating eco-friendly materials and sustainable designs to reduce environmental impact in all our projects.",
      author: "Zainab Ibrahim",
    },
  ]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Latest News & Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest updates, trends, and success stories
            from BallsBridge Construction. We build more than structures — we
            build trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
