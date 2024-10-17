"use client";

import { useParams } from "next/navigation";
import { useBlogs } from "../context/BlogContext";
import React from "react";
import CommentsSection from "../components/CommentsSection";

const DetailedPage = () => {
  const { id } = useParams(); //it gets the params id from the dynamic route
  const { blogs } = useBlogs(); // using blogs state from useBlogs context

  const post = blogs.find((p) => p.id === Number(id)); // it filters the blog from the lists of blogs

  if (!post)
    //if it couldn't find the post then return the following
    return (
      <div className="text-center text-3xl mt-10 font-semibold">
        Post not found
      </div>
    );

  //capitalises the first Letter of blog
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <main className="max-w-screen-xl mx-auto px-4">
      <div className="py-8 space-y-6 md:text-center">
        <h1 className="header-title">{capitalizeFirstLetter(post?.title)}</h1>
        <h2 className="highlight">{post?.body}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {/* it will show comments section  */}
        <CommentsSection />
      </div>
    </main>
  );
};

export default DetailedPage;
