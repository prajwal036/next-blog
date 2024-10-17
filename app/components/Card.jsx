import React from "react";
import Link from "next/link";
const Card = ({ item }) => {
  //capitalises first letter of the title
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="px-4 py-2 border rounded-2xl text-left relative min-h-52 flex flex-col gap-4">
      <h3 className="text-lg font-semibold min-h-10 py-2">
        {capitalizeFirstLetter(item.title)}
      </h3>
      {/* body of the blog */}
      <p className="text-sm grow">{item.body?.substring(0, 100)}...</p>
      <div className="flex justify-end ">
        <Link
          href={`/${item.id}`} // it takes to the dynamic route
          className="py-2 px-5 text-white bg-black rounded-xl hover:bg-pink-500 duration-200 delay-75 ease-in-out border"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
