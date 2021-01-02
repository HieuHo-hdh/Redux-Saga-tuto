import usersSagas from './users';
import {all} from 'redux-saga/effects'
//all: result all Promises with fork process 

//rootSaga(): manage Sagas
export default function* rootSaga()
{
    yield all([  //Allow all fork processes to be created in parallel
        ...usersSagas
    ]);
}