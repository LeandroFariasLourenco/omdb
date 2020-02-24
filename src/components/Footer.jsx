import React from "react";
import { Desktop } from "./footer/Desktop";
import { Mobile } from "./footer/Mobile";

function Footer() {
    return (
        <section className="container">
            {window.innerHeight >= 1240 ? <Desktop/> : <Desktop/>}
        </section>
    )
}

export { Footer }
