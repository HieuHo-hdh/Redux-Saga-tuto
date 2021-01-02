import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users'; 
import * as api from '../api/users';

function* getUsers()
{
    try
    {
        const result = yield call(api.getUsers);    //call: call getUsers từ api
        yield put(actions.getUsersSuccess({
            items: result.data.data
        }));
    }
    catch(e){
        yield put(actions.usersError({
            error: 'An error occurred when trying to get users'
        }))
    }
}

function* watchGetUsersRequest()
{
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);//params: (name of action Types, actual actions)
    /*yield: mỗi khi yield, ta sẽ trả về 1 Effect object - chứa thông tin đặc biệt dùng để chỉ dẫn middleware của Redux 
    thực thi các hoạt động khác ví dụ như gọi một hàm async khác hay put một action tới store*/
}

function* createUser(action)
{
    //console.log(action);
    //yield;
    try{
        //How it works? When function pass to it is the 1st argument, if we want to attach that argument to this function, add it in a seperate argument
        //yield call (api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName});
        //yield call(getUsers); //After adding, getUsers is used to refresh page and update data
        yield call(api.createUser,{firstName: action.payload.firstName, lastName: action.payload.lastName});
        yield call(getUsers);
    }
    catch(e)
    {
        yield put(actions.usersError({
            error: 'An error occurred when trying to create user'
        }))
    }
}

function* watchCreateUserRequest()
{
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

function* deleteUser({userId})
{
    try
    {
        yield call(api.deleteUser, userId);
        yield call(getUsers);
    }
    catch(e)
    {
        yield put(actions.usersError({
            error: 'An error occurred when trying to delete user'
        }))
    }
}

function* watchDeleteUserRequest()
{
    while(true)
    {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser,{
            userId: action.payload.userId
        })
    }
}

//Một mảng chứa tất cả (fork -> watch)
const usersSaga =[
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
];

export default usersSaga;