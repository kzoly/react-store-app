import { action, computed, makeObservable, observable } from "mobx";
import { BaseStore } from "./BaseStore";
import { User } from "../model/User";
import { RootStore } from "./RootStore";


export class UserStore extends BaseStore<User>{

  public endpoint: string = 'https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users';

  public rootStore: RootStore;

  public searchTerm: string = '';
  public setSearchTerm(searchTerm: string) { this.searchTerm = searchTerm; }
  //a fenti ket sor   
  //let [userNameSearch,setUserNameSearch] =useState('');
  public onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {

    this.setSearchTerm(event.target.value)
  };


  public newAvatarUrl: string = '';
  public setUserAvatar(newAvatarUrl: string) { this.newAvatarUrl = newAvatarUrl; }

  public onAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    this.setUserAvatar(event.target.value)
  };

  public newUserName: string = '';
  public setUserName(newUserName: string) { this.newUserName = newUserName; }
  //   let [newAvatarUrl,setUserAvatar]=useState('');
  //   let [newUserName,setUserName]=useState(''); 

  public onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    this.setUserName(event.target.value)
  };


  public changeAvatarUrl: string = '';
  public setChangeAvatarUrl(changeAvatarUrl: string) { this.changeAvatarUrl = changeAvatarUrl; }

  public onchangeAvatarUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setChangeAvatarUrl(event.target.value)
  };

  public changeUserName: string = '';
  public setChangeUserName(changeUserName: string) { this.changeUserName = changeUserName; }

  public onchangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setChangeUserName(event.target.value)
  };

  
  public showUpdateItem: Boolean = false;
  public setShowUpdateItem(showUpdateItem: Boolean) { this.showUpdateItem = showUpdateItem }


  public changeId: string = '';
  public changeCompanyId: string = '1';


  public get filteredItems(): User[] {
    let items = this.items;
    items = items.filter(user => user.username
      .toLowerCase()
      .includes(this.searchTerm.trim().toLowerCase())
    );
    return items;
  }

  public onAddUser = () => {
    const newItem = { avatar: this.newAvatarUrl, username: this.newUserName, companyId: "1" };
    this.create(newItem);
    this.setUserName('');
    this.setUserAvatar('');
  }
  public onChangeUser = () => {
    const updateItem = { avatar: this.changeAvatarUrl, username: this.changeUserName, id: this.changeId, companyId: this.changeCompanyId };
    //console.log(updateItem);
    this.update(updateItem);
    this.setShowUpdateItem(!this.showUpdateItem);
  }


  public onEdit = async (item: { id: string; avatar?: string; title?: string; description?: string; }): Promise<void> => {


    //console.log(item);

    this.setChangeAvatarUrl(item.avatar);
    this.setChangeUserName(item.title);
    this.changeId = item.id;
    this.changeCompanyId = item.description
    this.setShowUpdateItem(!this.showUpdateItem);
  }

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;

    makeObservable(this, {
      filteredItems: computed,

      searchTerm: observable,
      setSearchTerm: action.bound,

      newAvatarUrl: observable,
      setUserAvatar: action.bound,

      newUserName: observable,
      setUserName: action.bound,

      changeAvatarUrl: observable,
      setChangeAvatarUrl: action.bound,

      changeUserName: observable,
      setChangeUserName: action.bound,

    });

    //   useEffect(()=>{
    //     userService.getListAPI().then(users=>{
    //       setUserList(users)
    //     });
    //   },[]);
    this.getList().then(users => this.setItems(users));

  }

}