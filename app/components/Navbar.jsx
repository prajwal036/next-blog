import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-14 flex justify-between py-4 shadow-lg items-center">
      <div className="max-w-screen-xl mx-auto w-full px-4">
        <Link href={"/"} className="text-3xl font-semibold">
          Prajwal's Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
