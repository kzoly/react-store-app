import { ListItemAvatar } from "@material-ui/core";
import { User } from "../model/User"
import { CardList } from "./CardList"
import AvatarCard from "./AvatarCard";

interface UserCardListProps {
    items: User[];
    onDelete: (id: string) => Promise<void>;


}
export const UserCardList = (props: UserCardListProps) => {
    const { items, onDelete } = props;
    return (
        <CardList
            items={items}
            itemRenderel={(item: User) => (
                <AvatarCard 
                item={{ id: item.id,title:item.username,avatar:item.avatar }}
                 onDelete={onDelete} 
                 key={item.username} 
                 />
        )}
/>
    )

}