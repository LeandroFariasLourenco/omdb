import { Desktop } from "./header/Desktop";

import React from 'react'

function Header() {
    return (
        <section className="container">
            {window.innerWidth >= 1240 ? <Desktop/> : <Desktop/>}
        </section>
    )
}

export { Header };