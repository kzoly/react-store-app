import { makeAutoObservable } from "mobx";
import { User } from "./User";

export class UserService{

    userList:User[]=[];
    setUserList(userList:User[]){this.userList=userList;}
    // a fenti 2 sor megfeleloje
    // let [userList,setUserList]=useState<User[]>([]);
 
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
    
    getList=async():Promise<User[]>=>{
        const result=await fetch('https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users');
        const users=await result.json();
        return users
    }
    //  getList =():User[] =>
    // {
    //     return [
    //         {
    //           avatar:'https://cdn.fakercloud.com/avatars/guiiipontes_128.jpg',
    //           username:'Raoul17'
    //         }
    //         ,{
    //           avatar:'https://cdn.fakercloud.com/avatars/lu4sh1i_128.jpg',
    //           username:'Delilah57'
    //         },{
    //           avatar:'https://cdn.fakercloud.com/avatars/boxmodel_128.jpg',
    //           username:'Jony'
    //         },{
    //           avatar:'https://cdn.fakercloud.com/avatars/g3d_128.jpg',
    //           username:'Garnet83'
    //         },{
    //           avatar:'https://cdn.fakercloud.com/avatars/mikemai2awesome_128.jpg',
    //           username:'Ruth.Robel12'
    //         },
    //       ];
    // }

    create=async(data:User):Promise<User[]>=>{
       try{
            const result=await fetch('https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users',{
                method:'POST', 
                headers: { 'Content-Type': 'application/json'  },
                body: JSON.stringify(data),
            });
            const user=await result.json();
            this.setUserList([user,...this.userList]);
            this.setUserName('');
            this.setUserAvatar('');
            return user
        }catch(err)
        {
            console.error(err);
        }
    }

    onDelete=async(id:string):Promise<void>=>{
        try{
             const result=await fetch(`https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users/${id}`,{
                 method:'DELETE', 
                 
             });
             await result.json();
             this.setUserList(this.userList.filter(item=>item.id!==id));
             
         }catch(err)
         {
             console.error(err);
         }
     }

    constructor() {

        makeAutoObservable(this);

        //   useEffect(()=>{
        //     userService.getListAPI().then(users=>{
        //       setUserList(users)
        //     });
        //   },[]);
        this.getList().then(users=> this.setUserList(users) );

    }

}