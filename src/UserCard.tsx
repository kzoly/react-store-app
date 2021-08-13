import React from 'react'
import { User } from './User'

interface UserCardProps{
    user:User;
    onDelete:(id:string)=>Promise<void>;
}

export default function UserCard(props:UserCardProps) {

    let {user,onDelete}=props;

    return (
        <div className='grid-item' >
                <img src={user.avatar} width='64' height='64' alt='pista' />
                <p>{user.username}</p>
                <button onClick={()=>onDelete(user.id)}>Delete</button>
            </div>
    )
}
