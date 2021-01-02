//Define Types relating to each actions
export const Types = {
    GET_USERS_REQUEST: 'users/get_users_request',
    GET_USERS_SUCCESS: 'users/get_users_success',
    CREATE_USER_REQUEST: 'users/create_user_request',
    DELETE_USER_REQUEST: 'users/delete_user_request',
    USERS_ERROR: 'users/user_error'
};

//export actual actions:
export const getUsersRequest =() =>(
{
    type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess =({items}) =>(//items: the array of users from api calling that we pass in 
{
    type: Types.GET_USERS_SUCCESS,
    payload: 
    {
        items
    }
});

export const createUserRequest = ({firstName, lastName}) =>({
    type: Types.CREATE_USER_REQUEST,
    payload: 
    {
        firstName,lastName
    }
});

export const deleteUserRequest = (userId) =>(
{
    type:Types.DELETE_USER_REQUEST,
    payload:
    {
        userId
    }
});

export const usersError = (error) =>
({
    type:Types.USERS_ERROR,
    payload: {
        error
    }
});