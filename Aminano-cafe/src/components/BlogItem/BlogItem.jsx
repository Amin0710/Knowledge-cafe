import React from "react";
import "./BlogItem.css";

const BlogItem = (props) => {
	const { coverImg, authorImg, authorName, title, date, tags, readTime } =
		props.blog;
	return (
		<div className="blog">
			<img className="cover" src={coverImg} alt="" />
			<div className="read-info">
				<div className="author-info">
					<img className="user" src={authorImg} alt="" />
					<div>
						<p style={{ fontSize: "24px" }}>{authorName}</p>
						<p
							style={{ fontSize: "16px", fontWeight: "600", color: "#969696" }}>
							{date}
						</p>
					</div>
				</div>
				<p className="gray-small">{readTime} min read</p>
			</div>
			<p>{title}</p>
			<p className="gray-small">
				{tags[0]} {tags[1]} {tags[2]}
			</p>
			<div style={{ border: "1px solid #969696", margin: "40px 0" }}></div>
		</div>
	);
};

export default BlogItem;
