import ReactDOM from "react-dom";
import React from "react";
import "./imdb-index.scss";
import { Header } from "./components/Header";
import { App } from "./components/App";
import { Footer } from "./components/Footer";

ReactDOM.render(<Header/>,document.querySelector("header"));
ReactDOM.render(<App/>,document.querySelector("main"));
ReactDOM.render(<Footer/>,document.querySelector("footer"));