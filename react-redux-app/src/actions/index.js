import axios from 'axios';

export const FETCH_EPISODES_START = "FETCH_EPISODES_START";
export const FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS";
export const FETCH_EPISODES_FAIL = "FETCH_EPISODES_FAIL";

export function getEpisodes(){
    return function(dispatch) {
        dispatch({type: FETCH_EPISODES_START});
        axios.get('https://cors-anywhere.herokuapp.com/rickandmortyapi.com/api/episode')
            .then(response => {
                dispatch({
                    type: FETCH_EPISODES_SUCCESS, 
                    payload: response.data.results
                })
            })
            .catch(error => {
                dispatch({
                    type: FETCH_EPISODES_FAIL,
                    payload: error
                })
            })
    }
}