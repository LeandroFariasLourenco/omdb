import React from 'react'
import { SearchBox } from "./main/SearchBox";
import { Showcase } from "./main/Showcase";

function App() {
    return (
        <section className="wrapper">
            <SearchBox/>
            <Showcase/>
        </section>
    )
}

export { App };
