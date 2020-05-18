import { LOAD, LOAD_SUCESS, LOAD_FAIL } from '../../Common/ActionTypes';

export const loadData = () => {
    return {
        type: LOAD,
    };
}
export const setData = data => {
    return {
        type: LOAD_SUCESS,
        data,
    };
}

export const setError = error => {
    return {
        type: LOAD_FAIL,
        error
    };
}