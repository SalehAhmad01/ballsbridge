import React from "react";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogCard = ({ title, date, image, excerpt, author }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wider">
          <span className="flex items-center gap-1 text-accent">
            <User className="w-3 h-3" /> {author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> 5 min read
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Footer / Link */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm font-semibold text-primary group-hover:underline decoration-accent underline-offset-4 transition-all flex items-center gap-1">
            Read Article
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
