import axios from "axios";
import API from "./../API-props";

const TYPE = {
    SEARCH_MOVIE: "SEARCH_MOVIE",
    FETCH_MOVIES: "FETCH_MOVIES"
}

const searchMovie = text => dispatch => {
    dispatch({
        type: TYPE.SEARCH_MOVIE,
        payload: text
    })
}

const fetchMovies = text => dispatch => {
    axios.get(`${API.APIUrl}${API.APIKey}&t=${text}`).then(response => dispatch({
        type: TYPE.FETCH_MOVIES,
        payload: response.data
    }))
    .catch(err => console.log(err))
}

export { TYPE, searchMovie, fetchMovies };