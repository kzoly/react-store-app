import { action, makeObservable, observable } from "mobx";
import { Company } from "../model/Company";
import { BaseStore } from "./BaseStore";



export class CompanyStore extends BaseStore<Company>{
    public endpoint: string = ' https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/companies';

    public searchTerm: string = '';
  public setSearchTerm(searchTerm: string) { this.searchTerm = searchTerm; }
  //a fenti ket sor   
  //let [userNameSearch,setUserNameSearch] =useState('');

constructor() {
    super();
    makeObservable(this, {
        searchTerm:observable,
        setSearchTerm:action.bound,

    });

  
    this.getList().then(users => this.setItems(users));

  }
}