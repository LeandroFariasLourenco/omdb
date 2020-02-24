import ReactDOM from "react-dom";
import React from "react";
import "./imdb-index.scss";
import { App } from "./components/App";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

ReactDOM.render(<Header/>,document.querySelector("header"));

ReactDOM.render(<Footer/>,document.querySelector("footer"));