import {
    SAVE_DUMMY_DATA
} from '../actions/types';
import _get from 'lodash/get';
export const dummyReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case SAVE_DUMMY_DATA:
            return {...state, dummyData: action.payload}
    
        default:
            return state;
    }
}