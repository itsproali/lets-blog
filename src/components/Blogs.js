import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Blogs = () => {
  const allBlog = [
    {
      _id: 1,
      title: "First Blog",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo harum explicabo eligendi nemo! Ipsum iusto laborum rerum iste? Debitis temporibus exercitationem quibusdam cumque qui ducimus voluptatum nemo aperiam iure sint dolorem distinctio provident alias, tempora, dolorum suscipit harum, tempore quo porro esse. Eligendi, optio. Ipsam praesentium atque, sunt non vel placeat, dolore repellat voluptatibus corrupti illo quisquam laborum unde ratione consequatur quia possimus! Excepturi libero sunt rerum vitae. Debitis nemo laudantium reiciendis culpa ad ea delectus, aspernatur voluptatibus magni ratione rem quisquam laboriosam eligendi quas hic nam at inventore odio molestias corporis ipsum, atque voluptatum! Dolorem unde libero nihil exercitationem.",
      img: "https://thrivemyway.com/wp-content/uploads/2021/10/Personal-Blogs.jpg",
      tags: ["personal", "tour"],
      blog_no: 1,
      author: "Mohammad Ali",
    },
    {
      _id: 2,
      title: "Second Blog",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo harum explicabo eligendi nemo! Ipsum iusto laborum rerum iste? Debitis temporibus exercitationem quibusdam cumque qui ducimus voluptatum nemo aperiam iure sint dolorem distinctio provident alias, tempora, dolorum suscipit harum, tempore quo porro esse. Eligendi, optio. Ipsam praesentium atque, sunt non vel placeat, dolore repellat voluptatibus corrupti illo quisquam laborum unde ratione consequatur quia possimus! Excepturi libero sunt rerum vitae. Debitis nemo laudantium reiciendis culpa ad ea delectus, aspernatur voluptatibus magni ratione rem quisquam laboriosam eligendi quas hic nam at inventore odio molestias corporis ipsum, atque voluptatum! Dolorem unde libero nihil exercitationem.",
      img: "https://thrivemyway.com/wp-content/uploads/2021/10/Personal-Blogs.jpg",
      tags: ["personal", "tour"],
      blog_no: 2,
      author: "Mohammad Ali",
    },
    {
      _id: 3,
      title: "Third Blog",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo harum explicabo eligendi nemo! Ipsum iusto laborum rerum iste? Debitis temporibus exercitationem quibusdam cumque qui ducimus voluptatum nemo aperiam iure sint dolorem distinctio provident alias, tempora, dolorum suscipit harum, tempore quo porro esse. Eligendi, optio. Ipsam praesentium atque, sunt non vel placeat, dolore repellat voluptatibus corrupti illo quisquam laborum unde ratione consequatur quia possimus! Excepturi libero sunt rerum vitae. Debitis nemo laudantium reiciendis culpa ad ea delectus, aspernatur voluptatibus magni ratione rem quisquam laboriosam eligendi quas hic nam at inventore odio molestias corporis ipsum, atque voluptatum! Dolorem unde libero nihil exercitationem.",
      img: "https://thrivemyway.com/wp-content/uploads/2021/10/Personal-Blogs.jpg",
      tags: ["personal", "tour"],
      blog_no: 3,
      author: "Mohammad Ali",
    },
    {
      _id: 4,
      title: "Forth Blog",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo harum explicabo eligendi nemo! Ipsum iusto laborum rerum iste? Debitis temporibus exercitationem quibusdam cumque qui ducimus voluptatum nemo aperiam iure sint dolorem distinctio provident alias, tempora, dolorum suscipit harum, tempore quo porro esse. Eligendi, optio. Ipsam praesentium atque, sunt non vel placeat, dolore repellat voluptatibus corrupti illo quisquam laborum unde ratione consequatur quia possimus! Excepturi libero sunt rerum vitae. Debitis nemo laudantium reiciendis culpa ad ea delectus, aspernatur voluptatibus magni ratione rem quisquam laboriosam eligendi quas hic nam at inventore odio molestias corporis ipsum, atque voluptatum! Dolorem unde libero nihil exercitationem.",
      img: "https://thrivemyway.com/wp-content/uploads/2021/10/Personal-Blogs.jpg",
      tags: ["personal", "tour"],
      blog_no: 4,
      author: "Mohammad Ali",
    },
  ];
  const { blogs } = useSelector(state => state.blog);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            to={`/blog/${blog._id}`}
            className="rounded-lg bg-white shadow-lg flex flex-col justify-between h-[500px]"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="block w-full h-[70%] rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl text-secondary font-semibold">
                {blog.title}
              </h3>
              <p className="">{blog.description.slice(0, 100)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
