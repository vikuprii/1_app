import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user6.png'

let Users = (props) => {

    let getUsers = () => 
    {
    if (props.users.length === 0) {
        debugger;
        axios.get("https://cors-anywhere.herokuapp.com/http://social-network.samuraijs.com/api/1.0/users").then( response => {
            debugger;
            props.setUsers(response.data.items);
        });
   }
}
   
   // https://cors-anywhere.herokuapp.com/

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed 
                            ? <button onClick={ () => { props.unfollow(u.id) } }>Unfollow</button> 
                            : <button onClick={ () => { props.follow(u.id) } }>Follow</button> }
                    </div>
                </span>    
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>    
            </div>)
        }
    </div>
}

export default Users;