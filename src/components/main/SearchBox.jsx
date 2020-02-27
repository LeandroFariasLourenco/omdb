import React, { Component }               from 'react'
import { searchMovie , fetchMovies }      from "./../../redux/actions";
import searchIcon                         from "./../../images/movie_logo.png";
import { connect }                        from "react-redux";

class SearchBox extends Component {
    handleOnChange = event => {
        this.props.searchMovie(event.target.value);
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.fetchMovies(this.props.text);
    }

    render() {
        return (
            <div className="wrapper__search">
                <div className="wrapper__search__text">
                    <img 
                        src={searchIcon} 
                        alt=""/>
                    Search for a movie, TV series ...
                </div>
                <form
                    onSubmit={this.handleOnSubmit} 
                    className="wrapper__search__form">
                <input 
                    placeholder="Type in any movie or tv series"
                    type="text" 
                    className="wrapper__search__form__input"
                    name="searchText"
                    onChange={this.handleOnChange}
                />
                <select 
                    name="type" 
                    className="wrapper__search__form__select">
                    <option value="all">All</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                </select>
                <button 
                    type="submit" 
                    className="wrapper__search__form__btn">
                    Search                    
                </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text : state.movies.text 
})

export default connect(mapStateToProps, { searchMovie , fetchMovies }) (SearchBox);
