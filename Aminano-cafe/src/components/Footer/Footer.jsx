import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div id="allQA">
			<p className="question">1. Props vs state?</p>
			<p className="answer">
				Value of State do not change, props value can change. props used for
				passing data from a parent component to its child components.State
				represents the internal data of a component that can change over time.
				state change data within component. props are used to pass data.
			</p>

			<p className="question">2. How does useState work?</p>
			<p className="answer">
				useState is a function. it has two element, current value and a function
				to update value. When the state is updated, React will update the
				component with the new value.
			</p>

			<p className="question">
				3. Purpose of useEffect other than fetching data?
			</p>
			<p className="answer">
				we can use it to update document title, also we can use it for Managing
				timers and intervals. another use can be Animating elements on the page.
				most used one might be keyboard and mouse event handaling like onClick.
			</p>

			<p className="question">4. How Does React work?</p>
			<p className="answer">
				React is a JavaScript library.It breaks down the UI into reusable
				components, use Virtual DOM to update components. and composes
				components together to create complex UIs.
			</p>
		</div>
	);
};

export default Footer;
