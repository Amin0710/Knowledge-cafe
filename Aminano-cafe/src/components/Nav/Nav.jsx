import React from "react";
import "./Nav.css";
import nav from "../../assets/nav.jpeg";

const Nav = () => {
	return (
		<>
			<div className="navContent">
				<div>
					<p>Aminano Cafe</p>
				</div>
				<div>
					<img className="user" src={nav} alt="" />
				</div>
			</div>
			<div style={{ border: "1px solid #969696" }}></div>
		</>
	);
};

export default Nav;
