import React, { Component, Fragment } from 'react';
import reactLogo from "./../../images/react_logo.png";

class Mobile extends Component {
    openHeaderNav = () => {
        this.navigation.classList.toggle("closed");
        this.navButton.classList.toggle("nav--open");
    }

    render() {
        return (
            <Fragment>
                <div className="container__button"
                    onClick={this.openHeaderNav}
                    ref={ref => this.navButton = ref}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="container__title">
                    <h1>Movie & Series</h1>
                </div>
                <div className="container__icons">
                    <img src={reactLogo} alt="" />
                </div>
                <nav className="container__nav closed"
                    ref={ref => this.navigation = ref}>
                    <ul className="container__nav__lists">
                        <li className="container__nav__lists__item">
                            <a href="">Github</a>
                        </li>
                        <li className="container__nav__lists__item">
                            <a href="">LinkedIn</a>
                        </li>
                        <li className="container__nav__lists__item">
                            <a href="">OMDB</a>
                        </li>
                        <div className="container__nav__lists__icon">
                            <a href="https://github.com/LeandroFariasLourenco" target="_blank">
                                <img src="https://avatars0.githubusercontent.com/u/54819000?s=460&v=4" />
                            </a>
                            <span>Leandro</span>
                        </div>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export { Mobile }
