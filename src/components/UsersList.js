import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap';


const UsersList = ({users,onDeleteUser}) =>
//const UsersList = ({users, onDeleteUser}) =>
{
    return (
        //reactstrap components
        //user and map 
        //users.map(): cause users is an array 
        //for each user return a ListGroupItem
        <ListGroup>
            {
                users.sort((a,b) => {
                if (a.firstName > b.firstName)
                {
                    return 1;
                }
                else if (a.firstName < b.firstName)
                {
                    return -1;
                }
                else if (a.lastName > b.lastName)
                {
                    return 1;
                }
                else if (a.lastName < b.lastName)
                {
                    return -1;
                }
                else {
                    return 0;
                }
            }).map((user) => {
                return( <ListGroupItem key = {user.id}>
                    <section style={{display: 'flex'}}>
                        <div style={{flexGrow:1, margin: 'auto 0'}}>
                            {user.firstName} {user.lastName}
                        </div>
                        <div>
                            <button outline color ="danger" onClick={()=>onDeleteUser(user.id)}> 
                                Delete
                            </button>
                        </div>
                    </section>
                
                </ListGroupItem>);
            })}
        </ListGroup>)
}

export default UsersList