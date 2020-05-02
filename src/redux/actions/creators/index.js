import {
    SAVE_DUMMY_DATA
} from '../types';

export const saveDummyData = payload => {
    return {
        type: SAVE_DUMMY_DATA,
        payload
    }
}