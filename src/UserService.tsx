import {  makeObservable } from "mobx";
import { BaseService } from "./BaseService";
import { User } from "./User";

export class UserService extends BaseService{
  endpoint:string='https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users';

   
 
    userNameSearch:string='';
    setUserNameSearch(userNameSearch:string) {this.userNameSearch=userNameSearch;}
    //a fenti ket sor   
    //let [userNameSearch,setUserNameSearch] =useState('');

    newAvatarUrl:string='';
    setUserAvatar(newAvatarUrl:string) {this.newAvatarUrl=newAvatarUrl;}
  
    newUserName:string='';
    setUserName(newUserName:string) {this.newUserName=newUserName;}
    //   let [newAvatarUrl,setUserAvatar]=useState('');
    //   let [newUserName,setUserName]=useState('');


   onSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
    //userNameSearch=event.target.value;
    this.setUserNameSearch(event.target.value)
  };

   onAvatarChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    //userNameSearch=event.target.value;
    this.setUserAvatar(event.target.value)
  };

   onUserNameChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    //userNameSearch=event.target.value;
    this.setUserName(event.target.value)
  };

   search=(user:User):boolean =>{
    return user.username.toLowerCase().includes(this.userNameSearch.trim().toLowerCase());
  }
   onAddUser=()=>{
        const newItem={avatar:this.newAvatarUrl,username:this.newUserName,companyId:"1"};
        this.create(newItem);
  }
    
   

    constructor() {
        super();
        makeObservable(this, { } );

        //   useEffect(()=>{
        //     userService.getListAPI().then(users=>{
        //       setUserList(users)
        //     });
        //   },[]);
        this.getList().then(users=> this.setItems(users) );

    }

}