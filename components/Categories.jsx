import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-[#202933] text-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-2">Categories</h3>
      {categories.map((category) => (
        <div key={category.slug}>
          <Link href={`/category/${category.slug}`}>
            <span className="cursor-pointer block pb-3 mb-3">
              {category.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
