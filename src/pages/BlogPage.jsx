import React from "react";
import Header from "@/components/Header";
import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlogHero />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
