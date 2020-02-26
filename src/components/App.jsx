import React            from 'react'
import SearchBox        from "./main/SearchBox";
import { Showcase }     from "./main/Showcase";
import { store }        from "./../redux/store";
import { Provider }     from "react-redux";

function App() {
    return (
        <section className="wrapper">
            <Provider store={store}>
                <SearchBox />
                <Showcase />
            </Provider>
        </section>
    )
}

export { App };
