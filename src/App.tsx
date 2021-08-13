import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from './User';
import UserCard from './UserCard';
import { UserService } from './UserService';

// users endpoint:     https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users
// company endpoint:   https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/companies

function App() {

  let userService= new UserService();
  let [userList,setUserList]=useState<User[]>([]);

  useEffect(()=>{
    userService.getListAPI().then(users=>{
      setUserList(users)
    });
  },[]);
 


  let [userNameSearch,setUserNameSearch] =useState('');
  let onSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
    //userNameSearch=event.target.value;
    setUserNameSearch(event.target.value)
  };
  let search=(user:User):boolean =>{
    return user.username.toLowerCase().includes(userNameSearch.trim().toLowerCase());
  }
    return (
    <div>
        <input value={userNameSearch} onChange={onSearch} />

        <div className='grid-container'>

          {/* {
            userList.map(user=>{
              return(
                <UserCard  user={user} key={user.userName}/>
            );
            })
          } */}
           {
            userList.map( user=> ( search(user) && <UserCard  user={user} key={user.username}/>  ) )
          }
            

            
        </div>

    </div>
  );
}

export default App;
