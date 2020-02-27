import axios from "axios";
import API from "./../API-props";

const TYPE = {
    SEARCH_MOVIE    : "SEARCH_MOVIE",
    FETCH_MOVIES    : "FETCH_MOVIES",
    FETCH_BY_MOVIE  : "FETCH_BY_MOVIE",
    FETCH_BY_SERIES : "FETCH_BY_SERIES"
}

const searchMovie = text => dispatch => {
    dispatch({
        type: TYPE.SEARCH_MOVIE,
        payload: text
    })
}

const fetchMovies = text => dispatch => {
    axios.get(`${API.APIUrl}${API.APIKey}&s=${text}`).then(response => dispatch({
        type: TYPE.FETCH_MOVIES,
        payload: response.data
    }))
    .catch(err => console.log(err));
}

const fetchByMovie = ( text , select ) => dispatch => {
    axios.get(`${API.APIUrl}${API.APIKey}&s=${text}&type=${select}`).then(response => dispatch({
        type: TYPE.FETCH_BY_MOVIE,
        payload: response.data
    }))
    .catch(err => console.log(err));
}

const fetchBySeries = ( text , select ) => dispatch => {
    axios.get(`${API.APIUrl}${API.APIKey}&s=${text}&type=${select}`).then(response => dispatch ({
        type: TYPE.FETCH_BY_SERIES,
        payload: response.data
    }))
    .catch(err => console.log(err));
}

export { TYPE, searchMovie, fetchMovies , fetchByMovie , fetchBySeries};