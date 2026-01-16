import React from "react";
import { motion } from "framer-motion";
import blueprint from "@/assets/images/blueprint.webp";

const BlogHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Parallax-like fixed position or simple cover */}
      <div className="absolute inset-0 z-0">
        <img
          src={blueprint}
          alt="Construction Blueprint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent text-accent mb-6 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            Updates from BallsBridge
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading tracking-tight leading-tight">
            Newsroom & Insights
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Expert perspectives on construction, safety standards, and project
            highlights from Nigeria’s trusted engineering team.
          </p>
        </motion.div>
      </div>

      {/* Decorative Bottom Curve/Fade (Optional) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default BlogHero;
