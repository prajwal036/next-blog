"use client";
import React, { useEffect } from "react";
import Card from "./Card";
import { useBlogs } from "../context/BlogContext";

const BlogList = () => {
  const { blogs, setBlogs } = useBlogs(); // destructing the states from useBlogs

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
      } catch (e) {
        console.error("Failed to fetch posts:", err.message);
      }
    };
    fetchPosts();
  }, [setBlogs]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {blogs?.map((item) => (
        <Card item={item} key={item.id} /> //Card component
      ))}
    </div>
  );
};

export default BlogList;
