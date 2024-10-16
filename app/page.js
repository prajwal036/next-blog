"use client";
import Image from "next/image";
import { useEffect } from "react";
import { usePosts } from "./context/BlogContext";
import Card from "./components/Card";

export default function Home() {
  const { posts, setPosts } = usePosts(); // destructing the states from usePosts

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, [setPosts]);

  return (
    <main className="max-w-screen-xl mx-auto text-center px-4 py-10">
      <div className="py-8 space-y-6 relative w-full h-[400px]  flex flex-col justify-center rounded-xl">
        <Image src={"/img2.jpg"} fill className="object-cover" />

        <h1 className="header-title relative">Welcome to my Blog Page</h1>
        <h2 className="highlight relative">
          It's a homepage that lists all posts with their titles and a brief
          excerpt.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {posts?.map((item) => (
          <Card item={item} key={item.id} /> //Card component
        ))}
      </div>
    </main>
  );
}
