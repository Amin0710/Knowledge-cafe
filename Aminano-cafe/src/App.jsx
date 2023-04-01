import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Nav></Nav>
			<Blog></Blog>
			<Footer></Footer>
		</div>
	);
}

export default App;
