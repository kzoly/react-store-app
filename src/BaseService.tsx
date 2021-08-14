import { action, observable, makeObservable } from "mobx";

export abstract class BaseService{

    endpoint:string='';

    items:any[]=[];
    setItems(items:any[]){this.items=items;}
    // a fenti 2 sor megfeleloje
    // let [userList,setUserList]=useState<User[]>([]);

    async getList():Promise<any[]> {
        const result=await fetch(this.endpoint);
        const items=await result.json();
        return items
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

   async create(data:any):Promise<any>{
       try{
            const result=await fetch(this.endpoint,{
                method:'POST', 
                headers: { 'Content-Type': 'application/json'  },
                body: JSON.stringify(data),
            });
            const user=await result.json();
            this.setItems([user,...this.items]);
           // this.setUserName('');
            //this.setUserAvatar('');
            return user
        }catch(err)
        {
            console.error(err);
        }
    }

    onDelete=async(id:string):Promise<void>=>{
        try{
             const result=await fetch(`${this.endpoint}/${id}`,{
                 method:'DELETE', 
                 
             });
             await result.json();
             this.setItems(this.items.filter(item=>item.id!==id));
             
         }catch(err)
         {
             console.error(err);
         }
     }
     constructor() {
        makeObservable(this,{
            items:observable,
            setItems:action.bound
        });
     }
     

}