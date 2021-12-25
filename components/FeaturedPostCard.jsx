import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const FeaturedPostCard = ({ post }) => (
  <div className="relative select-none h-72">
    <div
      className="absolute inline-block w-full bg-center bg-no-repeat bg-cover rounded-lg shadow-md h-[100%]"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute w-full bg-center rounded-lg opacity-50 bg-gradient-to-b from-gray-700 via-gray-900 to-black h-72" />
    <div className="absolute flex flex-col items-center justify-center w-full h-full p-4 rounded-lg">
      <p className="mb-4 text-xs font-semibold text-white text-shadow">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="mb-4 text-2xl font-semibold text-center text-white text-shadow">
        {post.title}
      </p>
      <div className="absolute bottom-0 flex items-center justify-center w-full bg-black bg-opacity-10 bg-gradient-to-t from-black to-transparent ">
        <div className="flex justify-center py-4">
          <Image
            unoptimized
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline ml-2 font-medium text-white align-middle">
            {post.author.name}
          </p>
        </div>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="absolute w-full h-full cursor-pointer" />
    </Link>
  </div>
);

export default FeaturedPostCard;
