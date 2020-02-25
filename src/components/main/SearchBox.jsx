import React, { Component } from 'react'
import searchIcon from "./../../images/search-icon.png";

class SearchBox extends Component {
    render() {
        return (
            <div className="wrapper__search">
                <div className="wrapper__search__text">
                    <img src={searchIcon} alt=""/>
                    Search for a movie, TV series ...
                </div>
                <input type="text" className="wrapper__search__input"/>
                <button className="wrapper__search__btn">Search</button>
            </div>
        )
    }
}

export { SearchBox };
