import React, { useState, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import "./Blog.css";

const Blog = () => {
	const [blogs, setBlogs] = useState([]);
	// const [cart, setCart] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	// const handleAddToCart = (blog) => {
	// 	const newCart = [...cart, blog];
	// 	setCart(newCart);
	// };
	return (
		<div className="blog-list-container">
			<div className="blog-container">
				{blogs.map((blog) => (
					<BlogItem
						key={blog.id}
						blog={blog}
						// handleAddToCart={handleAddToCart}
					></BlogItem>
				))}
			</div>
			<div className="list-container">
				<h4>Order Summary</h4>
				<p>Selected Items: </p>
			</div>
		</div>
	);
};

export default Blog;
