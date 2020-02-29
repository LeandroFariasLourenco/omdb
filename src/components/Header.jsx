import { Desktop } from "./header/Desktop";
import { Mobile } from "./header/Mobile";
import React from 'react'

function Header() {
    return (
        <section className="container">
            {window.innerWidth >= 1240 ? <Desktop /> : <Mobile />}
        </section>
    )
}

export { Header };