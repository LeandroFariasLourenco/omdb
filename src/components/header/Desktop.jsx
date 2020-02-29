import React, { Fragment } from 'react'
import reactLogo from "./../../images/imdb_logo.png";
import imdb from "./../../images/react_logo.png";

function Desktop() {
    return (
        <Fragment>
            <h1>Movie & Series</h1>
            <nav className="container__navbar">
                <ul className="container__navbar__listings">
                    <li className="container__navbar__listings__item">
                        <a className="redirect" href="">Github</a>
                    </li>
                    <li className="container__navbar__listings__item">
                        <a className="redirect" href="">Linkedin</a>
                    </li>
                    <li className="container__navbar__listings__item">
                        <a className="redirect" href="">OMDB</a>
                    </li>
                    <li className="container__navbar__listings__item">
                        <a className="redirect" href=""></a>
                    </li>
                </ul>
            </nav>
            <div className="container__logos">
                <img src={imdb} alt="" />
                <img src={reactLogo} alt="" />
            </div>
        </Fragment>
    )
}

export { Desktop };
