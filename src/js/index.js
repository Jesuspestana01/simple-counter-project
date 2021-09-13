//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { SimpleCounter } from "./component/SimpleCounter.jsx";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//render your react application

let counterTime = 0;
setInterval(() => {
	const four = Math.floor((counterTime / 1000) % 10);
	const three = Math.floor((counterTime / 100) % 10);
	const two = Math.floor((counterTime / 10) % 10);
	const one = Math.floor((counterTime / 1) % 10);

	counterTime++;
	ReactDOM.render(
		<SimpleCounter
			fourthNumber={four}
			thirdNumber={three}
			secondNumber={two}
			firstNumber={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
