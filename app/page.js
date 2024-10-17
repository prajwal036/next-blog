import Image from "next/image";

import dynamic from "next/dynamic";

//importing bloglist dynamically for better code splitting
const BlogList = dynamic(() => import("@/app/components/BlogList"), {
  loading: () => <p className="mt-20 text-4xl">Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto text-center px-4 py-10">
      <div className="py-8 space-y-6 relative w-full h-[300px] md:h-96  flex flex-col justify-center rounded-xl">
        <Image src={"/img2.jpg"} fill className="object-cover" />
        <h1 className="header-title relative">Welcome to my Blog Page</h1>
        <h2 className="highlight relative">
          It's a homepage that lists all posts with their titles and a brief
          excerpt.
        </h2>
      </div>
      {/* Blog list component */}
      <BlogList />
    </main>
  );
}
