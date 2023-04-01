import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Blog from "./components/Blog/Blog";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Nav></Nav>
		</div>
	);
}

export default App;
