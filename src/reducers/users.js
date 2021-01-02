import {Types} from '../actions/users';
//Reducer: action handler for connecting actions and store, then become STATE changes

//Define INITIAL_STATE
const INITIAL_STATE = {
    items: [],
    error: ''
};

//Define users State changes
export default function users(state = INITIAL_STATE, action)
{
    switch(action.type)
    {
        case Types.GET_USERS_SUCCESS:{
                return{
                    ...state,
                    items:action.payload.items
                    //item: Be transmitted from payload of action getUsersSuccess
                }
        }
        case Types.USERS_ERROR:{
            console.log(action.payload.error);
                return{
                    ...state,
                    error: action.payload.error
                }
            }
        default:{
                return state;
        }
    }
}
