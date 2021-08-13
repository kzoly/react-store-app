import React from 'react'
import { User } from './User'

interface UserCardProps{
    user:User;
}

export default function UserCard(props:UserCardProps) {

    let {user}=props;

    return (
        <div className='grid-item' >
                <img src={user.avatar} width='64' height='64' alt='pista' />
                <p>{user.username}</p>
            </div>
    )
}
