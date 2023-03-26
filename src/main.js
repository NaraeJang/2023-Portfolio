import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const input = document.querySelector("input");
const body = document.querySelector("body");

const toggleThemeMode = ()=> {
    body.classList.toggle("dark");
};

input.onchange = toggleThemeMode;


ReactDOM.render(<App />, document.getElementById("root"));
