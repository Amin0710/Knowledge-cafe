import React, { useState, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./Blog.css";
import toast, { Toaster } from "react-hot-toast";
import Bookmark from "../Bookmark/Bookmark";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	const [time, setTime] = useState([]);
	const [bookmark, setBookmark] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	const handleAddToList = (blog) => {
		const newTime = [...time, blog];
		setTime(newTime);
	};

	const handleBookmark = (blog) => {
		if (bookmark.includes(blog.id)) {
			toast.error("This didn't work. Already bookmarked", {
				duration: 2000,
			});
		} else {
			const newBookmark = [...bookmark, blog.id];
			setBookmark(newBookmark);
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
					<p className="record-header">Bookmarked Blogs : {bookmark.length} </p>
					<div className="blog-container">
						{bookmark.map((id) => (
							<Bookmark key={id}></Bookmark>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
