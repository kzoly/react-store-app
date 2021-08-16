import { CardList } from "./CardList"
import AvatarCard from "./AvatarCard";
import { Company } from "../model/Company";

interface CompanyCardListProps {
    items: Company[];
    onDelete: (id: string) => Promise<void>;


}
export const CompanyCardList = (props: CompanyCardListProps) => {
    const { items, onDelete } = props;
    return (
        <CardList
            items={items}
            itemRenderel={(item: Company) => (
                <AvatarCard 
                item={{ id: item.id,title:item.name,description: item.description}}
                 onDelete={onDelete} 
                 key={item.id} 
                 />
        )}
/>
    )

}