"use client";
import { createContext, useState, useContext } from "react";

const BlogsContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); // state for adding all blogs data

  return (
    <BlogsContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogsContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogsContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};
