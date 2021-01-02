import axios from 'axios';
//HTTP client, dựa trên Promise => hỗ trợ xây dựng API

export const getUsers = () =>   //Hàm getUsers, get users từ API với axios hỗ trợ
{
    return axios.get('/users',  
        //Hàm get ("URL", configuration details)
        //https://rem-rest-api.herokuapp.com/api => https://rem-rest-api.herokuapp.com/api/users
    {
        params:
        {
            limit:1000  //Số getUsers_request giới hạn
        }
    })
}

export const createUser=({firstName, lastName})=>{
    return axios.post('/users', {
        firstName, lastName
    })
};

export const deleteUser =(userId) =>
{
    return axios.delete(`/users/${userId}`)
};