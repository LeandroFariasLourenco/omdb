const TYPE = {
    SEARCH_MOVIE = "SEARCH_MOVIE"
}

const searchMovie = text => dispatch => {
    dispatch({
        type: TYPE.SEARCH_MOVIE,
        payload: text
    })
}

export { TYPE , searchMovie };