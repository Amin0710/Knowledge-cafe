import React, { useState, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./Blog.css";
import toast, { Toaster } from "react-hot-toast";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [time, setTime] = useState([]);
	// const [list, setList] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	const handleAddToList = (blog) => {
		const newTime = [...time, blog];
		setTime(newTime);
	};

	const bookmarked = [];

	const handleBookmark = (blog) => {
		if (bookmarked.includes(blog.id)) {
			toast.error("This didn't work. Already bookmarked", {
				duration: 2000,
			});
		} else {
			bookmarked.push(blog.id);
		}
	};

	return (
		<div className="blog-list-container">
			<Toaster />
			<div className="blog-container">
				{blogs.map((blog) => (
					<BlogItem
						key={blog.id}
						blog={blog}
						handleAddToList={handleAddToList}
						handleBookmark={handleBookmark}></BlogItem>
				))}
			</div>
			<div className="record-container">
				<div className="time-container">
					<p className="record-header">
						Spent time on read :{" "}
						{time.map((l) => l.readTime).reduce((b, a) => b + a, 0)} min{" "}
					</p>
				</div>
				<div className="bookmark-container">
					<p className="record-header">
						Bookmarked Blogs : {bookmarked.length}{" "}
					</p>
					<div className="blog-container">
						{bookmarked.map((id) => (
							<BlogItem
								key={blog.id}
								blog={blog}
								handleAddToList={handleAddToList}
								handleBookmark={handleBookmark}></BlogItem>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
