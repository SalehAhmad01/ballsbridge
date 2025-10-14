import React from "react";

const BlogCard = ({ title, date, image, excerpt, author }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-transform">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-primary transition">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
        <div className="flex items-center justify-between text-gray-400 text-sm">
          <span>{date}</span>
          <span>By {author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
