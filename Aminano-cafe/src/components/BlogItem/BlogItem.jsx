import React from "react";
import "./BlogItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const BlogItem = (props) => {
	const { coverImg, authorImg, authorName, title, date, tags, readTime } =
		props.blog;
	const handleAddToList = props.handleAddToList;
	const handleBookmark = props.handleBookmark;

	return (
		<div>
			<img className="cover" src={coverImg} alt="" />
			<div className="read-info">
				<div className="author-info">
					<img className="user" src={authorImg} alt="" />
					<div>
						<p style={{ fontSize: "24px" }}>{authorName}</p>
						<p
							style={{
								fontSize: "16px",
								fontWeight: "600",
								color: "#969696",
							}}>
							{date}
						</p>
					</div>
				</div>
				<p className="gray-small">
					{readTime} min read{" "}
					<i onClick={() => handleBookmark(props.blog)} className="icon">
						<FontAwesomeIcon icon={faBookmark} />
					</i>
				</p>
			</div>
			<p style={{ padding: "10px 0" }}>{title}</p>
			<p className="gray-small">
				{tags[0]} {tags[1]} {tags[2]}
			</p>
			<a onClick={() => handleAddToList(props.blog)}>Mark as read</a>
			<div style={{ border: "1px solid #969696", margin: "40px 0" }}></div>
		</div>
	);
};

export default BlogItem;
