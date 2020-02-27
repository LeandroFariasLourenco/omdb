import { TYPE } from "./actions";

const initialState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
}

export default function (state = initialState, action) {
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
                movies: action.payload.Search
            }
        case TYPE.FETCH_BY_MOVIE:
            return{
                ...state,
                movies: action.payload.Search
            }
        case TYPE.FETCH_BY_SERIES:
            return{
                ...state,
                movies: action.payload.Search
            }
        default:
            return state;
    }
};