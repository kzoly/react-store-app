import { User } from "./User";

export class UserService{
    
    getListAPI=async():Promise<User[]>=>{
        const result=await fetch('https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/users');
        const users=await result.json();
        return users
    }
     getList =():User[] =>
    {
        return [
            {
              avatar:'https://cdn.fakercloud.com/avatars/guiiipontes_128.jpg',
              username:'Raoul17'
            }
            ,{
              avatar:'https://cdn.fakercloud.com/avatars/lu4sh1i_128.jpg',
              username:'Delilah57'
            },{
              avatar:'https://cdn.fakercloud.com/avatars/boxmodel_128.jpg',
              username:'Jony'
            },{
              avatar:'https://cdn.fakercloud.com/avatars/g3d_128.jpg',
              username:'Garnet83'
            },{
              avatar:'https://cdn.fakercloud.com/avatars/mikemai2awesome_128.jpg',
              username:'Ruth.Robel12'
            },
          ];
    }
}