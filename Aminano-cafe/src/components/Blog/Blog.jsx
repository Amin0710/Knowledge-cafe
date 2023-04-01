import React, { useState, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./Blog.css";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [list, setList] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	const handleAddToList = (blog) => {
		const newList = [...list, blog];
		setList(newList);
	};

	return (
		<div className="blog-list-container">
			<div className="blog-container">
				{blogs.map((blog) => (
					<BlogItem
						key={blog.id}
						blog={blog}
						handleAddToList={handleAddToList}></BlogItem>
				))}
			</div>
			<div className="record-container">
				<div className="time-container">
					<p className="record-header">
						Spent time on read :{" "}
						{list.map((l) => l.readTime).reduce((b, a) => b + a, 0)} min{" "}
					</p>
				</div>
				<div className="bookmark-container">
					<p className="record-header">Bookmarked Blogs : 8 </p>
				</div>
			</div>
		</div>
	);
};

export default Blog;
