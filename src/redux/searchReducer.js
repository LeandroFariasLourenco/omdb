import { TYPE } from "./actions";

const initialState = {
    text = '',
    movies =[],
    loading: false,
    movie =[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TYPE.SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
            default: 
            return state;
    }
};