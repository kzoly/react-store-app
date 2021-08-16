import { Button } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import { CompanyCardList } from './components/CompanyCardList';
import { UserCardList } from './components/UserCardList';
import { CompanyStore } from './stores/CompanyStore';
import { UserStore } from './stores/UserStore';

// users endpoint:     https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users
// company endpoint:   https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/companies

function App() {

  const userService = React.useMemo(() => new UserStore(), []);
  const companyService = React.useMemo(() => new CompanyStore(), []);
  const [page,setPage] =React.useState('user');
  const { searchTerm,
    onSearch,
    newAvatarUrl,
    onAvatarChange,
    newUserName,
    onUserNameChange,
    onAddUser,
    filteredItems,
    onDelete

  } = userService;

  return (
    <div>
      <input placeholder='Search..' value={searchTerm} onChange={onSearch} />
      <div>
        <input placeholder='Avatar Url' value={newAvatarUrl} onChange={onAvatarChange} />
        <input placeholder='User Name' value={newUserName} onChange={onUserNameChange} />
        <button onClick={onAddUser}>Add</button>
      </div>
      <div>
        <Button variant="outlined" color="primary" onClick={()=>setPage('user')}>     User      </Button>
        <Button variant="outlined" color="primary" onClick={()=>setPage('company')}>       Company    </Button>
      </div>
      { page==='user' && <UserCardList items={filteredItems} onDelete={onDelete} /> }
      {page==='company'&&<CompanyCardList items={companyService.items} onDelete={onDelete} />}

    </div>
  );
}

export default observer(App);
