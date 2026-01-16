import React, { useState } from "react";
import BlogCard from "@/components/BlogCard";
import { Filter, SlidersHorizontal } from "lucide-react";

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts] = useState([
    {
      id: 1,
      title: "Safety First: How BallsBridge Ensures Site Safety on Every Project",
      date: "October 10, 2025",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Safety is our top priority. Discover the strategies and daily practices that keep our workers and clients safe on construction sites.",
      author: "Tayyib Danpullo",
      category: "Safety",
    },
    {
      id: 2,
      title: "Modern Building Trends in Nigeria 2025",
      date: "September 25, 2025",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "From smart homes to sustainable architecture, explore the construction trends shaping Nigeria’s modern landscape.",
      author: "Engr Mahdi",
      category: "Trends",
    },
    {
      id: 3,
      title: "Behind the Scenes: How We Completed the Abuja Bridge Project Early",
      date: "August 30, 2025",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "A look at our planning and teamwork that helped deliver one of Abuja’s most important infrastructure projects ahead of schedule.",
      author: "Adamu Abuja",
      category: "Projects",
    },
    {
      id: 4,
      title: "Why Concrete Quality Matters More Than You Think",
      date: "July 15, 2025",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=60",
      excerpt:
        "Using low-quality concrete can cost millions. Here’s how BallsBridge ensures top-grade materials for every foundation we pour.",
      author: "Engr. Hamza Kano",
      category: "Technical",
    },
    {
      id: 5,
      title: "The Future of Green Construction in Nigeria",
      date: "June 10, 2025",
      image:
        "https://ccemagazine.com/wp-content/uploads/sites/11/2025/04/types-of-building-construction-types.png",
      excerpt:
        "Learn how we’re incorporating eco-friendly materials and sustainable designs to reduce environmental impact in all our projects.",
      author: "Tayyib Danpullo",
      category: "Sustainability",
    },
    {
      id: 6,
      title: "The Future of Green Construction in Nigeria",
      date: "June 10, 2025",
      image:
        "https://ccemagazine.com/wp-content/uploads/sites/11/2025/04/types-of-building-construction-types.png",
      excerpt:
        "Learn how we’re incorporating eco-friendly materials and sustainable designs to reduce environmental impact in all our projects.",
      author: "Tayyib Danpullo",
      category: "Sustainability",
    },
  ]);

  const categories = ["All", "Safety", "Projects", "Trends", "Technical", "Sustainability"];

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="bg-gray-50 py-16 min-h-screen">
      <div className="container px-6">

        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6 mb-12 border-b border-gray-200 pb-8">
          <div className="w-full md:w-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-heading">
              Latest Articles
            </h2>
            <p className="text-gray-500">
              Explore our latest thoughts and case studies.
            </p>
          </div>

          {/* Search & Filter */}

        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                ? "bg-primary text-white border-primary shadow-md transform scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">No articles found in this category.</p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-4 text-primary font-semibold hover:underline"
            >
              View all articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogList;
