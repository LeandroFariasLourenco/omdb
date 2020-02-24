import React from 'react'
import reactLogo from "./../../images/imdb_logo.png";
import imdb from "./../../images/react_logo.png";

function Desktop() {
    return (
        <div class="container__header">
            <h1>Movie & Series</h1>
            <nav className="container__header__navbar">
                <ul className="container__header__navbar__listings">
                    <li className="container__header__navbar__listings__item">
                        <a className="redirect" href="">Placeholder</a>
                    </li>
                    <li className="container__header__navbar__listings__item">
                        <a className="redirect" href="">Placeholder</a>
                    </li>
                    <li className="container__header__navbar__listings__item">
                        <a className="redirect" href="">Placeholder</a>
                    </li>
                    <li className="container__header__navbar__listings__item">
                        <a className="redirect" href="">Placeholder</a>
                    </li>
                </ul>
            </nav>
            <div className="container__header__logos">
                <img src={imdb} alt="" />
                <img src={reactLogo} alt="" />
            </div>
        </div>
    )
}

export { Desktop }
