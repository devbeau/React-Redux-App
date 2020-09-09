import {
    FETCH_EPISODES_START,
    FETCH_EPISODES_SUCCESS,
    FETCH_EPISODES_FAIL
} from '../actions';

const initialState = {
    episodes: [],
    error: '',
    isFetching: false,
};

function reducer(state = initialState, action){
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_EPISODES_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case FETCH_EPISODES_SUCCESS:
            return {
                ...state,
                episodes: action.payload,
                isFetching: false,
                error: '',
            }
        case FETCH_EPISODES_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;