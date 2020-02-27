import React, { Component } from 'react'
import { searchMovie, fetchMovies, fetchByMovie, fetchBySeries } from "./../../redux/actions";
import searchIcon from "./../../images/movie_logo.png";
import { connect } from "react-redux";

class SearchBox extends Component {
    handleOnSubmit = event => {
        event.preventDefault(); 
        const selectValue = this.typeRequest.value;
        switch (selectValue) {
            case "all":
                return this.props.fetchMovies(this.props.text);
            case "movie":
                return this.props.fetchByMovie(this.props.text , selectValue);
            case "series":
                return this.props.fetchBySeries(this.props.text , selectValue);
            default:
                return;
        }
    }

    handleInputChange = event => {
        const text = event.target.value;
        this.props.searchMovie(text);
    }

    render() {
        return (
            <div className="wrapper__search">
                <div className="wrapper__search__text">
                    <img
                        src={searchIcon}
                        alt="" />
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
                        required
                        onChange={this.handleInputChange}
                    />
                    <select
                        name="type"
                        className="wrapper__search__form__select"
                        ref={ref => this.typeRequest = ref}>
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
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovies , fetchByMovie , fetchBySeries})(SearchBox);
