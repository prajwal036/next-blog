import Image from "next/image";
import React, { useState } from "react";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  //handles the comment by adding comment into setComment state
  const handleAddComment = () => {
    console.log(newComment.trim());
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      <textarea
        className="border p-2 w-full mb-2 rounded-xl outline-none"
        value={newComment}
        rows={6}
        onChange={(e) => setNewComment(e.target.value)} // sets new comment when input changes
        placeholder="Write your comment here"
      />
      <button
        onClick={handleAddComment} // calls handlesAddComment on click
        className="py-2 px-5 text-white bg-black rounded-xl hover:bg-pink-500 duration-200 delay-75 ease-in-out border"
      >
        Submit
      </button>
      <div className="space-y-4 mt-6">
        {/* It shows the recent comments */}
        <h3 className="text-xl font-semibold">Recent Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="p-2 mb-2 flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden object-cover bg-cover">
                <Image src={"/img.jpg"} fill quality={80} />
              </div>
              <div className="space-y-2">
                <p className="text-lg">User</p>
                {comment}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsSection;
