import * as actionTypes from '../actions/actionTypes';
import { duplicateObject } from '../utility/utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return duplicateObject(state, {results: updatedArray});
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return duplicateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
    
};

export default reducer;