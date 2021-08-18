import { action, computed, makeObservable, observable } from "mobx";
import { BaseStore } from "./BaseStore";
import { User } from "../model/User";
import { RootStore } from "./RootStore";


export class UserStore extends BaseStore<User>{
  
  public endpoint: string = 'https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users';

  public rootStore:RootStore;


  public searchTerm: string = '';
  public setSearchTerm(searchTerm: string) { this.searchTerm = searchTerm; }
  //a fenti ket sor   
  //let [userNameSearch,setUserNameSearch] =useState('');

  public newAvatarUrl: string = '';
  public setUserAvatar(newAvatarUrl: string) { this.newAvatarUrl = newAvatarUrl; }

  public newUserName: string = '';
  public setUserName(newUserName: string) { this.newUserName = newUserName; }
  //   let [newAvatarUrl,setUserAvatar]=useState('');
  //   let [newUserName,setUserName]=useState('');


  public onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    //userNameSearch=event.target.value;
    this.setSearchTerm(event.target.value)
  };

  public onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //userNameSearch=event.target.value;
    this.setUserAvatar(event.target.value)
  };

  public onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //userNameSearch=event.target.value;
    this.setUserName(event.target.value)
  };

  // public search = (user: User): boolean => {
  //   return user.username.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
  // }
  public get filteredItems():User[]{
    let items=this.items;
    items= items.filter(user=> user.username
      .toLowerCase()
      .includes(this.searchTerm.trim().toLowerCase())
      );
    return items;
  }

  public onAddUser = () => {
    const newItem = { avatar: this.newAvatarUrl, username: this.newUserName, companyId: "1" };
    this.create(newItem);
  }

//   public onEdit = () => {
//     const editedItem = {
//         avatar: this.newAvatarUrl, 
//         username: this.newUserName,
       
//     };        
//     this.update(editedItem);
// } 

  constructor(rootStore:RootStore) {
    super();
    this.rootStore=rootStore;

    makeObservable(this, {
      filteredItems:computed,
        searchTerm:observable,
        setSearchTerm:action.bound,

    });

    //   useEffect(()=>{
    //     userService.getListAPI().then(users=>{
    //       setUserList(users)
    //     });
    //   },[]);
    this.getList().then(users => this.setItems(users));

  }

}