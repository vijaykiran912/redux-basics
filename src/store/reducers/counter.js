import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter+1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD5:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUB5:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state;
    }

   
}

export default reducer;

