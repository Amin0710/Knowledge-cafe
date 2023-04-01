import React from "react";
import "./Bookmark.css";

const Bookmark = (props) => {
	return (
		<div className="bookmarkList">
			<p>{props.title}</p>
		</div>
	);
};

export default Bookmark;
