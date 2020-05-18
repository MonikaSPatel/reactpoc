import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import employee from "./employee";
import { reducer as reduxFormReducer } from 'redux-form';

const reducers = combineReducers({
    routerReducer,
    employee,
    form: reduxFormReducer,

});

export default reducers;
