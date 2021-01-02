//This file is to create a combine Reducers into 1 reducer

import {combineReducers} from 'redux';//This reducer is for combining other reducers
import UsersReducer from './users'; //From reducers/users.js => Use UsersReducer

export default combineReducers({
    users: UsersReducer
});

