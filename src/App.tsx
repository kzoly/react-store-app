import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import { UserList } from './UserList';
import { UserService } from './UserService';

// users endpoint:     https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users
// company endpoint:   https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/companies

function App() {

  const userService= React.useMemo(()=> new UserService(),[]);
  const {userNameSearch,
    onSearch,
    newAvatarUrl,
    onAvatarChange,
    newUserName,
    onUserNameChange,
    onAddUser,
    userList,
    search,
    onDelete

  }=userService;
 
    return (
    <div>
        <input placeholder='Search..' value={userNameSearch} onChange={onSearch} />
        <div>
        <input placeholder='Avatar Url' value={newAvatarUrl} onChange={onAvatarChange} />
        <input placeholder='User Name' value={newUserName}  onChange={onUserNameChange} />
        <button onClick={onAddUser}>Add</button>
        </div>
        
        <UserList userList={userList} onDelete={ onDelete} search={search} />

    </div>
  );
}

export default observer(App);
