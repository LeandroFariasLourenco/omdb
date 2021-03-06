import { combineReducers }  from "redux";
import { TYPE } from "./actions";

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

function typeOfRequest(state = initialState, action) {
    switch (action.type) {
        case TYPE.SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case TYPE.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload.Search,
                loading: false
            }
        case TYPE.FETCH_BY_MOVIE:
            return{
                ...state,
                movies: action.payload.Search,
                loading: false
            }
        case TYPE.FETCH_BY_SERIES:
            return{
                ...state,
                movies: action.payload.Search,
                loading: false
            }
        case TYPE.FETCH_MOVIE:
            return{
                ...state,
                movie: action.payload,
                loading: false
            }
        case TYPE.LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};

export default combineReducers({
    movies : typeOfRequest
});