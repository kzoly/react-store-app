import { action, computed, makeObservable, observable } from "mobx";
import { Company } from "../model/Company";
import { BaseStore } from "./BaseStore";
import { RootStore } from "./RootStore";



export class CompanyStore extends BaseStore<Company>{
  public endpoint: string = ' https://60fd9bcc1fa9e90017c70f18.mockapi.io/api/companies';
  public rootStore: RootStore;
  public searchTerm: string = '';
  public setSearchTerm(searchTerm: string) { this.searchTerm = searchTerm; }
  //a fenti ket sor   
  //let [userNameSearch,setUserNameSearch] =useState('');


  public get filteredItems(): Company[] {
    let items = this.items;
    items = items.filter(company => company.name
      .toLowerCase()
      .includes(this.searchTerm.trim().toLowerCase())
    );
    return items;
  }
  public onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    //userNameSearch=event.target.value;
    this.setSearchTerm(event.target.value)
  };

  constructor(rootStore: RootStore) {
    super();
    this.rootStore = rootStore;
    makeObservable(this, {
      filteredItems:computed,

      searchTerm: observable,
      setSearchTerm: action.bound,

    });


    this.getList().then(users => this.setItems(users));

  }
}