import React from "react";
import "./Nav.css";
import nav from "../../assets/nav.jpeg";

const Nav = () => {
	return (
		<>
			<div className="navContent">
				<div>
					<h2>Aminano Cafe</h2>
				</div>
				<div>
					<img src={nav} alt="" />
				</div>
			</div>
			<div style={{ border: "1px solid #E3E3E3" }}></div>
		</>
	);
};

export default Nav;
