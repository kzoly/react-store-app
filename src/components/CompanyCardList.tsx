import { CardList } from "./CardList"
import AvatarCard from "./AvatarCard";
import { Company } from "../model/Company";
import { CompanyStore } from "../stores/CompanyStore";
import { observer } from "mobx-react-lite";

interface CompanyCardListProps {
    store: CompanyStore

}
export const CompanyCardList = observer((props: CompanyCardListProps) => {
    const {
        filteredItems:items,
        onDelete,
        searchTerm,
        onSearch,
        //onEdit
    } = props.store;

    const getUser=(companyId:string):string=>{
        const users=props.store.rootStore.userStore.items.filter(user=>user.companyId===companyId)
        if(users.length>0)
            return '('+users.length+')';
            else
                return '';
    }

    return (
        <div>
            <input placeholder='Search..' value={searchTerm} onChange={onSearch} />
            <CardList
                items={items}
                itemRenderel={(item: Company) => (
                    <AvatarCard
                        item={{ id: item.id, title: item.name+getUser(item.id), description: item.description }}
                        onDelete={onDelete}
                      //  onEdit={onEdit}
                        key={item.id}
                    />
                )}
            />
        </div>
    )

})