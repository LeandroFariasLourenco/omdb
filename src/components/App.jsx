import React from 'react'
import SearchBox from "./main/SearchBox";
import Showcase from "./main/Showcase";
import { store } from "./../redux/store";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Movie from "./main/Movie";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <section className="wrapper">
                    <Route exact path="/" component={SearchBox}/>
                    <Route exact path="/" component={Showcase}/>
                    <Route exact path="/movie/:id" component={Movie}/>
                </section>
            </Router>
        </Provider>
    )
}

export { App };
