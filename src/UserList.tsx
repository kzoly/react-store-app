import { User } from "./User";
import UserCard from "./UserCard";


interface UserListProps{
    userList:User[];
    search:(user:User)=>boolean;
    onDelete:(id:string)=>Promise<void>;
}
 
export const UserList=(props:UserListProps)=>{
    const{userList,search,onDelete}=props;
    return(
         <div className='grid-container'>

          {/* {
            userList.map(user=>{
              return(
                <UserCard  user={user} key={user.userName}/>
            );
            })
          } */}
           {
            userList.map( user=> ( search(user) && 
            <UserCard  user={user} onDelete ={ onDelete } key={user.id}/>  ) )
          }
            

            
         </div>
        
    );

}

