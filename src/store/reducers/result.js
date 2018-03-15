import * as actionTypes from '../actions/actionTypes';
import { duplicateObject } from '../utility/utility';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.STORE_RESULT:
            return duplicateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return duplicateObject(state, {results: updatedArray});
        default:
            return state;
    }
    
};

export default reducer;